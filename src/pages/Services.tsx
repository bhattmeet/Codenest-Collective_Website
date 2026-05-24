import {
  Smartphone,
  Globe,
  Palette,
  Server,
  Wrench,
  ArrowUpRight,
  CheckCircle,
  Lightbulb,
  Pencil,
  Code2,
  TestTube,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  useScrollReveal();

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      tag: "Frontend · Fullstack",
      description:
        "Powerful, responsive web applications that scale with your business — from landing pages to complex enterprise platforms.",
      benefits: [
        "Responsive design across every device and breakpoint",
        "SEO-optimised architecture and semantic markup",
        "Lightning-fast load times and Core Web Vitals",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      tag: "iOS · Android · Flutter",
      description:
        "Native and cross-platform mobile applications with exceptional user experiences — across Swift, Kotlin, and Flutter.",
      benefits: [
        "Native iOS (Swift) and Android (Kotlin) engineering",
        "Cross-platform Flutter for faster shipping",
        "App Store and Play Store optimisation",
      ],
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      tag: "Research · Design Systems",
      description:
        "User-centred design that pairs beautiful aesthetics with intuitive functionality — interfaces that delight and convert.",
      benefits: [
        "User research and persona development",
        "Interactive prototypes and reusable design systems",
        "Usability testing and iterative improvements",
      ],
    },
    {
      icon: Server,
      title: "Backend & APIs",
      tag: "Node · MongoDB · Firebase",
      description:
        "Robust, scalable backend systems and RESTful APIs — secure, reliable infrastructure that powers your applications.",
      benefits: [
        "RESTful and GraphQL APIs with full documentation",
        "Secure authentication and authorisation",
        "Database design and optimisation",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      tag: "Ongoing partnership",
      description:
        "Ongoing maintenance, updates, and technical support that keep your applications running smoothly long after launch.",
      benefits: [
        "Regular updates and security patches",
        "Performance monitoring and optimisation",
        "24/7 technical support and bug fixes",
      ],
    },
  ];

  const processSteps = [
    { icon: Lightbulb, title: "Discovery", blurb: "Understanding your goals and requirements" },
    { icon: Pencil, title: "Design", blurb: "Crafting beautiful, intuitive interfaces" },
    { icon: Code2, title: "Develop", blurb: "Engineering with modern tech and rigour" },
    { icon: TestTube, title: "Test", blurb: "Ensuring quality across every platform" },
    { icon: Rocket, title: "Launch", blurb: "Deploying and supporting your success" },
  ];

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on complexity and scope. A simple mobile app typically takes 2–3 months, while a complex web application with backend can take 4–6 months. We provide detailed timelines during the discovery phase after understanding your requirements.",
    },
    {
      q: "What technologies do you specialise in?",
      a: "We specialise in modern tech stacks including React, Next.js, Node.js, Flutter, Kotlin (Android), Swift (iOS), MongoDB, Firebase, and more. We choose the best technology based on your project requirements and long-term goals.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. We provide different support packages to fit your needs and budget.",
    },
    {
      q: "How do you ensure code quality?",
      a: "We follow industry best practices including code reviews, automated testing, continuous integration, and adherence to coding standards. Every project goes through rigorous quality assurance before deployment.",
    },
    {
      q: "Can you work with my existing codebase?",
      a: "Absolutely. We have experience working with existing codebases. We can review, refactor, add features, or help migrate to newer technologies while maintaining stability and minimising downtime.",
    },
    {
      q: "What is your pricing model?",
      a: "We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. The best model depends on your project type and requirements. Contact us for a detailed quote tailored to your specific needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="Our Services — End-to-End Software Solutions"
        description="Comprehensive software development services: Web Development, Mobile Apps (iOS/Android/Flutter), UI/UX Design, Backend & APIs, and Maintenance & Support."
        path="/services"
        keywords="web development, mobile app development, flutter, kotlin, iOS, android, UI/UX design, backend APIs, Node.js, Express, MongoDB, Firebase"
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
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">Services</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>End-to-end</span>{" "}
              <span style={{ animationDelay: "0.2s" }} className="font-serif-accent text-white/85">
                software,
              </span>{" "}
              <br />
              <span style={{ animationDelay: "0.34s" }}>delivered as</span>{" "}
              <span style={{ animationDelay: "0.48s" }}>
                <span className="brush-underline gradient-text-on-dark">one practice.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              From concept to deployment and beyond — we provide comprehensive development services
              that transform ideas into powerful digital products.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── Services list ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">Capabilities</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                Five practices,{" "}
                <span className="brush-underline gradient-text">one team</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="lede">
                A single, senior team that owns your product end-to-end — no handoffs, no
                miscommunication, no lost context between disciplines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`card-premium gradient-border p-8 group fade-in-up stagger-${(idx % 4) + 1}`}
                >
                  <span className="corner-plus text-foreground/20 top-4 left-4" />
                  <span className="corner-plus text-foreground/20 top-4 right-4" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[-8deg]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground/70">
                      0{idx + 1} · {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="arrow-link text-xs uppercase tracking-[0.18em] text-primary">
                    Get a quote
                    <span className="arrow-track" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Process — 5 steps with animated SVG ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-radial opacity-25 pointer-events-none" />
        <div className="relative section-container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center mb-4">Process</span>
            <h2 className="font-display mt-3 mb-4">
              A proven 5-step methodology that{" "}
              <span className="brush-underline gradient-text">delivers</span>.
            </h2>
            <p className="lede mx-auto">
              Five collaborative phases — built around your timeline, your stakeholders, and your
              outcomes.
            </p>
          </div>

          <div className="relative">
            <svg
              className="hidden lg:block absolute top-[88px] left-0 right-0 w-full h-4 z-0"
              viewBox="0 0 1200 16"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 60 8 Q 240 -10, 360 8 T 600 8 T 840 8 T 1140 8"
                stroke="url(#servicesFlow)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-24"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </path>
              <defs>
                <linearGradient id="servicesFlow" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className={`relative card-premium p-6 group fade-in-up stagger-${idx + 1}`}
                  >
                    <span className="corner-plus text-foreground/20 top-3 left-3" />
                    <span className="corner-plus text-foreground/20 top-3 right-3" />

                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-3xl font-bold text-primary/15 tabular-nums">
                        0{idx + 1}
                      </span>
                      <span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[-6deg]">
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>
                    <h3 className="font-display text-base font-semibold tracking-tight mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.blurb}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center mb-4">FAQ</span>
            <h2 className="font-display mt-3 mb-4">
              Frequently asked{" "}
              <span className="brush-underline gradient-text">questions</span>.
            </h2>
            <p className="lede mx-auto">
              Common questions about our services, process, and partnership.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full divide-y divide-border rounded-2xl border border-border bg-card shadow-soft"
          >
            {faqs.map((f, idx) => (
              <AccordionItem
                key={f.q}
                value={`item-${idx}`}
                className="border-0 px-6 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <AccordionTrigger className="text-left hover:no-underline group py-5">
                  <span className="flex items-center gap-4 text-base font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    <span className="font-display text-xs font-semibold text-primary/50 tabular-nums tracking-wider">
                      0{idx + 1}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 pl-10">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[hsl(var(--surface-inverse))] text-white cursor-spotlight grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BDA]/60 to-[#4874E8]/40" />
        <div className="absolute inset-0 bg-dots-subtle opacity-20" />
        <span className="corner-plus text-white/30 top-6 left-6" />
        <span className="corner-plus text-white/30 top-6 right-6" />
        <span className="corner-plus text-white/30 bottom-6 left-6" />
        <span className="corner-plus text-white/30 bottom-6 right-6" />

        <div className="relative section-container z-10 max-w-4xl mx-auto text-center">
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Start a project</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Ready to build{" "}
            <span className="brush-underline gradient-text-on-dark">something amazing</span>?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's talk through your project and how we can help bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-[2]">Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 relative z-[2]" />
              </button>
            </Link>
            <Link to="/projects">
              <button className="btn-ghost-light text-sm">
                <MessageSquare className="w-4 h-4" />
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
