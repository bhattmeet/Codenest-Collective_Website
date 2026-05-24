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

  const stats = [
    { value: allProjects.length, suffix: "+", label: "Projects Delivered" },
    { value: companyStats.clientSatisfaction, suffix: "%", label: "Client Satisfaction" },
    { value: companyStats.yearsExperience, suffix: "+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Responsive, performant web applications built with modern frameworks and engineering best practices.",
      span: "lg:col-span-2 lg:row-span-2",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native iOS & Android plus Flutter cross-platform.",
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description:
        "Aesthetic restraint paired with intuitive, accessible interaction.",
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description:
        "Secure backends and APIs that power scalable digital products.",
    },
    {
      icon: Layers,
      title: "Cloud & DevOps",
      description:
        "CI/CD pipelines, observability, and resilient deployment.",
    },
  ];

  const whyUs = [
    { title: "On-time delivery", description: "We respect deadlines and ship quality on schedule." },
    { title: "Clean code", description: "Maintainable, scalable code following industry standards." },
    {
      title: "Transparent communication",
      description: "Regular updates and clear project visibility across every milestone.",
    },
    { title: "Post-launch support", description: "Ongoing maintenance, monitoring, and technical guidance." },
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

  const processSteps = [
    { icon: Lightbulb, title: "Discovery", description: "Understanding goals, constraints, and the people you serve." },
    { icon: Pencil, title: "Design", description: "Intuitive, brand-aligned interfaces and product flows." },
    { icon: Wrench, title: "Development", description: "Modern tooling, clean architecture, engineering rigour." },
    { icon: Rocket, title: "Launch & Care", description: "Deploy, monitor, and partner for ongoing success." },
  ];

  const marqueeWords = [
    "Web Apps", "iOS & Android", "UI / UX", "API Design",
    "Cloud Architecture", "Performance", "Accessibility", "Design Systems",
    "Product Strategy", "Code Reviews", "Tech Audits", "Scaling",
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
                Accepting Q3 2026 engagements
              </span>
            </div>

            {/* Word-reveal headline with brush stroke */}
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.02]">
              <span style={{ animationDelay: "0.05s" }}>Software,</span>{" "}
              <span style={{ animationDelay: "0.18s" }}>designed</span>{" "}
              <br />
              <span style={{ animationDelay: "0.32s" }} className="font-serif-accent text-white/85">
                with{" "}
              </span>
              <span style={{ animationDelay: "0.46s" }}>
                <span className="brush-underline gradient-text-on-dark">precision.</span>
              </span>
            </h1>

            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg mb-10 fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              We design, engineer, and scale custom web and mobile applications for startups and
              modern enterprises — pairing senior craftsmanship with measurable outcomes.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 mb-14 fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link to="/contact">
                <button className="shine-sweep inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.4)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="relative z-[2]">Book a Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4 relative z-[2]" />
                </button>
              </Link>
              <Link to="/projects">
                <button className="btn-ghost-light text-sm">
                  Explore Our Work
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
              <span className="eyebrow mb-4">What we do</span>
              <h2 className="font-display mt-3 mb-4 leading-[1.1]">
                Strategy, design, and engineering as{" "}
                <span className="brush-underline gradient-text">one practice</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              <p className="lede">
                Our cross-functional team delivers digital products end-to-end — from early
                research and product design through to production engineering and post-launch
                support.
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
              <span className="eyebrow mb-4">Selected work</span>
              <h2 className="font-display mt-3">
                Recent projects,{" "}
                <span className="font-serif-accent text-primary brush-underline">crafted</span>{" "}
                with rigour.
              </h2>
            </div>
            <Link to="/projects" className="arrow-link self-start md:self-auto text-sm text-primary">
              View all projects
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
            <span className="eyebrow justify-center mb-4">How we work</span>
            <h2 className="font-display mt-3 mb-4">
              A proven process that{" "}
              <span className="brush-underline gradient-text">delivers</span>.
            </h2>
            <p className="lede mx-auto">
              Four collaborative phases — built around your timeline, your stakeholders, and your
              business outcomes.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
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

      {/* ─────────────── Why Us ─────────────── */}
      <section className="section-pad bg-blue-soft">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="eyebrow mb-4">Why partner with us</span>
              <h2 className="font-display mt-3 mb-5">
                A reliable, senior-level{" "}
                <span className="brush-underline text-primary">engineering partner</span>.
              </h2>
              <p className="lede mb-8">
                We pair start-up agility with enterprise discipline — so you ship faster, with code
                that lasts.
              </p>
              <Link to="/about" className="arrow-link text-sm text-primary">
                Learn more about our approach
                <span className="arrow-track" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft-lg">
                {whyUs.map((item, idx) => (
                  <div
                    key={item.title}
                    className="relative bg-card p-6 hover:bg-[hsl(var(--background-tinted))] transition-colors group"
                  >
                    <span className="corner-plus text-foreground/20 top-3 right-3" />
                    <span className="font-display text-xs font-semibold text-primary/50 tabular-nums tracking-wider mb-3 block">
                      0{idx + 1}
                    </span>
                    <CheckCircle className="w-5 h-5 text-primary mb-4 group-hover:scale-110 group-hover:rotate-[-8deg] transition-transform duration-500" />
                    <h3 className="font-display text-base font-semibold tracking-tight mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Testimonials — Marquee carousel ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="section-container mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center mb-4">Client voices</span>
            <h2 className="font-display mt-3 mb-4">
              Trusted by founders and{" "}
              <span className="brush-underline gradient-text">product teams</span>.
            </h2>
            <p className="lede mx-auto">
              From early-stage founders to enterprise product leads — here's what partnering with
              us feels like.
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
            <span className="eyebrow eyebrow-on-dark justify-center mb-6">Get started</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              Have an ambitious project?
              <br />
              <span className="font-serif-accent text-white/90">Let's </span>
              <span className="brush-underline gradient-text-on-dark">build it together.</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute consultation. We'll walk through your goals, timeline, and how
              our team can help you ship it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="relative z-[2]">Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4 relative z-[2]" />
                </button>
              </Link>
              <a href="mailto:codenestcollective@gmail.com">
                <button className="btn-ghost-light text-sm">
                  <MessageSquare className="w-4 h-4" />
                  Email Us
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
