import {
  Users,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
  HeartHandshake,
  Scale,
  GraduationCap,
  ArrowUpRight,
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

const Company = () => {
  useScrollReveal();

  const stats = [
    { icon: Users, value: `${companyStats.clientsWorldwide}+`, label: "Team Members" },
    { icon: TrendingUp, value: `${allProjects.length}+`, label: "Projects Completed" },
    { icon: Award, value: "1+", label: "Industry Awards" },
    { icon: Globe, value: `${companyStats.yearsExperience}+`, label: "Years Experience" },
  ];

  const culture = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      blurb:
        "We encourage experimentation and creative problem-solving, staying at the forefront of technology.",
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Environment",
      blurb:
        "An open, inclusive culture that promotes teamwork, knowledge sharing, and mutual respect.",
    },
    {
      icon: Scale,
      title: "Work-Life Balance",
      blurb:
        "We believe in flexible work arrangements and supporting our team's well-being and personal growth.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      blurb:
        "We invest in our team's development through training, conferences, and certification programmes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="Our Company — Leadership & Values"
        description="Discover Codenest Collective Technologies' leadership, culture, and core values."
        path="/company"
        keywords="company information, leadership team, company culture, core values, company overview"
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
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">The company</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>A small team,</span>{" "}
              <br />
              <span style={{ animationDelay: "0.2s" }} className="font-serif-accent text-white/85">
                a wide
              </span>{" "}
              <span style={{ animationDelay: "0.34s" }}>
                <span className="brush-underline gradient-text-on-dark">horizon.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up mb-12"
              style={{ animationDelay: "0.55s" }}
            >
              Learn about our journey, the people behind the work, and the principles that guide
              everything we ship.
            </p>

            {/* Stats strip */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm fade-in-up"
              style={{ animationDelay: "0.75s" }}
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="px-5 sm:px-6 py-5 bg-white/[0.04]">
                    <Icon className="w-4 h-4 text-white/60 mb-3" />
                    <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-white/55 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Culture ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">Our culture</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                Built on{" "}
                <span className="brush-underline gradient-text">craft and care</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="lede">
                We foster an environment that values innovation, collaboration, and continuous
                growth — the kind of place that produces senior work over time.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft-lg">
            {culture.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative bg-card p-8 hover:bg-[hsl(var(--background-tinted))] transition-colors group"
                >
                  <span className="corner-plus text-foreground/20 top-4 right-4" />

                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[-8deg]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-display text-xs font-semibold text-primary/50 tabular-nums tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Manifesto strip ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-radial opacity-25 pointer-events-none" />
        <div className="relative section-container max-w-5xl text-center">
          <span className="eyebrow justify-center mb-6">Manifesto</span>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2] mb-8">
            “We build software the way we'd want it built for us —{" "}
            <span className="font-serif-accent text-primary">honestly,</span>{" "}
            <span className="font-serif-accent text-primary">carefully,</span> and with the future
            of the codebase in mind.”
          </blockquote>
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-muted-foreground">
            <span className="h-px w-8 bg-primary/40" />
            The Codenest Collective team
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
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Let's connect</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Let's build the{" "}
            <span className="brush-underline gradient-text-on-dark">future together</span>.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Interested in working with us — or joining the team? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/careers">
              <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-[2]">Join Our Team</span>
                <ArrowUpRight className="w-4 h-4 relative z-[2]" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-ghost-light text-sm">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
