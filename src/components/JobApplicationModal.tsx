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
        to_email: 'meet.bhatt@codenestcollective.net',
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

      let errorMessage = "Please try again or email us directly at meet.bhatt@codenestcollective.net";

      if (error instanceof Error) {
        errorMessage = `${error.message}. Please contact us directly.`;
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below to submit your application.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <Label>Resume/CV</Label>
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
                  className="w-full"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!!cvFile}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {cvFile ? "CV Uploaded" : "Upload CV (PDF, DOC)"}
                </Button>

                {cvFile && (
                  <div className="mt-2 flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-700 font-medium truncate">
                        {cvFile.name}
                      </span>
                      <span className="text-xs text-green-600">
                        ({(cvFile.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      className="h-auto p-1 hover:bg-green-100"
                    >
                      <X className="w-4 h-4 text-green-700" />
                    </Button>
                  </div>
                )}
              </div>

              {/* OR divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm text-muted-foreground">OR</span>
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
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              rows={6}
              required
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
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
