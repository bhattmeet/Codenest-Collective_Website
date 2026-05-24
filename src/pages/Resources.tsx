import { useState, useEffect } from "react";
import { BookOpen, FileText, Video, Code, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { allResources, resourceCategories } from "@/data/resourcesData";
import ResourceCardSkeleton from "@/components/ResourceCardSkeleton";
import type { LucideIcon } from "lucide-react";

const Resources = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const iconMap: Record<string, LucideIcon> = { BookOpen, FileText, Video, Code };

  const filteredResources =
    selectedCategory === "All"
      ? allResources
      : allResources.filter(
          (resource) =>
            resource.type === selectedCategory.toLowerCase().replace(" ", "-"),
        );

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const featured = filteredResources[0];
  const rest = filteredResources.slice(1);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-page-glow">
      <SEO
        title="Resources — Blog, Guides & Case Studies"
        description="Explore insights, guides, and best practices from Codenest Collective Technologies. Stay updated with the latest in software development and technology trends."
        path="/resources"
        keywords="software development blog, tech guides, case studies, coding tutorials, DevOps resources, cloud computing, API design"
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
            <span className="eyebrow eyebrow-on-dark mb-6 animate-fade-in">Insights</span>
            <h1 className="hero-title text-white mb-6 word-reveal leading-[1.05]">
              <span style={{ animationDelay: "0.05s" }}>Ideas,</span>{" "}
              <span style={{ animationDelay: "0.18s" }}>essays, and</span>{" "}
              <br />
              <span style={{ animationDelay: "0.32s" }} className="font-serif-accent text-white/85">
                playbooks
              </span>{" "}
              <span style={{ animationDelay: "0.46s" }}>
                from <span className="brush-underline gradient-text-on-dark">the team.</span>
              </span>
            </h1>
            <p
              className="lede !text-white/75 !max-w-2xl text-base sm:text-lg fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              Insights, guides, and best practices — written by the engineers and designers
              shipping the work.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── Filter bar ─────────────── */}
      <section className="sticky top-[72px] z-30 bg-background/85 backdrop-blur-md border-y border-border">
        <div className="section-container py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted-foreground hidden md:inline-flex items-center gap-2">
              <span className="h-px w-5 bg-primary" />
              {filteredResources.length} articles
            </span>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {resourceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-foreground text-background shadow-soft"
                      : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="hidden md:inline-flex w-[60px]" />
          </div>
        </div>
      </section>

      {/* ─────────────── Featured + grid ─────────────── */}
      <section className="section-pad bg-blue-soft relative">
        <div className="absolute inset-0 bg-dots-subtle opacity-30 pointer-events-none" />
        <div className="relative section-container max-w-7xl">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <ResourceCardSkeleton key={index} />
                ))}
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-2xl font-semibold mb-2">No articles in this category.</p>
              <p className="text-sm text-muted-foreground">Try a different filter.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <article
                  className="card-premium gradient-border cursor-pointer group overflow-hidden mb-10 fade-in-up"
                  onClick={() => navigate("/resource-detail", { state: featured })}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] p-10 md:p-14 grain-overlay overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                          }}
                        />
                      </div>
                      <span className="corner-plus text-white/40 top-4 left-4" />
                      <span className="corner-plus text-white/40 bottom-4 right-4" />

                      <div className="relative z-10">
                        <span className="eyebrow eyebrow-on-dark mb-6">Featured</span>
                        <div className="mt-6 inline-flex items-center justify-center h-16 w-16 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                          {(() => {
                            const Icon = iconMap[featured.iconName];
                            return Icon ? <Icon className="w-7 h-7 text-white" /> : null;
                          })()}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="inline-flex items-center self-start px-2.5 py-1 rounded-full bg-muted text-[10px] uppercase tracking-[0.15em] font-semibold text-muted-foreground capitalize mb-4">
                        {featured.type.replace("-", " ")}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-4 leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {new Date(featured.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {featured.readTime}
                          </span>
                        </div>
                        <span className="arrow-link text-xs uppercase tracking-[0.18em] text-primary">
                          Read article
                          <span className="arrow-track" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((resource, idx) => {
                  const Icon = iconMap[resource.iconName];
                  return (
                    <article
                      key={resource.id}
                      className={`card-premium gradient-border p-6 cursor-pointer group flex flex-col fade-in-up stagger-${(idx % 6) + 1}`}
                      onClick={() => navigate("/resource-detail", { state: resource })}
                    >
                      <div className="flex items-center justify-between mb-5">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
                          {Icon && <Icon className="w-4 h-4" />}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-[10px] uppercase tracking-[0.15em] font-semibold text-muted-foreground capitalize">
                          {resource.type.replace("-", " ")}
                        </span>
                      </div>

                      <h3 className="font-display text-base font-semibold tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-5 flex-1">
                        {resource.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tech-badge">
                            {tag}
                          </span>
                        ))}
                      </div>

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
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─────────────── Newsletter CTA ─────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[hsl(var(--surface-inverse))] text-white cursor-spotlight grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BDA]/60 to-[#4874E8]/40" />
        <div className="absolute inset-0 bg-dots-subtle opacity-20" />
        <span className="corner-plus text-white/30 top-6 left-6" />
        <span className="corner-plus text-white/30 top-6 right-6" />
        <span className="corner-plus text-white/30 bottom-6 left-6" />
        <span className="corner-plus text-white/30 bottom-6 right-6" />

        <div className="relative section-container z-10 max-w-3xl mx-auto text-center">
          <span className="eyebrow eyebrow-on-dark justify-center mb-6">Stay sharp</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
            Get our best{" "}
            <span className="brush-underline gradient-text-on-dark">writing</span>
            , in your inbox.
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            One thoughtful essay each month — engineering, design, and product writing from the
            team shipping the work. No noise.
          </p>
          <Link to="/contact">
            <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
              <span className="relative z-[2]">Subscribe to the briefing</span>
              <ArrowUpRight className="w-4 h-4 relative z-[2]" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
