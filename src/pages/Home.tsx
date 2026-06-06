import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Smartphone,
  Palette,
  Server,
  CheckCircle,
  MessageSquare,
  Star,
  Quote,
  Lightbulb,
  Pencil,
  Wrench,
  Rocket,
  BookOpen,
  Clock,
  Calendar,
  Sparkles,
  Zap,
  Layers,
  Globe,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import TechStack from "@/components/TechStack";
import { useEffect, useRef, useState } from "react";
import { allProjects } from "./Projects";
import { companyStats } from "@/data/companyData";
import { featuredResources } from "@/data/resourcesData";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ──────────────── Tilt card hook ──────────────── */
const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 10;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
  };
  return { ref, onMove, onLeave };
};

const TiltCard = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { ref, onMove, onLeave } = useTilt();
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero cursor spotlight
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Pull the same project records used on the Projects page so images,
  // descriptions and tech stacks stay in sync with the single source of truth.
  const featuredTitles = [
    "Space Xploration",
    "TouchBridge NFC",
    "DishDiscover (Frontend)",
  ];
  const featuredProjects = featuredTitles
    .map((title) => allProjects.find((p) => p.title === title))
    .filter((p): p is (typeof allProjects)[number] => Boolean(p));

  // "By The Numbers" stats from copy doc Section 08
  const stats = [
    { value: 20, suffix: "+", label: "Applications Shipped" },
    { value: 5, suffix: "+", label: "Industry Domains" },
    { value: 100, suffix: "%", label: "Remote Operations" },
    { value: 4, suffix: "", label: "Core Tech Stacks" },
  ];

  // "What We Build" — 6 capabilities from copy doc Section 04
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Engineering",
      tag: "Flutter & Native Android",
      description:
        "Cross-platform or native — we scope it based on your product's constraints, not our preference.",
      span: "lg:col-span-2 lg:row-span-2",
      featured: true,
    },
    {
      icon: Server,
      title: "Backend & API",
      tag: "Node.js, REST, WebSockets",
      description: "Endpoints that don't fail at 2 AM. Documented APIs your frontend can use.",
    },
    {
      icon: Palette,
      title: "UI/UX Design Systems",
      tag: "Figma, component-driven",
      description: "Not just screens — a system. Component libraries engineers can implement.",
    },
    {
      icon: Layers,
      title: "Cloud & Deployment",
      tag: "CI/CD, infrastructure",
      description: "We deploy what we build. Environments, monitoring, staging — wired right.",
    },
    {
      icon: Lightbulb,
      title: "MVP Consulting",
      tag: "Idea → architecture in one week",
      description: "Scope, stack, sprint plan, and effort estimate — before a line of code.",
    },
    {
      icon: Code,
      title: "Team Augmentation",
      tag: "Senior engineers, embedded",
      description: "Senior engineers who drop in without a three-month ramp-up.",
    },
  ];

  // Trust signals row from copy doc Section 08
  const trustBadges = [
    "NDA-Ready On Day One",
    "Milestone-Based Billing",
    "Source Code Ownership",
    "Weekly Progress Reports",
    "SRS Documentation",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content:
        "Codenest Collective transformed our vision into a stunning, functional app. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, FinanceFlow",
      content:
        "Working with Codenest was a game-changer. They delivered on time, communicated clearly, and the code quality was exceptional.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthHub",
      content:
        "From concept to launch, the team guided us every step of the way. Transparent, efficient, and results-driven — couldn't ask for better partners.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "CTO, BlueCanvas",
      content:
        "Senior-level craftsmanship from day one. They asked the right questions and shipped something we're genuinely proud of.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Director, NovaWorks",
      content:
        "A rare blend of design taste and technical depth. The redesign reset our brand and lifted our conversion materially.",
      rating: 5,
    },
  ];

  // "How A Project Moves" — 5 steps from copy doc Section 05
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      timeline: "Day 1–3",
      description:
        "We get on a call. We ask the hard questions: what breaks if we get this wrong? We don't take every project.",
    },
    {
      icon: Pencil,
      title: "Scope & Architecture",
      timeline: "Day 4–7",
      description:
        "We write the SRS. We diagram the architecture. Every line in the scope is estimable.",
    },
    {
      icon: Wrench,
      title: "Sprint Execution",
      timeline: "Week 2 onwards",
      description:
        "Two-week sprints. Every sprint closes with a working build in your staging environment.",
    },
    {
      icon: CheckCircle,
      title: "QA & Handoff",
      timeline: "Final sprint",
      description:
        "Code review, test suite, performance benchmarks, deployment. Documentation a real developer can read.",
    },
    {
      icon: Rocket,
      title: "Post-Launch Support",
      timeline: "Optional",
      description:
        "3-month maintenance retainer on request. Critical fixes within 24 hours, minor within 5 business days.",
    },
  ];

  // Trust bar from copy doc Section 03 — "Stack We Operate In"
  const marqueeWords = [
    "Flutter",
    "Kotlin",
    "Node.js",
    "Figma",
    "Firebase",
    "PostgreSQL",
    "AWS",
    "Jetpack Compose",
    "BLoC",
    "Riverpod",
    "Express",
    "MongoDB",
    "Docker",
    "GitHub Actions",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="Codenest Collective Technologies — Build The Future"
        description="Codenest Collective Technologies creates innovative software solutions that transform businesses. Expert team delivering custom development, web applications, mobile apps, and enterprise software with agile methodology."
        path="/"
        keywords="software development, custom software, web development, mobile app development, enterprise software, Codenest Collective Technologies"
      />
      <ScrollProgress />
      <Navigation />

      {/* ─────────────── HERO — Cursor spotlight + word reveal + brush ─────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] cursor-spotlight grain-overlay"
      >
        {/* Grid overlay with radial fade */}
        <div className="absolute inset-0 opacity-[0.08] z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
            }}
          />
        </div>

        {/* Animated orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-[#5088FA]/40 blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-[#42A5F5]/35 blur-[120px] animate-blob animation-delay-3000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#1d4ed8]/25 blur-[140px] animate-blob animation-delay-2000" />
        </div>

        {/* Floating geometric SVG decor */}
        <svg className="absolute top-[18%] right-[8%] w-24 h-24 text-white/15 float-decor z-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-[22%] left-[6%] w-20 h-20 text-white/15 float-decor animation-delay-2000 z-0"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect x="6" y="6" width="88" height="88" stroke="currentColor" strokeWidth="1" transform="rotate(8 50 50)" />
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Corner crosshairs */}
        <span className="corner-plus text-white/40 top-6 left-6" />
        <span className="corner-plus text-white/40 top-6 right-6" />
        <span className="corner-plus text-white/40 bottom-6 left-6" />
        <span className="corner-plus text-white/40 bottom-6 right-6" />

        <div className="relative z-10 section-container py-32 lg:py-40">
          <div className="max-w-5xl">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md animate-fade-in">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/85">
                Remote-First · Based In India · Shipping Globally
              </span>
            </div>

            {/* Word-reveal headline with brush stroke */}
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.02]">
              <span style={{ animationDelay: "0.05s" }}>Production-Grade</span>{" "}
              <span style={{ animationDelay: "0.18s" }}>Mobile &amp; Web Products.</span>{" "}
              <br />
              <span style={{ animationDelay: "0.32s" }} className="font-serif-accent text-white/85">
                Engineered{" "}
              </span>
              <span style={{ animationDelay: "0.46s" }}>
                For <span className="brush-underline gradient-text-on-dark">Scale.</span>
              </span>
            </h1>

            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg mb-3 fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              Codenest Collective is a remote-first engineering collective. We build Flutter apps,
              native Android systems, and Node.js backends — from architecture to deployment.
            </p>
            <p
              className="text-xs sm:text-sm text-white/55 mb-10 fade-in-up"
              style={{ animationDelay: "0.72s" }}
            >
              Based in India. Shipping globally.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 mb-14 fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link to="/contact">
                <button className="shine-sweep inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.4)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="relative z-[2]">Book A Free Technical Call</span>
                  <ArrowUpRight className="w-4 h-4 relative z-[2]" />
                </button>
              </Link>
              <Link to="/projects">
                <button className="btn-ghost-light text-sm">
                  See The Work
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Stat strip — hairline */}
            <div
              className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm max-w-2xl fade-in-up"
              style={{ animationDelay: "0.95s" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 sm:px-6 py-5 bg-white/[0.04]">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-white/55 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500"
          style={{ opacity: scrollY > 80 ? 0 : 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/55">
              Scroll
            </span>
            <span className="block h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─────────────── Marquee strip ─────────────── */}
      <section className="py-8 bg-[hsl(var(--surface-inverse))] text-white border-y border-white/5 overflow-hidden">
        <div className="marquee-mask">
          <div className="marquee-track animate-marquee">
            {[...marqueeWords, ...marqueeWords].map((word, idx) => (
              <div key={idx} className="flex items-center gap-6 px-6">
                <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  {word}
                </span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Services — Bento grid ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">What We Build</span>
              <h2 className="font-display mt-3 mb-4 leading-[1.1]">
                Six capability areas.{" "}
                <span className="brush-underline gradient-text">One collective.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              <p className="lede">
                Every project lands in one or more. We tell you honestly which applies — and which
                doesn't.
              </p>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 auto-rows-fr">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group relative card-premium gradient-border overflow-hidden p-7 hover-lift cursor-pointer ${
                    service.span ?? ""
                  } ${service.featured ? "bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-darker))] text-white !border-white/10" : ""}`}
                >
                  <span className="corner-plus text-foreground/30 top-3 left-3" />
                  <span className={`corner-plus top-3 right-3 ${service.featured ? "text-white/30" : "text-foreground/30"}`} />

                  <div className="relative h-full flex flex-col z-[2]">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`inline-flex items-center justify-center h-12 w-12 rounded-lg transition-all duration-500 ${
                          service.featured
                            ? "bg-white/15 text-white group-hover:bg-white/25 group-hover:rotate-[-8deg]"
                            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-[-8deg]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-xs font-semibold tabular-nums tracking-wider ${
                          service.featured ? "text-white/50" : "text-muted-foreground/50"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <h3
                      className={`font-display text-lg sm:text-xl font-semibold tracking-tight mb-2 ${
                        service.featured ? "text-white" : "text-foreground"
                      } ${service.featured ? "sm:text-2xl" : ""}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-6 flex-1 ${
                        service.featured ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </p>

                    <Link
                      to="/services"
                      className={`arrow-link text-xs uppercase tracking-[0.18em] ${
                        service.featured ? "text-white" : "text-primary"
                      }`}
                    >
                      Learn more
                      <span className="arrow-track" />
                    </Link>

                    {service.featured && (
                      <>
                        <Globe className="absolute -bottom-8 -right-8 w-40 h-40 text-white/8 stroke-[0.5]" />
                        <Zap className="absolute top-1/3 right-6 w-5 h-5 text-white/40 float-decor" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Featured Projects — 3D tilt cards ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-subtle opacity-50 pointer-events-none" />
        <div className="relative section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow mb-4">The Work</span>
              <h2 className="font-display mt-3">
                Selected{" "}
                <span className="font-serif-accent text-primary brush-underline">builds.</span>{" "}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-md">
                Each case study documents the problem, the architecture decisions, and the outcome.
              </p>
            </div>
            <Link to="/projects" className="arrow-link self-start md:self-auto text-sm text-primary">
              See The Work
              <span className="arrow-track" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
            {featuredProjects.map((project, idx) => (
              <TiltCard
                key={project.title}
                onClick={() => navigate("/case-study", { state: { project } })}
                className={`card-premium cursor-spotlight cursor-pointer group flex flex-col fade-in-up stagger-${idx + 1}`}
              >
                <div className="relative overflow-hidden h-52 bg-gradient-to-br from-primary/10 to-accent/5 rounded-t-[var(--radius)] shine-sweep">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-border text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground">
                      {project.category}
                    </span>
                  </div>
                  {project.industry && (
                    <span className="absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded-full bg-foreground/85 backdrop-blur-md text-[10px] uppercase tracking-[0.15em] font-semibold text-background">
                      {project.industry}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1 tilt-card-inner">
                  <h3 className="font-display text-lg font-semibold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="arrow-link text-xs uppercase tracking-[0.18em] text-primary">
                    Read Case Study
                    <span className="arrow-track" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* ─────────────── Process — animated SVG path ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-radial opacity-30 pointer-events-none" />
        <div className="relative section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center mb-4">How A Project Moves</span>
            <h2 className="font-display mt-3 mb-4">
              We don't start with a quote.{" "}
              <span className="brush-underline gradient-text">We start with questions.</span>
            </h2>
            <p className="lede mx-auto">
              Five phases. Each one is how we make sure what we build is exactly what you needed.
            </p>
          </div>

          {/* Desktop: animated SVG flow line */}
          <div className="relative">
            <svg
              className="hidden lg:block absolute top-[88px] left-0 right-0 w-full h-4 z-0"
              viewBox="0 0 1200 16"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 60 8 Q 300 -10, 460 8 T 740 8 T 1140 8"
                stroke="url(#flowGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.4s" repeatCount="indefinite" />
              </path>
              <defs>
                <linearGradient id="flowGrad" x1="0" x2="1" y1="0" y2="0">
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
                    className={`relative card-premium p-6 fade-in-up stagger-${idx + 1} group`}
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
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── By The Numbers + Trust Badges ─────────────── */}
      <section className="section-pad bg-blue-soft">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow justify-center mb-4">By The Numbers</span>
            <h2 className="font-display mt-3 mb-4">
              Earned over{" "}
              <span className="brush-underline gradient-text">six years.</span>
            </h2>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft-lg mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card p-6 sm:p-7 group hover:bg-[hsl(var(--background-tinted))] transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-semibold text-foreground"
              >
                <CheckCircle className="w-3 h-3 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Testimonials — Marquee carousel ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="section-container mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center mb-4">In Their Words</span>
            <h2 className="font-display mt-3 mb-4">
              From founders and{" "}
              <span className="brush-underline gradient-text">product teams.</span>
            </h2>
            <p className="lede mx-auto">
              Early-stage founders. Enterprise product leads. What partnering with the collective
              feels like, in their words.
            </p>
          </div>
        </div>

        <div className="marquee-mask">
          <div
            className="marquee-track gap-5 pb-2"
            style={{ animation: "marquee 60s linear infinite" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <figure
                key={idx}
                className="card-premium p-6 w-[360px] sm:w-[420px] flex flex-col"
              >
                <Quote className="w-6 h-6 text-primary/25 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-display text-[14px] leading-relaxed text-foreground/85 mb-6 flex-1">
                  "{testimonial.content}"
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Resources ─────────────── */}
      <section className="section-pad bg-blue-soft">
        <div className="section-container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow mb-4">Insights</span>
              <h2 className="font-display mt-3 mb-3">
                Latest from{" "}
                <span className="font-serif-accent text-primary">our team</span>.
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Engineering essays, product playbooks, and tactical guides — written by the team
                shipping the work.
              </p>
            </div>
            <Link to="/resources" className="arrow-link self-start md:self-auto text-sm text-primary">
              All resources
              <span className="arrow-track" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, idx) => (
              <article
                key={resource.id}
                className={`card-premium gradient-border p-6 cursor-pointer group flex flex-col fade-in-up stagger-${idx + 1}`}
                onClick={() => navigate("/resource-detail", { state: resource })}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10 text-primary group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <Badge
                    variant="secondary"
                    className="capitalize text-[10px] uppercase tracking-[0.15em] font-semibold bg-muted text-muted-foreground border-0"
                  >
                    {resource.type.replace("-", " ")}
                  </Badge>
                </div>

                <h3 className="font-display text-base font-semibold tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed flex-1">
                  {resource.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {new Date(resource.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {resource.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Final CTA — premium navy band with creative flair ─────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[hsl(var(--surface-inverse))] text-white cursor-spotlight grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BDA]/60 to-[#4874E8]/40" />
        <div className="absolute inset-0 bg-dots-subtle opacity-20" />

        {/* Floating decor */}
        <svg className="absolute top-10 right-10 w-32 h-32 text-white/10 float-decor" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 95,80 5,80" stroke="currentColor" strokeWidth="1" />
          <polygon points="50,25 75,70 25,70" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-10 left-10 w-28 h-28 text-white/10 float-decor animation-delay-2000"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
          <path d="M 10 50 L 90 50 M 50 10 L 50 90" stroke="currentColor" strokeWidth="1" />
        </svg>

        <span className="corner-plus text-white/30 top-6 left-6" />
        <span className="corner-plus text-white/30 top-6 right-6" />
        <span className="corner-plus text-white/30 bottom-6 left-6" />
        <span className="corner-plus text-white/30 bottom-6 right-6" />

        <div className="relative section-container z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow eyebrow-on-dark justify-center mb-6">Ready When You Are</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              Got an idea, a broken app,
              <br />
              <span className="font-serif-accent text-white/90">or a deadline </span>
              <span className="brush-underline gradient-text-on-dark">you can't miss?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              We scope projects in 48 hours. Book a free 30-minute technical call — no pitch, no
              commitment. We'll tell you what we'd build, how long it'd take, and what it'd cost.
              If we're not the right fit, we'll say so.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="relative z-[2]">Book The Call</span>
                  <ArrowUpRight className="w-4 h-4 relative z-[2]" />
                </button>
              </Link>
              <a
                href="https://wa.me/919426507055?text=Hi%2C%20I%27d%20like%20to%20scope%20a%20project%20with%20Codenest%20Collective"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-ghost-light text-sm">
                  <MessageSquare className="w-4 h-4" />
                  Message Us On WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
