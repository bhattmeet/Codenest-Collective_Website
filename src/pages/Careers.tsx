import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, Heart, Globe, BookOpen, Zap, Users, Trophy, Bell, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

    // Scroll to card when expanding
    if (isExpanding) {
      setTimeout(() => {
        cardRefs.current[jobId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Careers - Join Our Team"
        description="Explore career opportunities at Codenest Collective Technologies. Join our passionate team of developers, designers, and innovators. We offer competitive benefits, remote work options, and exciting projects."
        path="/careers"
        keywords="software development jobs, tech careers, developer jobs, remote work, join our team, career opportunities"
      />
      <Navigation />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#4A7EFA] to-[#6B9BFA] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="section-title fade-in-up text-3xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">Join Our Team</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Build your career with a company that values innovation, growth, and work-life balance. 
              We're always looking for talented individuals to join our team.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-lg md:text-xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Join a team that values your growth and well-being. We offer industry-leading benefits and a culture built on collaboration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-glass stagger-1 border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Comprehensive Benefits</h3>
                      <p className="text-sm text-muted-foreground">
                        Health, dental, vision insurance, 401(k) matching, and generous PTO
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass stagger-2 border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Remote First</h3>
                      <p className="text-sm text-muted-foreground">
                        Work from anywhere with flexible hours and a strong remote culture
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass stagger-3 border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Learning & Development</h3>
                      <p className="text-sm text-muted-foreground">
                        $2,500/year budget for courses, conferences, books, and certifications
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass stagger-4 border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Cutting-Edge Tech</h3>
                      <p className="text-sm text-muted-foreground">
                        Work with the latest technologies and tools on challenging projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass stagger-5 border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Collaborative Culture</h3>
                      <p className="text-sm text-muted-foreground">
                        Join a diverse team that values transparency, respect, and innovation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass stagger-6 border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear career paths with mentorship and opportunities for advancement
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Job Listings */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Open Positions ({openPositions.length})</h2>

            {openPositions.length === 0 ? (
              // Empty State - No Jobs Available
              <Card className="border-dashed border-2 border-border">
                <CardContent className="flex flex-col items-center justify-center py-16 px-6">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Bell className="w-4 h-4 text-accent" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-center">No Open Positions Right Now</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-6">
                    We don't have any open positions at the moment, but we're always looking for talented individuals.
                    Check back soon or submit your resume for future opportunities.
                  </p>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">In the meantime, explore:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/company")}
                      >
                        Our Company
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/projects")}
                      >
                        Our Work
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/services")}
                      >
                        Services
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Job Listings
              <div className="grid gap-4">
                {openPositions.map((job) => {
                  const isExpanded = expandedJob === job.id;
                  return (
                    <div
                      key={job.id}
                      ref={(el) => cardRefs.current[job.id] = el}
                      className="scroll-mt-24"
                    >
                      <Card className="card-glass border-primary/20 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl mb-2 text-primary">{job.title}</CardTitle>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin size={14} className="text-primary flex-shrink-0" /> {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} className="text-primary flex-shrink-0" /> {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase size={14} className="text-primary flex-shrink-0" /> {job.experience}
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs flex-shrink-0">{job.department}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{job.description}</p>

                        {isExpanded && (
                          <div className="space-y-4 mb-4 border-t border-primary/10 pt-4">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="font-semibold text-sm mb-2 text-primary">Key Responsibilities</h4>
                              <ul className="space-y-1.5">
                                {job.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs">
                                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                              <h4 className="font-semibold text-sm mb-2 text-primary">Required Qualifications</h4>
                              <ul className="space-y-1.5">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs">
                                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Nice to Have */}
                            <div>
                              <h4 className="font-semibold text-sm mb-2 text-primary">Nice to Have</h4>
                              <ul className="space-y-1.5">
                                {job.niceToHave.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs">
                                    <CheckCircle className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h4 className="font-semibold text-sm mb-2 text-primary">Benefits</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {job.benefits.map((benefit, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs py-0.5 px-2">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button onClick={() => handleApply(job)} size="sm" className="flex-1 sm:flex-none">
                            Apply Now
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleJobDetails(job.id)}
                            className="flex-1 sm:flex-none"
                          >
                            {isExpanded ? "Show Less" : "View Details"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-lg md:text-xl lg:text-4xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We're always looking for talented people. Send us your resume!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5088FA] px-6 md:px-8 py-4 md:py-6">
                Learn About Us
              </Button>
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
