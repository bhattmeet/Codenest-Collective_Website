import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, FileText, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Set these in .env file as VITE_EMAILJS_SERVICE_ID, etc.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lwz0j7r';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_fixl4lp'; // Using same template as contact for now
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YQIx5toB7RJ9MmWZ4';

// Cloudinary Configuration
// Set these in .env file as VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const JobApplicationModal = ({ isOpen, onClose, jobTitle }: JobApplicationModalProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }

      setCvFile(file);
    }
  };

  const removeFile = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
      throw new Error('Cloudinary configuration is missing. Please contact support.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'job-applications'); // Organize uploads in a folder

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to upload file to cloud storage');
      }

      const data = await response.json();
      return data.secure_url; // Returns the HTTPS URL of the uploaded file
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error('Failed to upload resume. Please try again or use a resume link instead.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile && !formData.resume) {
      toast({
        title: "Resume Required",
        description: "Please upload your CV or provide a link to your resume",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let resumeUrl = formData.resume;

      // If CV file is uploaded, upload to Cloudinary first
      if (cvFile) {
        toast({
          title: "Uploading Resume...",
          description: "Please wait while we upload your resume.",
        });

        resumeUrl = await uploadToCloudinary(cvFile);

        toast({
          title: "Resume Uploaded!",
          description: "Now sending your application...",
        });
      }

      // Prepare template parameters
      const templateParams = {
        job_title: jobTitle,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        resume_link: resumeUrl || 'Not provided',
        cover_letter: formData.coverLetter,
        to_name: 'CodeNest Collective Technologies',
        to_email: 'codenestcollective@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", resume: "", coverLetter: "" });
      setCvFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      onClose();
    } catch (error) {
      console.error('Application Error:', error);

      let errorMessage = "Please try again or email us directly at codenestcollective@gmail.com";

      if (error instanceof Error) {
        errorMessage = `${error.message}. Please contact us directly at codenestcollective@gmail.com`;
      }

      toast({
        title: "Failed to Submit Application",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl">
        <DialogHeader className="bg-gradient-to-r from-[#2E5BDA] to-[#4874E8] -mx-6 -mt-6 px-6 py-6 mb-6 rounded-t-lg">
          <DialogTitle className="text-2xl text-white">Apply for {jobTitle}</DialogTitle>
          <DialogDescription className="text-white/90 text-base">
            Fill out the form below to submit your application. We'll review it and get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 px-1">
          <div>
            <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <Label className="text-sm font-semibold text-gray-700 mb-2 block">
              Resume/CV <span className="text-red-500">*</span>
            </Label>
            <div className="space-y-3">
              {/* File Upload */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-primary font-medium transition-all"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!!cvFile}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {cvFile ? "CV Uploaded Successfully" : "Upload CV (PDF, DOC, DOCX)"}
                </Button>

                {cvFile && (
                  <div className="mt-3 flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <FileText className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-green-800 font-semibold truncate max-w-xs">
                          {cvFile.name}
                        </span>
                        <span className="text-xs text-green-600">
                          {(cvFile.size / 1024).toFixed(1)} KB
                        </span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      className="h-auto p-2 hover:bg-green-200 rounded-full transition-all"
                    >
                      <X className="w-4 h-4 text-green-700" />
                    </Button>
                  </div>
                )}
              </div>

              {/* OR divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Resume Link */}
              <div>
                <Input
                  id="resume"
                  type="url"
                  placeholder="Paste link to your resume (LinkedIn, Google Drive, etc.)"
                  value={formData.resume}
                  onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                  disabled={!!cvFile}
                  className="border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="coverLetter" className="text-sm font-semibold text-gray-700 mb-2 block">
              Cover Letter <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="coverLetter"
              rows={6}
              required
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              className="border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell us why you're a great fit for this role..."
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 border-gray-300 hover:bg-gray-100 font-medium"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-6 bg-gradient-to-r from-[#2E5BDA] to-[#4874E8] hover:from-[#2651C9] hover:to-[#3E65D7] text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
