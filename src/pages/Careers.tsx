import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Heart, Globe, BookOpen, Zap, Users, Trophy, Briefcase, Bell, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import JobApplicationModal from "@/components/JobApplicationModal";

const Careers = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
//     {
//       title: "Senior Full Stack Developer",
//       location: "San Francisco, CA / Remote",
//       type: "Full-time",
//       salary: "$120k - $180k",
//       department: "Engineering",
//       description: "We're looking for an experienced full stack developer to join our growing team and work on cutting-edge web applications.",
//       requirements: ["5+ years experience", "React & Node.js", "Cloud platforms", "Agile methodology"],
//     },
//     {
//       title: "Mobile App Developer",
//       location: "New York, NY / Hybrid",
//       type: "Full-time",
//       salary: "$100k - $150k",
//       department: "Engineering",
//       description: "Join our mobile team to build innovative iOS and Android applications that delight users.",
//       requirements: ["3+ years mobile dev", "React Native or Flutter", "App Store experience", "UI/UX sensibility"],
//     },
//     {
//       title: "DevOps Engineer",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$110k - $160k",
//       department: "Operations",
//       description: "Help us build and maintain robust infrastructure and CI/CD pipelines for our enterprise clients.",
//       requirements: ["AWS/Azure expertise", "Docker & Kubernetes", "Infrastructure as Code", "Security best practices"],
//     },
//     {
//       title: "UX/UI Designer",
//       location: "Austin, TX / Remote",
//       type: "Full-time",
//       salary: "$90k - $130k",
//       department: "Design",
//       description: "Create beautiful, intuitive interfaces and user experiences for web and mobile applications.",
//       requirements: ["Portfolio required", "Figma proficiency", "User research", "Design systems"],
//     },
//     {
//       title: "Product Manager",
//       location: "San Francisco, CA",
//       type: "Full-time",
//       salary: "$130k - $170k",
//       department: "Product",
//       description: "Lead product strategy and execution for our flagship products, working closely with engineering and design teams.",
//       requirements: ["5+ years PM experience", "Technical background", "Data-driven", "Stakeholder management"],
//     },
//     {
//       title: "QA Engineer",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$80k - $120k",
//       department: "Engineering",
//       description: "Ensure the quality of our software through comprehensive testing strategies and automation.",
//       requirements: ["Test automation", "CI/CD integration", "Bug tracking", "Attention to detail"],
//     },
  ];

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
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

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Join Our Team</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Build your career with a company that values innovation, growth, and work-life balance. 
              We're always looking for talented individuals to join our team.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Join a team that values your growth and well-being. We offer industry-leading benefits and a culture built on collaboration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
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

              <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
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

              <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
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

              <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
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

              <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
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

              <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Open Positions</h2>

            {jobs.length === 0 ? (
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

                  {/*
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => navigate("/contact")}
                      className="gap-2"
                    >
                      <Bell size={16} />
                      Get Notified
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => navigate("/contact")}
                    >
                      Submit Resume
                    </Button>
                  </div>
                  */}

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
              <div className="grid gap-6">
                {jobs.map((job, index) => (
                  <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin size={16} /> {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={16} /> {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign size={16} /> {job.salary}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <Badge key={idx} variant="outline">{req}</Badge>
                          ))}
                        </div>
                      </div>
                      <Button onClick={() => handleApply(job.title)} className="w-full md:w-auto">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
        jobTitle={selectedJob || ""}
      />
    </div>
  );
};

export default Careers;
