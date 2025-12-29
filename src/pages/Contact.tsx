import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Loader2, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_lwz0j7r'; // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_fixl4lp'; // Your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'YQIx5toB7RJ9MmWZ4'; // Your EmailJS Public Key

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized with public key');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate EmailJS credentials
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS credentials are not configured. Please check your environment variables.');
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'N/A',
        phone: formData.phone || 'N/A',
        budget: formData.budget || 'Not specified',
        message: formData.message,
        to_name: 'Codenest Collective Technologies', // Your company name
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS response:', response);

      // Success
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", company: "", phone: "", message: "", budget: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);

      // Get detailed error message
      let errorMessage = "Please try again or contact us directly at meet.bhatt@codenestcollective.net";

      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack
        });
        errorMessage = `${error.message}. Please contact us directly at meet.bhatt@codenestcollective.net`;
      }

      // Error handling
      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Get In Touch"
        description="Contact CodeNest Collective Technologies for software development inquiries. We respond within 24 hours. Reach out to discuss your project and get a free consultation."
        path="/contact"
        keywords="contact software company, get a quote, software development inquiry, reach out, contact us, free consultation"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your project? Fill out the form below and we'll respond within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 bg-white border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-1">meet.bhatt@codenestcollective.net</p>
                <p className="text-sm text-muted-foreground">het.patel@codenestcollective.net</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">24-Hour Response</h3>
                <p className="text-sm text-muted-foreground mb-1">We respond to all inquiries</p>
                <p className="text-sm text-muted-foreground">within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Location</h3>
                <p className="text-sm text-muted-foreground mb-1">Ahmedabad, Gujarat</p>
                <p className="text-sm text-muted-foreground">India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                        setFormData({ ...formData, name: value });
                      }}
                      placeholder="Your name"
                      className="mt-2 border-gray-300 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\s/g, '');
                        setFormData({ ...formData, email: value });
                      }}
                      placeholder="your@email.com"
                      className="mt-2 border-gray-300 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-base font-medium">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                      setFormData({ ...formData, company: value });
                    }}
                    placeholder="Your company name"
                    className="mt-2 border-gray-300 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium">Project Description *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="mt-2 border-gray-300 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="text-base font-medium">Budget (Optional)</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-primary focus:ring-primary/20">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 gap-2 bg-primary hover:bg-primary/90 !h-14 !text-base !py-4 sm:!h-11 sm:!text-sm sm:!py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={24} className="animate-spin sm:!w-5 sm:!h-5" />
                        <span className="text-base sm:text-sm">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-base sm:text-sm">Send Message</span>
                        <Send size={24} className="sm:!w-5 sm:!h-5" />
                      </>
                    )}
                  </Button>
                  <a
                    href="https://wa.me/918735940200?text=Hi,%20I'd%20like%20to%20discuss%20a%20software%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="w-full gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white !h-14 !text-base !py-4 sm:!h-11 sm:!text-sm sm:!py-2"
                    >
                      <MessageSquare size={24} className="sm:!w-5 sm:!h-5" />
                      <span className="text-base sm:text-sm">Chat on WhatsApp</span>
                    </Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
