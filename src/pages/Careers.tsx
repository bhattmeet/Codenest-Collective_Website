import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Globe,
  BookOpen,
  Zap,
  Users,
  Trophy,
  Bell,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import JobApplicationModal from "@/components/JobApplicationModal";
import { openPositions, JobPosition } from "@/data/careersData";

const Careers = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const toggleJobDetails = (jobId: string) => {
    const isExpanding = expandedJob !== jobId;
    setExpandedJob(expandedJob === jobId ? null : jobId);
    if (isExpanding) {
      setTimeout(() => {
        cardRefs.current[jobId]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Comprehensive Benefits",
      blurb: "Health, dental, vision insurance, 401(k) matching, and generous PTO.",
    },
    {
      icon: Globe,
      title: "Remote First",
      blurb: "Work from anywhere with flexible hours and a strong remote culture.",
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      blurb: "$2,500/year budget for courses, conferences, books, and certifications.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      blurb: "Work with the latest technologies and tools on challenging projects.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      blurb: "Join a diverse team that values transparency, respect, and innovation.",
    },
    {
      icon: Trophy,
      title: "Career Growth",
      blurb: "Clear career paths with mentorship and real opportunities for advancement.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="Careers — Join Our Team"
        description="Explore career opportunities at Codenest Collective Technologies. Join our passionate team of developers, designers, and innovators."
        path="/careers"
        keywords="software development jobs, tech careers, developer jobs, remote work, join our team, career opportunities"
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

        <Sparkles className="absolute top-[22%] right-[8%] w-6 h-6 text-white/40 float-decor z-0" />

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">Careers</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>Build your</span>{" "}
              <span style={{ animationDelay: "0.18s" }} className="font-serif-accent text-white/85">
                career
              </span>{" "}
              <span style={{ animationDelay: "0.32s" }}>with a team</span>{" "}
              <br />
              <span style={{ animationDelay: "0.46s" }}>
                that <span className="brush-underline gradient-text-on-dark">cares.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              Join a small, senior team that values craft, autonomy, and steady growth. We invest
              in the people who do the work — and ship products we're genuinely proud of.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── Benefits ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-4">Why work with us</span>
              <h2 className="font-display mt-3 leading-[1.1]">
                Benefits built for{" "}
                <span className="brush-underline gradient-text">real life</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="lede">
                Industry-leading benefits and a culture built on transparency, autonomy, and
                collaboration. We treat our team like the senior professionals they are.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft-lg">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="relative bg-card p-7 hover:bg-[hsl(var(--background-tinted))] transition-colors group"
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
                  <h3 className="font-display text-base font-semibold tracking-tight mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Open roles ─────────────── */}
      <section className="section-pad bg-tinted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-subtle opacity-40 pointer-events-none" />
        <div className="relative section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow mb-4">Open roles</span>
              <h2 className="font-display mt-3 mb-3 leading-[1.1]">
                {openPositions.length} open{" "}
                <span className="brush-underline gradient-text">positions</span>.
              </h2>
              <p className="text-sm text-muted-foreground max-w-md">
                Don't see your role? We're always reading inbound applications from exceptional
                people.
              </p>
            </div>
            <Link to="/contact" className="arrow-link self-start md:self-auto text-sm text-primary">
              Send a general application
              <span className="arrow-track" />
            </Link>
          </div>

          {openPositions.length === 0 ? (
            <div className="card-premium gradient-border p-12 md:p-16 text-center">
              <span className="corner-plus text-foreground/20 top-4 left-4" />
              <span className="corner-plus text-foreground/20 top-4 right-4" />
              <span className="corner-plus text-foreground/20 bottom-4 left-4" />
              <span className="corner-plus text-foreground/20 bottom-4 right-4" />

              <div className="inline-flex items-center justify-center mb-6 relative">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-9 h-9 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center shadow-soft">
                  <Bell className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                No open positions right now
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
                We don't have any open positions today, but we're always reading inbound. Submit
                your résumé for future opportunities — we'll be in touch when something matches.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => navigate("/company")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border bg-card text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Our Company
                </button>
                <button
                  onClick={() => navigate("/projects")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border bg-card text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Our Work
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border bg-card text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Services
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              {openPositions.map((job, idx) => {
                const isExpanded = expandedJob === job.id;
                return (
                  <div
                    key={job.id}
                    ref={(el) => (cardRefs.current[job.id] = el)}
                    className="scroll-mt-24"
                  >
                    <article
                      className={`card-premium gradient-border p-6 md:p-7 transition-all duration-500 fade-in-up stagger-${(idx % 6) + 1}`}
                    >
                      <span className="corner-plus text-foreground/20 top-4 left-4" />
                      <span className="corner-plus text-foreground/20 top-4 right-4" />

                      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/70 mb-2 inline-block">
                            {job.department}
                          </span>
                          <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={13} className="text-primary flex-shrink-0" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock size={13} className="text-primary flex-shrink-0" />
                              {job.type}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Briefcase size={13} className="text-primary flex-shrink-0" />
                              {job.experience}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-center">
                          <button
                            onClick={() => toggleJobDetails(job.id)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border bg-card text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                          >
                            {isExpanded ? "Show Less" : "View Details"}
                          </button>
                          <button
                            onClick={() => handleApply(job)}
                            className="shine-sweep inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[hsl(var(--primary))] text-white text-sm font-semibold hover:bg-[hsl(var(--primary-hover))] transition-all shadow-soft"
                          >
                            <span className="relative z-[2]">Apply Now</span>
                            <ArrowUpRight className="w-3.5 h-3.5 relative z-[2]" />
                          </button>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {job.description}
                      </p>

                      {isExpanded && (
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-6 pt-6 border-t border-border">
                          <div>
                            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-primary mb-3">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-primary mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-primary mb-3">
                              Nice to have
                            </h4>
                            <ul className="space-y-2">
                              {job.niceToHave.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-primary mb-3">
                              Benefits
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {job.benefits.map((benefit, i) => (
                                <span key={i} className="tech-badge">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          )}
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
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Stay in touch</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Don't see your role?{" "}
            <br />
            <span className="brush-underline gradient-text-on-dark">Send us your résumé.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We're always reading inbound from talented people. Reach out and tell us what you want
            to work on.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-[2]">Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 relative z-[2]" />
              </button>
            </Link>
            <Link to="/about">
              <button className="btn-ghost-light text-sm">Learn About Us</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob?.title || ""}
      />
    </div>
  );
};

export default Careers;
