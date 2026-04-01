import { useState, useEffect } from "react";
import { Mail, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Set these in .env file as VITE_EMAILJS_SERVICE_ID, etc.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lwz0j7r';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID || 'template_newsletter';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YQIx5toB7RJ9MmWZ4';

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send newsletter signup email
      const templateParams = {
        subscriber_email: email,
        to_name: 'CodeNest Collective Technologies',
        to_email: 'codenestcollective@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubscribed(true);
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter",
      });
      setEmail("");

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (error) {
      console.error('Newsletter signup error:', error);

      toast({
        title: "Subscription Failed",
        description: "Please try again or contact us directly at codenestcollective@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSubscribed ? (
        <div className="flex items-center gap-2 p-2 bg-green-500/20 border border-green-400/50 rounded-lg">
          <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
          <p className="text-xs text-green-100 font-medium">
            You're subscribed! Check your inbox for confirmation.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm">Newsletter</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Subscribe to our newsletter to get your weekly dose of news, updates, tips and special offers.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}
                disabled={isSubmitting}
                className="w-full h-9 pl-10 bg-white border-gray-200 focus:border-primary text-gray-900 text-xs placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              size="sm"
              className="w-full gap-2 bg-primary hover:bg-primary/90 h-9 text-xs font-medium"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Subscribe</span>
                </>
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
