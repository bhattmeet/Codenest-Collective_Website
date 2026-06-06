import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_lwz0j7r";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || "template_fixl4lp";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YQIx5toB7RJ9MmWZ4";

const Contact = () => {
  useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    building: "", // What are you building? (dropdown)
    message: "",
    timeline: "",
    budget: "",
  });

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error(
          "EmailJS credentials are not configured. Please check your environment variables.",
        );
      }
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "N/A",
        phone: formData.phone || "N/A",
        building: formData.building || "Not specified",
        timeline: formData.timeline || "Not specified",
        budget: formData.budget || "Not specified",
        message: formData.message,
        to_name: "Codenest Collective",
      };
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      toast({
        title: "Brief Received!",
        description: "Thanks for reaching out. We respond within 24 hours on business days.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        building: "",
        message: "",
        timeline: "",
        budget: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      let errorMessage =
        "Please try again or contact us directly at hello@codenestcollective.net";
      if (error instanceof Error) {
        errorMessage = `${error.message}. Please contact us directly at hello@codenestcollective.net`;
      }
      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      icon: Mail,
      title: "Email Us",
      lines: ["hello@codenestcollective.net"],
      href: "mailto:hello@codenestcollective.net",
      cta: "Send an email",
    },
    {
      icon: Clock,
      title: "24-Hour Response",
      lines: ["We respond to all inquiries", "within one business day"],
      cta: "Average reply time",
    },
    {
      icon: MapPin,
      title: "Studio",
      lines: ["Ahmedabad, Gujarat", "India"],
      cta: "Working worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="Start A Project — Codenest Collective"
        description="Send the brief. We scope projects in 48 hours and respond within 24 hours on business days. WhatsApp for urgent projects."
        path="/contact"
        keywords="hire Flutter developers India, scope a project Codenest, contact Codenest Collective, software development brief"
      />
      <ScrollProgress />
      <Navigation />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] grain-overlay">
        <div className="absolute inset-0 opacity-[0.07] z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 -left-32 w-[460px] h-[460px] rounded-full bg-[#5088FA]/40 blur-[120px] animate-blob" />
          <div className="absolute bottom-0 -right-32 w-[460px] h-[460px] rounded-full bg-[#42A5F5]/35 blur-[120px] animate-blob animation-delay-3000" />
        </div>

        <span className="corner-plus text-white/40 top-6 left-6" />
        <span className="corner-plus text-white/40 top-6 right-6" />
        <span className="corner-plus text-white/40 bottom-6 left-6" />
        <span className="corner-plus text-white/40 bottom-6 right-6" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">Start A Project</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>Tell us what</span>{" "}
              <span style={{ animationDelay: "0.2s" }} className="font-serif-accent text-white/85">
                you're
              </span>{" "}
              <span style={{ animationDelay: "0.34s" }}>
                <span className="brush-underline gradient-text-on-dark">building.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              We respond within 24 hours on business days. For urgent projects, WhatsApp us
              directly.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── Info cards ─────────────── */}
      <section className="section-pad-tight bg-blue-soft relative">
        <div className="section-container max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft-lg">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="relative bg-card p-8 hover:bg-[hsl(var(--background-tinted))] transition-colors group"
                >
                  <span className="corner-plus text-foreground/20 top-4 right-4" />

                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-xs font-semibold text-primary/60 tabular-nums tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <Icon className="w-6 h-6 text-primary mb-5 group-hover:scale-110 group-hover:rotate-[-8deg] transition-transform duration-500" />
                  <h3 className="font-display text-lg font-semibold tracking-tight mb-2 text-foreground">
                    {card.title}
                  </h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                      {line}
                    </p>
                  ))}
                  {card.href && (
                    <a
                      href={card.href}
                      className="arrow-link text-xs uppercase tracking-[0.18em] text-primary mt-5 inline-flex"
                    >
                      {card.cta}
                      <span className="arrow-track" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Form + map ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-subtle opacity-40 pointer-events-none" />
        <div className="relative section-container max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7">
              <span className="eyebrow mb-4">Send The Brief</span>
              <h2 className="font-display mt-3 mb-3 leading-[1.1]">
                What's the{" "}
                <span className="brush-underline gradient-text">core problem?</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-lg">
                Who uses it, and where are you in the process? We respond within 24 hours on
                business days.
              </p>

              <div className="card-premium gradient-border p-7 md:p-9">
                <span className="corner-plus text-foreground/20 top-4 left-4" />
                <span className="corner-plus text-foreground/20 top-4 right-4" />
                <span className="corner-plus text-foreground/20 bottom-4 left-4" />
                <span className="corner-plus text-foreground/20 bottom-4 right-4" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                          setFormData({ ...formData, name: value });
                        }}
                        placeholder="Your name"
                        className="input-solid mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, "");
                          setFormData({ ...formData, email: value });
                        }}
                        placeholder="you@company.com"
                        className="input-solid mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="company"
                      className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                    >
                      Company (optional)
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your company name"
                      className="input-solid mt-2"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="building"
                      className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                    >
                      What are you building? *
                    </Label>
                    <Select
                      value={formData.building}
                      onValueChange={(value) => setFormData({ ...formData, building: value })}
                    >
                      <SelectTrigger className="input-solid mt-2" id="building">
                        <SelectValue placeholder="Select what fits best" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="web-app">Web App</SelectItem>
                        <SelectItem value="backend-api">Backend API</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="end-to-end">End-to-End Product</SelectItem>
                        <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                    >
                      Describe the project *
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What's the core problem, who uses it, and where are you in the process?"
                      className="input-solid mt-2 resize-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="timeline"
                        className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                      >
                        Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          setFormData({ ...formData, timeline: value })
                        }
                      >
                        <SelectTrigger className="input-solid mt-2" id="timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="within-1-month">Within 1 Month</SelectItem>
                          <SelectItem value="1-3-months">1–3 Months</SelectItem>
                          <SelectItem value="3-6-months">3–6 Months</SelectItem>
                          <SelectItem value="exploring">Just Exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="budget"
                        className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground"
                      >
                        Budget
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger className="input-solid mt-2" id="budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1L">Under ₹1L</SelectItem>
                          <SelectItem value="1L-5L">₹1L – ₹5L</SelectItem>
                          <SelectItem value="5L-15L">₹5L – ₹15L</SelectItem>
                          <SelectItem value="15L+">₹15L+</SelectItem>
                          <SelectItem value="open">Open To Discussion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="shine-sweep inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-md bg-[hsl(var(--primary))] text-white font-semibold text-sm shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary-hover))] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin relative z-[2]" />
                          <span className="relative z-[2]">Sending…</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-[2]">Send The Brief</span>
                          <Send className="w-4 h-4 relative z-[2]" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      We respond within 24 hours on business days. For urgent projects,{" "}
                      <a
                        href="https://wa.me/919426507055?text=Hi%2C%20I%27d%20like%20to%20scope%20a%20project%20with%20Codenest%20Collective"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        WhatsApp us directly
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Side: alt contact + map */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="card-premium p-6">
                <span className="corner-plus text-foreground/20 top-3 right-3" />
                <span className="eyebrow mb-4">Prefer to skip the form?</span>
                <h3 className="font-display text-xl font-semibold tracking-tight mt-3 mb-3 text-foreground">
                  Reach us direct.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  WhatsApp for urgent projects. Email for everything else. We respond within
                  24 hours on business days.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/919426507055?text=Hi%2C%20I%27d%20like%20to%20scope%20a%20project%20with%20Codenest%20Collective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-[hsl(var(--primary-hover))] transition-all duration-300 shadow-soft"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hello@codenestcollective.net"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-border bg-card text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-border space-y-2">
                  <a
                    href="tel:+919426507055"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    +91 94265 07055
                  </a>
                  <a
                    href="mailto:hello@codenestcollective.net"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    hello@codenestcollective.net
                  </a>
                </div>
              </div>

              <div className="card-premium overflow-hidden flex-1 min-h-[420px]">
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843338438!2d72.41493028487688!3d23.020473633863003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "420px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Codenest Collective Technologies — Ahmedabad, Gujarat, India"
                    className="w-full h-full absolute inset-0"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border text-[10px] uppercase tracking-[0.18em] font-semibold text-foreground">
                    <MapPin className="w-3 h-3 text-primary" />
                    Ahmedabad · India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Trust strip ─────────────── */}
      <section className="relative py-12 overflow-hidden bg-[hsl(var(--surface-inverse))] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BDA]/40 to-[#4874E8]/20" />
        <div className="absolute inset-0 bg-dots-subtle opacity-15" />

        <div className="relative section-container z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/80">
                Currently accepting projects · Q3 2026
              </span>
            </div>
            <a
              href="https://wa.me/919426507055?text=Hi%2C%20I%27d%20like%20to%20scope%20a%20project%20with%20Codenest%20Collective"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-sm text-white"
            >
              For urgent projects, WhatsApp us directly
              <span className="arrow-track" />
              <ArrowUpRight className="w-3.5 h-3.5 -ml-1 -mt-2 opacity-0" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
