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
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  const { hash } = useLocation();

  // Smooth-scroll to the anchor section when arriving via a deep-link
  // (e.g. footer "Mobile Engineering" → /services#mobile-engineering).
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    // Wait a tick so the section card has mounted, then scroll.
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(t);
  }, [hash]);

  // 6 capabilities from Copy Doc Section 04 — "What We Build"
  // `anchor` is the slug used by Footer deep-links (e.g. /services#mobile-engineering)
  const services = [
    {
      anchor: "mobile-engineering",
      icon: Smartphone,
      title: "Mobile Engineering",
      tag: "Flutter & Native Android",
      description:
        "Cross-platform or native — we scope it based on your product's constraints, not our preference. Flutter for speed-to-market and shared codebases. Kotlin + Jetpack Compose when you need platform depth.",
      benefits: [
        "Flutter · Dart · BLoC · Riverpod · Isar",
        "Kotlin · Jetpack Compose · Hilt · Room · Retrofit",
        "Architecture review and refactors on existing apps",
      ],
      cta: "Scope A Mobile Project",
    },
    {
      anchor: "backend-api",
      icon: Server,
      title: "Backend & API Engineering",
      tag: "Node.js, REST, WebSockets",
      description:
        "Endpoints that don't fail at 2 AM. We build and document APIs your frontend team can actually work with — authentication, payments, real-time sync, and file handling included.",
      benefits: [
        "Node.js · Express.js · MongoDB · PostgreSQL",
        "WebSockets · Firebase · REST · JWT auth",
        "Full OpenAPI / Postman documentation",
      ],
      cta: "Scope A Backend Project",
    },
    {
      anchor: "design-systems",
      icon: Palette,
      title: "UI/UX Design Systems",
      tag: "Figma, component-driven",
      description:
        "Not just screens — a system. We build component libraries in Figma that engineers can implement without guessing. Monochrome-first, then colour. Every element has a purpose.",
      benefits: [
        "Figma · Design systems · Wireframing",
        "Interaction design · Prototyping",
        "Handoff specs that don't need translation",
      ],
      cta: "Start A Design Brief",
    },
    {
      anchor: "cloud-deployment",
      icon: Globe,
      title: "Cloud & Deployment",
      tag: "CI/CD, infrastructure",
      description:
        "We deploy what we build. Environment setup, CI/CD pipelines, staging and production separation, monitoring. The code lives somewhere reliable — not on someone's laptop.",
      benefits: [
        "Vercel · Railway · DigitalOcean",
        "GitHub Actions · Docker · Nginx · PM2",
        "Staging and prod environments wired right",
      ],
      cta: "Talk Infrastructure",
    },
    {
      anchor: "mvp-consulting",
      icon: Lightbulb,
      title: "MVP Consulting",
      tag: "Idea to architecture in one week",
      description:
        "You have an idea. We map what to build, what to skip, which stack fits, and what the first sprint looks like. Output: a scope document, architecture diagram, and effort estimate — before a single line of code is written.",
      benefits: [
        "Tech stack recommendation + rationale",
        "Architecture diagram + sprint breakdown",
        "Effort estimate with timeline + risk flags",
      ],
      cta: "Book A Discovery Session",
    },
    {
      anchor: "team-augmentation",
      icon: Wrench,
      title: "Team Augmentation",
      tag: "Senior engineers, embedded",
      description:
        "You have a product. You need senior engineers who can drop in without a three-month ramp-up. We embed our engineers in your workflow — your repo, your tools, your standups. No overhead. No context loss.",
      benefits: [
        "Fixed monthly engagement",
        "Dedicated resource, your stack",
        "3-month minimum commitment",
      ],
      cta: "Discuss Augmentation",
    },
  ];

  // 5-step build cycle from Copy Doc Section 05 — "How A Project Moves"
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      timeline: "Day 1–3",
      blurb: "We get on a call. We ask the hard questions. We don't take every project.",
    },
    {
      icon: Pencil,
      title: "Scope & Architecture",
      timeline: "Day 4–7",
      blurb: "SRS, architecture diagram, breakdown. Every line in the scope is estimable.",
    },
    {
      icon: Code2,
      title: "Sprint Execution",
      timeline: "Week 2+",
      blurb: "Two-week sprints. Every sprint closes with a working build in staging.",
    },
    {
      icon: TestTube,
      title: "QA & Handoff",
      timeline: "Final sprint",
      blurb: "Code review, test suite, benchmarks, deployment, real documentation.",
    },
    {
      icon: Rocket,
      title: "Post-Launch Support",
      timeline: "Optional",
      blurb: "3-month maintenance retainer on request. 24h critical SLA, 5 business days minor.",
    },
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
        title="What We Build — Six Capability Areas"
        description="Mobile Engineering (Flutter, Android), Backend & API (Node.js), UI/UX Design Systems, Cloud & Deployment, MVP Consulting, and Team Augmentation. Six capability areas. Every project lands in one or more."
        path="/services"
        keywords="Flutter development, Android Kotlin, Node.js backend, Figma design systems, MVP consulting, team augmentation, Codenest Collective"
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
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">What We Build</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>Six capability areas.</span>{" "}
              <br />
              <span style={{ animationDelay: "0.2s" }} className="font-serif-accent text-white/85">
                Every project
              </span>{" "}
              <span style={{ animationDelay: "0.34s" }}>lands in</span>{" "}
              <span style={{ animationDelay: "0.48s" }}>
                <span className="brush-underline gradient-text-on-dark">one or more.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              We tell you honestly which applies — and which doesn't. No upsell, no over-scoping.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── Services list ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">The Stack</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                Six capabilities.{" "}
                <span className="brush-underline gradient-text">One collective.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="lede">
                Every project lands in one or more of these. Each lead engineer owns their
                discipline — no handoffs, no lost context.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  id={service.anchor}
                  className={`card-premium gradient-border p-8 group fade-in-up stagger-${(idx % 4) + 1} scroll-mt-28`}
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
                    {service.cta || "Scope A Project"}
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
            <span className="eyebrow justify-center mb-4">The Build Cycle</span>
            <h2 className="font-display mt-3 mb-4">
              How a project{" "}
              <span className="brush-underline gradient-text">moves.</span>
            </h2>
            <p className="lede mx-auto">
              Five phases. Each one is how we ensure what we build is exactly what you needed.
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
                    <span className="inline-block text-[10px] uppercase tracking-[0.18em] font-semibold text-primary/70 mb-2">
                      {step.timeline}
                    </span>
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
            <span className="eyebrow justify-center mb-4">Before You Reach Out</span>
            <h2 className="font-display mt-3 mb-4">
              Common{" "}
              <span className="brush-underline gradient-text">questions.</span>
            </h2>
            <p className="lede mx-auto">
              About our services, process, and partnership — answered straight.
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
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Bring Us In</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Ready to{" "}
            <span className="brush-underline gradient-text-on-dark">scope a project?</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We scope projects in 48 hours. Book a free 30-minute technical call — no pitch, no
            commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-[2]">Book The Call</span>
                <ArrowUpRight className="w-4 h-4 relative z-[2]" />
              </button>
            </Link>
            <Link to="/projects">
              <button className="btn-ghost-light text-sm">
                <MessageSquare className="w-4 h-4" />
                See The Work
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
