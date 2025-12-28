import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CaseStudy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  // Use project's case study details or fallback to defaults
  const caseStudyDetails = {
    duration: project.duration || "6 months",
    teamSize: project.teamSize || "8 professionals",
    challenge: project.challenge || "The client needed a robust solution to handle rapidly growing user demands while maintaining high performance and reliability. Existing infrastructure was struggling to scale effectively.",
    solution: project.solution || "We designed and implemented a modern architecture leveraging cloud-native technologies, microservices, and automated deployment pipelines to ensure scalability and maintainability.",
    results: project.results || [
      "Reduced system response time by 75%",
      "Increased user capacity by 300%",
      "Achieved 99.9% uptime",
      "Decreased operational costs by 40%"
    ],
    features: project.features || [
      "Real-time data processing",
      "Advanced security protocols",
      "Intuitive user interface",
      "Comprehensive analytics dashboard",
      "Mobile-responsive design",
      "API integrations"
    ],
    testimonials: project.testimonials || [
      {
        quote: "Codenest Collective Technologies transformed our business operations with their innovative platform. The team's expertise and dedication exceeded our expectations at every turn.",
        author: "John Doe",
        role: "CEO",
        initials: "JD"
      },
      {
        quote: "Working with Codenest was seamless. They delivered a scalable solution that perfectly aligned with our business goals and continues to drive growth.",
        author: "Sarah Miller",
        role: "CTO, Tech Innovations",
        initials: "SM"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2"
            onClick={() => navigate("/projects")}
          >
            <ArrowLeft size={16} /> Back to Projects
          </Button>

          <div className="mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">{project.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              {project.description}
            </p>

            {/* Demo and GitHub Links */}
            <div className="flex gap-4">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 hover:scale-105 transition-transform">
                    <ExternalLink size={18} />
                    View Live Demo
                  </Button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    <Github size={18} />
                    View on GitHub
                  </Button>
                </a>
              )}
            </div>
          </div>

          {project.caseStudyImage.startsWith('url(') ? (
            <img
              src={project.caseStudyImage.replace('url(', '').replace(')', '')}
              alt={project.title}
              className="w-full h-[400px] object-contain bg-muted rounded-lg mb-12"
            />
          ) : (
            <div
              className="w-full h-[400px] rounded-lg mb-12"
              style={{ background: project.caseStudyImage }}
            />
          )}

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Industry</h3>
                <p className="text-muted-foreground">{project.category}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">{caseStudyDetails.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Team Size</h3>
                <p className="text-muted-foreground">{caseStudyDetails.teamSize}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {caseStudyDetails.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {caseStudyDetails.solution}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudyDetails.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudyDetails.results.map((result, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                        <p className="text-lg font-semibold">{result}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Client Testimonials Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudyDetails.testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className={idx === 0
                    ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20"
                    : "bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20"
                  }
                >
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-primary text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        idx === 0 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                      }`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate("/contact")}>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
