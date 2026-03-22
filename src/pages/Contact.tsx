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
import { useScrollReveal } from "@/hooks/useScrollReveal";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Set these in .env file as VITE_EMAILJS_SERVICE_ID, etc.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lwz0j7r';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_fixl4lp';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YQIx5toB7RJ9MmWZ4';

const Contact = () => {
  useScrollReveal();
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

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="section-title fade-in-up text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Ready to start your project? Fill out the form below and we'll respond within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 bg-white border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-glass stagger-1 border-primary/20 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-1">meet.bhatt@codenestcollective.net</p>
                <p className="text-sm text-muted-foreground">het.patel@codenestcollective.net</p>
              </CardContent>
            </Card>

            <Card className="card-glass stagger-2 border-primary/20 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">24-Hour Response</h3>
                <p className="text-sm text-muted-foreground mb-1">We respond to all inquiries</p>
                <p className="text-sm text-muted-foreground">within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="card-glass stagger-3 border-primary/20 text-center">
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

      {/* Contact Form and Map Section - Horizontal Layout */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-lg md:text-xl font-bold mb-3 text-primary">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>
              <Card className="card-glass shadow-soft">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                            setFormData({ ...formData, name: value });
                          }}
                          placeholder="Your name"
                          className="input-solid mt-1.5 border-gray-300 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
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
                          className="input-solid mt-1.5 border-gray-300 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">Company (Optional)</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                          setFormData({ ...formData, company: value });
                        }}
                        placeholder="Your company name"
                        className="input-solid mt-1.5 border-gray-300 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Project Description *</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        className="input-solid mt-1.5 border-gray-300 focus:border-primary focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium">Budget (Optional)</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger className="input-solid mt-1.5 border-gray-300 focus:border-primary focus:ring-primary/20">
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

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
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
                          className="w-full gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          <MessageSquare className="w-5 h-5" />
                          <span>WhatsApp</span>
                        </Button>
                      </a>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <div className="mb-6">
                <h2 className="text-lg md:text-xl font-bold mb-3 text-primary">Our Location</h2>
                <p className="text-lg text-muted-foreground">
                  Based in Ahmedabad, serving clients worldwide
                </p>
              </div>
              <Card className="card-glass overflow-hidden shadow-soft h-[calc(100%-88px)]">
                <CardContent className="p-0 h-full">
                  <div className="w-full h-full min-h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843338438!2d72.41493028487688!3d23.020473633863003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CodeNest Collective Technologies Location - Ahmedabad, Gujarat, India"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
