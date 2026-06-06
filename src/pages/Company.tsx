import {
  Smartphone,
  Server,
  Palette,
  TestTube,
  ClipboardList,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Company = () => {
  useScrollReveal();

  // "By The Numbers" — Section 08 copy doc
  const stats = [
    { value: "20+", label: "Applications Shipped" },
    { value: "5+", label: "Industry Domains" },
    { value: "100%", label: "Remote Operations" },
    { value: "4", label: "Core Tech Stacks" },
  ];

  // 5 role cards from Copy Doc Section 07 — "The Collective"
  const roles = [
    {
      icon: Smartphone,
      name: "Meet Bhatt",
      role: "Founder · Mobile Engineering Lead",
      oneLiner:
        "Flutter, Android, and Kotlin. Leads architecture and client-facing scoping.",
      stack: ["Flutter", "Kotlin", "Jetpack Compose", "BLoC", "Clean Architecture"],
      initials: "MB",
    },
    {
      icon: Server,
      role: "Backend Engineering Lead",
      oneLiner: "API architecture, real-time systems, and database design.",
      stack: ["Node.js", "MongoDB", "PostgreSQL", "WebSockets"],
      initials: "BE",
    },
    {
      icon: Palette,
      role: "UI/UX Designer",
      oneLiner:
        "Design systems, Figma components, and handoff-ready screen specifications.",
      stack: ["Figma", "Interaction Design", "Design Systems"],
      initials: "UX",
    },
    {
      icon: TestTube,
      role: "QA & Testing Lead",
      oneLiner:
        "Test suite setup, manual QA, performance benchmarking, and regression coverage.",
      stack: ["Manual QA", "Test Automation", "Bug Triage"],
      initials: "QA",
    },
    {
      icon: ClipboardList,
      role: "Project & Client Consultant",
      oneLiner:
        "Sprint planning, SRS documentation, client communication, and delivery management.",
      stack: ["CMMI Documentation", "Sprint Planning", "Estimation"],
      initials: "PC",
    },
  ];

  // Industries we've shipped in (Copy Doc Section 08)
  const industries = ["Healthcare", "Automotive", "Fintech", "E-commerce", "Logistics"];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="The Collective — Who Builds It"
        description="A distributed group of engineers and designers who've each shipped production software independently. Not a staffing list — a team that's worked together."
        path="/company"
        keywords="Codenest Collective team, mobile engineers India, backend engineers India, software collective"
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

        <Sparkles className="absolute top-[20%] right-[8%] w-6 h-6 text-white/35 float-decor z-0" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">The Collective</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>A small,</span>{" "}
              <br />
              <span style={{ animationDelay: "0.2s" }} className="font-serif-accent text-white/85">
                senior team
              </span>{" "}
              <span style={{ animationDelay: "0.34s" }}>
                that's <span className="brush-underline gradient-text-on-dark">worked together.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up mb-12"
              style={{ animationDelay: "0.55s" }}
            >
              A distributed group of engineers and designers who've each shipped production
              software independently. Not a staffing list.
            </p>

            {/* Stats strip */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm fade-in-up"
              style={{ animationDelay: "0.75s" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-5 sm:px-6 py-5 bg-white/[0.04]">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-white/55 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Intro paragraph ─────────────── */}
      <section className="section-pad-tight bg-blue-soft relative">
        <div className="section-container max-w-4xl text-center">
          <p className="font-display text-xl md:text-2xl font-medium text-foreground leading-snug">
            Codenest Collective operates as a focused unit. Senior engineers — not juniors managed
            by seniors. We keep the team small deliberately:{" "}
            <span className="brush-underline gradient-text">
              six people who know what they're doing
            </span>{" "}
            ship faster and better than twenty who don't.
          </p>
        </div>
      </section>

      {/* ─────────────── Role cards ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">Who Builds It</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                Five roles.{" "}
                <span className="brush-underline gradient-text">One delivery unit.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="lede">
                Each lead owns their discipline end-to-end. Contract engineers join the collective
                project-by-project — every member is vetted before being assigned to a client build.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((member, idx) => {
              const Icon = member.icon;
              return (
                <article
                  key={member.role}
                  className={`card-premium gradient-border p-7 group fade-in-up stagger-${idx + 1}`}
                >
                  <span className="corner-plus text-foreground/20 top-4 left-4" />
                  <span className="corner-plus text-foreground/20 top-4 right-4" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[-8deg]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-2xl font-bold text-primary/15 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  {member.name && (
                    <span className="inline-flex items-center px-2.5 py-1 mb-3 rounded-full bg-primary/10 text-[10px] uppercase tracking-[0.15em] font-semibold text-primary">
                      {member.name}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold tracking-tight mb-2 text-foreground">
                    {member.role}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {member.oneLiner}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {member.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contract engineers join the collective project-by-project. Every member is vetted
            before being assigned to a client build.
          </p>
        </div>
      </section>

      {/* ─────────────── Industries shipped ─────────────── */}
      <section className="section-pad-tight bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-subtle opacity-30 pointer-events-none" />
        <div className="relative section-container max-w-5xl text-center">
          <span className="eyebrow justify-center mb-4">Industries We've Shipped In</span>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card text-sm font-display font-semibold text-foreground shadow-soft"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Manifesto strip ─────────────── */}
      <section className="section-pad bg-blue-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-radial opacity-25 pointer-events-none" />
        <div className="relative section-container max-w-5xl text-center">
          <span className="eyebrow justify-center mb-6">Why Codenest</span>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2] mb-8">
            "We build software the way we'd want it built for us —{" "}
            <span className="font-serif-accent text-primary">honestly,</span>{" "}
            <span className="font-serif-accent text-primary">carefully,</span> and with the future
            of the codebase in mind."
          </blockquote>
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-muted-foreground">
            <span className="h-px w-8 bg-primary/40" />
            The Codenest Collective
            <span className="h-px w-8 bg-primary/40" />
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
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Work With Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Bring us in,{" "}
            <span className="brush-underline gradient-text-on-dark">or join us.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Looking for an engineering partner — or thinking about joining the collective?
            Either way, send the brief.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-[2]">Start A Project</span>
                <ArrowUpRight className="w-4 h-4 relative z-[2]" />
              </button>
            </Link>
            <Link to="/careers">
              <button className="btn-ghost-light text-sm">Join The Collective</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
