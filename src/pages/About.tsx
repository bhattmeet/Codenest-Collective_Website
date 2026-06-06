import {
  Code,
  Users,
  RefreshCw,
  Shield,
  CheckCircle,
  ArrowUpRight,
  Rocket,
  Trophy,
  TrendingUp,
  Target,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { companyStats } from "@/data/companyData";
import { allProjects } from "@/pages/Projects";

const About = () => {
  useScrollReveal();

  const values = [
    {
      icon: Code,
      title: "Quality Code",
      description:
        "Clean, maintainable code following industry best practices. Every line is crafted with precision and intent.",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description:
        "Your success is our priority. We listen, collaborate, and adapt to deliver exactly what you need.",
    },
    {
      icon: RefreshCw,
      title: "Agile Process",
      description:
        "Flexibility and rapid iteration through agile methodologies — you stay involved at every stage.",
    },
    {
      icon: Shield,
      title: "Security Focus",
      description:
        "Security built into every layer of our solutions, protecting your data and applications by design.",
    },
  ];

  const journey = [
    { year: "2023", title: "Company Founded", icon: Rocket, blurb: "Codenest Collective Technologies was born with a vision to empower startups." },
    { year: "2024", title: "First Major Clients", icon: Trophy, blurb: `Delivered ${allProjects.length}+ successful projects and built lasting client relationships worldwide.` },
    { year: "2025", title: "Rapid Growth", icon: TrendingUp, blurb: "Expanded service offerings and became a trusted development partner across industries." },
    { year: "2026", title: "Vision Ahead", icon: Target, blurb: "Continuing to innovate and help businesses transform with cutting-edge technology." },
  ];

  const founderHighlights = [
    { label: `${allProjects.length}+ Projects`, sub: "Successfully delivered" },
    { label: "Full-Stack Expert", sub: "Mobile, Web, Backend" },
    { label: `${companyStats.clientsWorldwide}+ Clients`, sub: "Global partnerships" },
    { label: `${companyStats.yearsExperience}+ Years`, sub: "Industry experience" },
  ];

  const stats = [
    { value: `${companyStats.yearsExperience}+`, label: "Years experience" },
    { value: `${allProjects.length}+`, label: "Projects delivered" },
    { value: `${companyStats.clientsWorldwide}+`, label: "Clients worldwide" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="How We Run It — The Build Cycle"
        description="How a project moves at Codenest Collective. Five phases — Discovery, Scope & Architecture, Sprint Execution, QA & Handoff, Post-Launch Support — built around your timeline."
        path="/about"
        keywords="agile software process, sprint execution, SRS documentation, software development workflow, Codenest Collective process"
      />
      <ScrollProgress />
      <Navigation />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] grain-overlay">
        {/* Grid */}
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

        <svg
          className="absolute top-[18%] right-[10%] w-24 h-24 text-white/15 float-decor z-0"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">About the studio</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>Built</span>{" "}
              <span style={{ animationDelay: "0.18s" }}>for</span>{" "}
              <span style={{ animationDelay: "0.32s" }} className="font-serif-accent text-white/85">
                teams that
              </span>{" "}
              <span style={{ animationDelay: "0.46s" }}>
                <span className="brush-underline gradient-text-on-dark">ship.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg mb-10 fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              We're a small, senior team building scalable software for startups and growing
              businesses. Six years of practice, dozens of products shipped, and a stubborn focus
              on quality at every layer.
            </p>

            <div
              className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm max-w-2xl fade-in-up"
              style={{ animationDelay: "0.85s" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 sm:px-6 py-5 bg-white/[0.04]">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-white/55 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Mission — editorial split ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow mb-4">Our mission</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                Engineering with{" "}
                <span className="brush-underline gradient-text">purpose</span>.
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pt-6">
              <p className="text-xl md:text-2xl font-display font-medium text-foreground leading-snug mb-8">
                We empower startups and growing businesses with scalable, high-quality software
                solutions — spanning web, mobile, backend, and design.
              </p>
              <p className="lede !max-w-3xl">
                We serve{" "}
                <span className="text-primary font-semibold">domestic and international clients</span>{" "}
                who need reliable, senior-level development partners they can trust. Our work
                combines technical depth with business pragmatism — delivering software that
                actually moves the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Founder ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-subtle opacity-40 pointer-events-none" />
        <div className="relative section-container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center mb-4">Leadership</span>
            <h2 className="font-display mt-3 mb-4">
              Meet our <span className="font-serif-accent text-primary">founder</span>.
            </h2>
            <p className="lede mx-auto">
              Leadership driven by deep expertise and a love for the craft of technology.
            </p>
          </div>

          <div className="card-premium gradient-border overflow-hidden">
            <span className="corner-plus text-foreground/25 top-4 left-4" />
            <span className="corner-plus text-foreground/25 top-4 right-4" />
            <span className="corner-plus text-foreground/25 bottom-4 left-4" />
            <span className="corner-plus text-foreground/25 bottom-4 right-4" />

            <div className="grid md:grid-cols-[320px,1fr]">
              {/* Photo block */}
              <div className="relative bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] p-10 flex items-center justify-center overflow-hidden grain-overlay">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-white/15 blur-2xl" />
                  <div className="relative w-44 h-44 rounded-full bg-white/[0.08] border border-white/25 overflow-hidden backdrop-blur-sm shine-sweep">
                    <img
                      src="https://api.dicebear.com/9.x/avataaars/svg?seed=YoungFounder3&backgroundColor=eef4ff&radius=50&top=shortFlat,shortRound,shortWaved&facialHairProbability=70&facialHair=beardLight&clothing=shirtCrewNeck,hoodie,graphicShirt&clothesColor=2E5BDA,4874E8&accessoriesProbability=0&skinColor=edb98a,ffdbb4&hairColor=2c1b18,4a312c,724133&facialHairColor=2c1b18,4a312c,724133&eyes=default,happy&mouth=smile,twinkle"
                      alt="Founder portrait"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback: hide broken image, show inline SVG silhouette below
                        const img = e.currentTarget;
                        img.style.display = "none";
                        const fallback = img.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "block";
                      }}
                    />
                    {/* Inline SVG fallback — stylized male persona silhouette */}
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-full h-full"
                      style={{ display: "none" }}
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="founderAvatarGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.72)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 28 200 C 28 142 58 124 100 124 C 142 124 172 142 172 200 Z"
                        fill="url(#founderAvatarGrad)"
                      />
                      <rect
                        x="84"
                        y="100"
                        width="32"
                        height="34"
                        rx="2"
                        fill="url(#founderAvatarGrad)"
                      />
                      <circle cx="100" cy="78" r="42" fill="url(#founderAvatarGrad)" />
                      <path
                        d="M 58 76 C 58 42 78 32 100 32 C 122 32 142 42 142 76 C 134 60 118 54 100 54 C 82 54 66 60 58 76 Z"
                        fill="rgba(255,255,255,0.78)"
                      />
                    </svg>
                  </div>
                </div>
                <Sparkles className="absolute top-6 right-6 w-5 h-5 text-white/40 float-decor" />
              </div>

              {/* Bio */}
              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold tracking-tight mb-1 text-foreground">
                  Our Founder
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-primary mb-6">
                  Founder & CEO
                </p>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                  <p>
                    With over {companyStats.yearsExperience}+ years of hands-on full-stack
                    development, our founder brings deep expertise in Flutter, Android (Kotlin),
                    Node.js, Express.js, MongoDB, and Firebase.
                  </p>
                  <p>
                    Having worked with startups and established businesses across industries, our
                    founder pairs technical excellence with business acumen — delivering solutions
                    that actually move the needle.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {founderHighlights.map((h) => (
                    <div key={h.label} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{h.label}</p>
                        <p className="text-xs text-muted-foreground">{h.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Journey — animated SVG flow ─────────────── */}
      <section className="section-pad bg-blue-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-radial opacity-25 pointer-events-none" />
        <div className="relative section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center mb-4">Our journey</span>
            <h2 className="font-display mt-3 mb-4">
              From day one to{" "}
              <span className="brush-underline gradient-text">what's next</span>.
            </h2>
            <p className="lede mx-auto">
              The milestones that shaped our practice — and the ones still ahead.
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
                d="M 60 8 Q 300 -10, 460 8 T 740 8 T 1140 8"
                stroke="url(#aboutFlow)"
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
                <linearGradient id="aboutFlow" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {journey.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.year}
                    className={`card-premium p-6 fade-in-up stagger-${idx + 1} group`}
                  >
                    <span className="corner-plus text-foreground/20 top-3 left-3" />
                    <span className="corner-plus text-foreground/20 top-3 right-3" />

                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-3xl font-bold gradient-text tabular-nums">
                        {step.year}
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

      {/* ─────────────── Values ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-subtle opacity-40 pointer-events-none" />
        <div className="relative section-container">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">Values</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                The principles{" "}
                <span className="brush-underline gradient-text">behind the work</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="lede">
                Four commitments we hold to ourselves — and to every team we partner with.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft-lg">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
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
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
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
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Let's talk</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Ready to{" "}
            <span className="brush-underline gradient-text-on-dark">work together</span>?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's talk through your goals and how we can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-[2]">Get Started</span>
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

export default About;
