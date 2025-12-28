import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "Frontend", "UI/UX Design", "Backend", "Fullstack"];

  const projects = [
    {
      title: "Space Xploration",
      category: "Mobile Apps",
      industry: "Education",
      description: "Modern interactive Android application built with Jetpack Compose for exploring celestial bodies and space missions. Features responsive UI with astronomical data visualization.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Room Database"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037619/feature_graphic_ue0mmn.png",
      github: "",
      demo: "https://play.google.com/store/apps/details?id=com.meet.spaceexploration",
      problem: "Creating an intuitive interface to present complex astronomical data while maintaining performance with large datasets and high-resolution imagery",
      solution: "Implemented Jetpack Compose for modern UI with MVVM architecture for clean separation of concerns",
      results: "Published on Google Play Store with smooth 60 FPS UI animations and offline-first architecture",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037619/feature_graphic_ue0mmn.png)",
      duration: "3 months",
      teamSize: "1 developer",
      challenge: "Creating an intuitive interface to present complex astronomical data while maintaining performance with large datasets and high-resolution imagery.",
      solution: "Implemented Jetpack Compose for modern UI with MVVM architecture for clean separation of concerns. Used Room Database for efficient offline data storage and Coroutines for smooth asynchronous operations.",
      results: [
        "Published on Google Play Store",
        "Smooth performance with 60 FPS UI animations",
        "Offline-first architecture for seamless user experience",
        "Positive user feedback on UI/UX design"
      ],
      features: [
        "Interactive celestial body exploration",
        "Space mission information database",
        "Astronomical data visualization",
        "Responsive UI with Material Design",
        "Real-time space data synchronization",
        "Offline data caching"
      ],
      testimonials: [
        {
          quote: "An excellent educational tool that brings space exploration to life with beautiful design and smooth performance.",
          author: "Alex Johnson",
          role: "App User",
          initials: "AJ"
        }
      ]
    },
    {
      title: "TouchBridge NFC",
      category: "Mobile Apps",
      industry: "Technology",
      description: "Comprehensive NFC tag management application with multi-format support. Enables NFC tag reading, writing, and secure data transfer between devices.",
      tech: ["Flutter", "Dart", "NFC", "MVVM", "Provider", "Hive"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037594/touch_bridge_feature_grapic_whqkju.png",
      github: "",
      demo: "",
      problem: "Supporting multiple NFC tag formats while ensuring data security and providing a seamless cross-platform experience",
      solution: "Built with Flutter for cross-platform support, implemented comprehensive NFC protocol handlers, and added encryption layer",
      results: "Support for 10+ NFC tag formats with 100% success rate in tag reading/writing operations",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037594/touch_bridge_feature_grapic_whqkju.png)",
      duration: "4 months",
      teamSize: "1 developer",
      challenge: "Supporting multiple NFC tag formats while ensuring data security and providing a seamless cross-platform experience.",
      solution: "Built with Flutter for cross-platform support, implemented comprehensive NFC protocol handlers, and added encryption layer for secure data transfer.",
      results: [
        "Support for 10+ NFC tag formats",
        "100% success rate in tag reading/writing operations",
        "Enterprise-grade security implementation",
        "Deployed on both Android and iOS platforms"
      ],
      features: [
        "Multi-format NFC support (NDEF, MiFare, ISO-DEP)",
        "Custom NFC tag programming",
        "Secure NFC data encryption",
        "Batch NFC operations support",
        "Tag history and analytics",
        "Cross-platform compatibility"
      ],
      testimonials: [
        {
          quote: "A powerful and reliable NFC solution that handles multiple tag formats with ease and security.",
          author: "Sarah Chen",
          role: "Technology Consultant",
          initials: "SC"
        }
      ]
    },
    {
      title: "DishDiscover (Frontend)",
      category: "Mobile Apps",
      industry: "Food & Lifestyle",
      description: "Cross-platform mobile application built with Flutter for seamless recipe browsing and discovery experience across Android and iOS platforms.",
      tech: ["Flutter", "Dart", "GetX", "Dio", "Hive", "Firebase"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png",
      github: "https://github.com/bhattmeet/DishDiscovery-Frontend",
      demo: "",
      problem: "Creating a fluid, responsive UI with offline capabilities while handling large media files and ensuring fast search results",
      solution: "Utilized GetX for efficient state management, Hive for local database, and implemented smart caching strategies with Dio",
      results: "Sub-second search response time with full offline functionality and smooth 60 FPS scrolling",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png)",
      duration: "5 months",
      teamSize: "2 developers",
      challenge: "Creating a fluid, responsive UI with offline capabilities while handling large media files and ensuring fast search results.",
      solution: "Utilized GetX for efficient state management, Hive for local database, and implemented smart caching strategies with Dio for API calls.",
      results: [
        "Sub-second search response time",
        "Full offline functionality with Hive database",
        "Smooth 60 FPS scrolling with lazy loading",
        "Successfully integrated with custom backend API"
      ],
      features: [
        "Advanced recipe search with multiple filters",
        "Step-by-step cooking instructions",
        "Offline recipe access and caching",
        "Recipe bookmarking and favorites",
        "User profile and preferences management",
        "Social sharing capabilities"
      ],
      testimonials: [
        {
          quote: "The app's offline capabilities and smooth performance make it my go-to recipe companion in the kitchen.",
          author: "Maria Rodriguez",
          role: "Home Chef",
          initials: "MR"
        }
      ]
    },
    {
      title: "DishDiscover (Backend)",
      category: "Backend",
      industry: "Food & Lifestyle",
      description: "RESTful API server with robust authentication, database management, and cloud storage integration. Deployed on DigitalOcean infrastructure with automated CI/CD pipeline.",
      tech: ["Node.js", "Express.js", "JWT", "DigitalOcean", "AWS S3", "PostgreSQL"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png",
      github: "https://github.com/bhattmeet/DishDiscovery-Backend",
      demo: "",
      problem: "Building a secure, scalable API that handles user authentication, large media files, and provides fast response times",
      solution: "Implemented JWT-based authentication, AWS S3 for media storage, PostgreSQL for relational data, and automated CI/CD on DigitalOcean",
      results: "99.9% uptime with average API response time under 200ms and zero-downtime deployments",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png)",
      duration: "5 months",
      teamSize: "2 developers",
      challenge: "Building a secure, scalable API that handles user authentication, large media files, and provides fast response times for mobile clients.",
      solution: "Implemented JWT-based authentication, AWS S3 for media storage, PostgreSQL for relational data, and deployed on DigitalOcean with automated CI/CD.",
      results: [
        "99.9% uptime on DigitalOcean infrastructure",
        "Average API response time under 200ms",
        "Secure authentication with JWT and bcrypt",
        "Automated deployment pipeline with zero-downtime updates"
      ],
      features: [
        "RESTful API with JWT authentication",
        "Secure user registration and login",
        "Recipe CRUD operations with validation",
        "Image upload and storage management",
        "Email notification system",
        "Rate limiting and security middleware"
      ],
      testimonials: [
        {
          quote: "Robust and scalable backend architecture that handles high traffic with impressive performance metrics.",
          author: "David Kim",
          role: "DevOps Engineer",
          initials: "DK"
        }
      ]
    },
    {
      title: "Ayusha Art Classes - Custom Tailoring Website",
      category: "Frontend",
      industry: "Business Services",
      description: "A professional landing page for a custom tailoring business, featuring a portfolio gallery, service listings, and direct WhatsApp integration for customer inquiries.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1766909530/Screenshot_2025-12-28_at_1.39.27_PM_zpmmd7.png",
      github: "",
      demo: "https://dtrpdsnr4m57.trickle.host/",
      problem: "Creating a visually appealing website that showcases tailoring craftsmanship with easy WhatsApp-based customer communication",
      solution: "Built a responsive single-page React application with Tailwind CSS, custom Lightbox gallery, and persistent WhatsApp CTAs",
      results: "Established professional online presence with streamlined inquiry process and mobile-optimized design",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1766909530/Screenshot_2025-12-28_at_1.39.27_PM_zpmmd7.png)",
      duration: "2 months",
      teamSize: "1 developer",
      challenge: "The business relies heavily on visual demonstration of quality and personal communication. A standard contact form was not desired; the client specifically requested WhatsApp as the primary communication channel.",
      solution: "We built a single-page responsive website using React and Tailwind CSS. The design uses a sophisticated Navy Blue and Warm Orange color palette to convey professionalism and creativity. Key features include a custom Lightbox gallery for the portfolio, a 'Why Choose Us' section with trust signals, and persistent WhatsApp call-to-actions.",
      results: [
        "Established a professional online identity for the local business",
        "Streamlined the inquiry process by directing all traffic to WhatsApp",
        "Created an easily accessible digital portfolio for client reference",
        "Ensured mobile compatibility for customers accessing via smartphones"
      ],
      features: [
        "Elegant Hero section with background overlay and 'Book Now' CTA",
        "Comprehensive Services section detailing Custom Tailoring, Fabric Consultation, and more",
        "Interactive Image Gallery with Lightbox for viewing garment details",
        "WhatsApp integration for direct customer communication (floating button and contact section)",
        "Responsive Mobile Menu and smooth scrolling navigation",
        "Dynamic Favicon generation based on logo"
      ],
      testimonials: [
        {
          quote: "The website perfectly captures our craftsmanship and makes it incredibly easy for customers to reach out via WhatsApp.",
          author: "Ayusha Tailoring Team",
          role: "Business Owner",
          initials: "AT"
        }
      ]
    },
    {
      title: "Blood Source - Donor Onboarding Flow",
      category: "UI/UX Design",
      industry: "Healthcare",
      description: "Design of a clean and trustworthy onboarding experience for a blood donation app, covering sign-up, OTP verification, and medical questionnaires to help users become donors in a few guided steps.",
      tech: ["Figma", "UI Design", "UX Design", "Mobile Design", "Design Systems"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765703925/blood_source_design_ujvia5.png",
      github: "",
      demo: "https://www.behance.net/gallery/240420173/Blood-Source",
      problem: "Many donor platforms lose users during registration because the process feels long, clinical, or confusing",
      solution: "Redesigned onboarding flow as three focused screens with clear progress, consistent visual hierarchy, and reassuring microcopy",
      results: "Designed to reduce perceived complexity and increase completion rates for new donors while improving data accuracy",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765703925/blood_source_design_ujvia5.png)",
      duration: "3 weeks",
      teamSize: "1 designer",
      challenge: "Many donor platforms lose users during registration because the process feels long, clinical, or confusing. Users are often unsure what information is required, how it will be used, and whether their medical data is safe, which leads to abandoned forms and incomplete profiles.",
      solution: "The onboarding flow was redesigned as three focused screens: a structured sign-up form, a distraction-free verification screen, and a clean questionnaire with clear progress. Consistent visual hierarchy, generous spacing, and a friendly red-and-white palette make the experience feel approachable while still serious enough for a medical context.",
      results: [
        "The proposed flow reduces perceived complexity by breaking the process into logical stages",
        "This design is intended to increase completion rates for new donors",
        "Improve data accuracy for blood groups and health conditions",
        "Build initial trust with users so they are more likely to return and donate again"
      ],
      features: [
        "Guided sign-up form with personal details, contact information, location, and blood group selection",
        "Optional 'Sign up as donor' control to support both donors and general users in the same flow",
        "OTP verification screen with a single primary button and clear resend option",
        "Structured medical questionnaire with simple Yes/No choices for key eligibility checks",
        "Explicit consent section and 'Become a donor' CTA that clearly indicates the final step"
      ],
      testimonials: [
        {
          quote: "The clean, thoughtful design makes the donor registration process feel simple and trustworthy.",
          author: "Emily Watson",
          role: "Healthcare UX Researcher",
          initials: "EW"
        }
      ]
    }
  ];

  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter(p => p.category === selectedFilter || p.industry === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio - Our Projects & Case Studies"
        description="Explore our portfolio of successful software projects including mobile apps, web applications, healthcare, fintech, and SaaS solutions. View detailed case studies showcasing our expertise."
        path="/projects"
        keywords="software portfolio, case studies, mobile apps, web applications, project showcase, development projects, healthcare apps, fintech solutions, SaaS platforms"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Showcasing successful projects across Mobile Apps, Web Apps, Healthcare, Fintech, and SaaS
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6 bg-white border-y border-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={`${
                  selectedFilter === filter
                    ? "bg-primary text-white shadow-lg"
                    : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                } transition-all hover:scale-105 duration-300`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 overflow-hidden group bg-white"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-cyan-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  {/* Category Badge - moved below image */}
                  <div className="mb-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg text-primary mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Demo and GitHub Links */}
                  <div className="flex gap-3 mb-4">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary text-xs transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary text-xs transition-colors"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="link"
                    className="p-0 text-primary hover:text-blue-600 font-semibold group/btn"
                    onClick={() => navigate("/case-study", { state: { project } })}
                  >
                    View Case Study <ArrowRight className="w-4 h-4 ml-1 inline group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Start Your Project
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Have a project in mind? Let's turn your idea into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5088FA] px-6 md:px-8 py-4 md:py-6">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
