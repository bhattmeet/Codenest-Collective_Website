import { ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import spaceExplorationProjectImg from "@/assets/space_xploration_project.png";
import spaceExplorationCaseStudyImg from "@/assets/space_xploration_casestudy.png";
import touchBridgeProjectImg from "@/assets/touch_bridge_project.png";
import touchBridgeCaseStudyImg from "@/assets/touch_bridge_casestudy.png";
import dishDiscoverProjectImg from "@/assets/dish_discover_project.png";
import dishDiscoverCaseStudyImg from "@/assets/dish_discover_casestudy.png";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "Frontend", "UI/UX Design", "Backend", "Fullstack"];

  const projects = [
    {
      title: "Space Exploration",
      category: "Mobile Apps",
      industry: "Education",
      description: "Educational Android app for space exploration",
      tech: ["Android", "Jetpack Compose", "Firebase"],
      image: spaceExplorationProjectImg,
      problem: "Need for an engaging educational platform that makes complex astronomical concepts accessible",
      solution: "Native Android app with Jetpack Compose, efficient data caching, and intuitive progressive UI",
      results: "50,000+ downloads, 4.8★ rating, Featured in Google Play's Editor's Choice",
      // Case Study Details
      caseStudyImage: `url(${spaceExplorationCaseStudyImg})`,
      duration: "4 months",
      teamSize: "2 professionals",
      challenge: "Creating an engaging educational platform that makes complex astronomical concepts accessible to users of all ages while maintaining scientific accuracy and performance with large datasets.",
      solution: "We built a native Android application using Kotlin and Jetpack Compose, implementing efficient data caching strategies and creating an intuitive UI that progressively reveals information based on user interest levels.",
      results: [
        "50,000+ downloads in first 3 months",
        "4.8★ average rating on Play Store",
        "Featured in Google Play's 'Editor's Choice'",
        "Reduced app load time by 60%"
      ],
      features: [
        "Interactive 3D planet models",
        "Offline data access",
        "Daily astronomy facts",
        "Educational quizzes and achievements",
        "Real-time space news integration",
        "AR constellation viewer"
      ],
      testimonials: [
        {
          quote: "The attention to detail and educational value is outstanding. A must-have for space enthusiasts.",
          author: "Supal Sheth",
          role: "Project Manager",
          initials: "MR"
        }
      ]
    },
    {
      title: "TouchBridge - NFC",
      category: "Mobile Apps",
      industry: "Healthcare",
      description: "Cross-platform NFC tag reading and writing application",
      tech: ["Flutter", "Android", "iOS", "NFC", "Firebase"],
      image: touchBridgeProjectImg,
      problem: "Need for cross-platform NFC solution working seamlessly on iOS and Android with various tag formats",
      solution: "Flutter cross-platform app with native NFC plugins and Firebase cloud synchronization",
      results: "30,000+ active users, 99.5% successful read/write rate, 15+ NFC tag formats supported",
      // Case Study Details
      caseStudyImage: `url(${touchBridgeCaseStudyImg})`,
      duration: "6 months",
      teamSize: "6 professionals",
      challenge: "Developing a cross-platform NFC solution that works seamlessly on both Android and iOS while handling various NFC tag formats and providing real-time tag management capabilities.",
      solution: "We leveraged Flutter's cross-platform capabilities combined with native NFC plugins, implementing a robust state management system and cloud-based history synchronization via Firebase.",
      results: [
        "Cross-platform compatibility achieved",
        "Support for 15+ NFC tag formats",
        "99.5% successful read/write rate",
        "30,000+ active users globally"
      ],
      features: [
        "Multi-format NFC tag support",
        "Cloud-synced scan history",
        "Batch tag programming",
        "Custom tag templates",
        "Dark/Light theme support",
        "Export data to multiple formats"
      ],
      testimonials: [
        {
          quote: "Finally, an NFC app that works flawlessly on both my Android and iPhone. The UI is intuitive and feature-rich.",
          author: "Supal Sheth",
          role: "Product Manager",
          initials: "LW"
        }
      ]
    },
    {
      title: "Dish Discover - Recipe App",
      category: "Fullstack",
      industry: "SaaS",
      description: "Recipe management platform with Flutter frontend and Node.js backend",
      tech: ["Flutter", "Node.js", "GetX", "Dio", "MongoDB"],
      image: dishDiscoverProjectImg,
      problem: "Building full-stack recipe platform handling thousands of recipes with personalized recommendations",
      solution: "Scalable Node.js/MongoDB backend with Flutter frontend using GetX state management and Dio for API optimization",
      results: "10,000+ recipes, 70% faster API response, 85% user retention, Featured in App Store",
      // Case Study Details
      caseStudyImage: `url(${dishDiscoverCaseStudyImg})`,
      duration: "12 months",
      teamSize: "8 professionals",
      challenge: "Building a full-stack recipe management platform that handles thousands of recipes with rich media content, provides personalized recommendations, and offers seamless meal planning while maintaining fast performance.",
      solution: "We architected a scalable backend using Node.js and MongoDB for efficient recipe storage and retrieval, paired with a Flutter frontend using GetX for state management and Dio for optimized API calls with caching strategies.",
      results: [
        "10,000+ recipes in database",
        "Reduced API response time by 70%",
        "85% user retention rate",
        "Featured in App Store's 'Apps We Love'"
      ],
      features: [
        "Smart recipe search with filters",
        "Personalized meal planning",
        "Shopping list generation",
        "Nutritional information tracking",
        "Social recipe sharing",
        "Offline recipe access"
      ],
      testimonials: [
        {
          quote: "As a busy professional, this app helps me organize my cooking life. The shopping list feature saves me hours every week.",
          author: "Aakash Bansal",
          role: "Software Engineer",
          initials: "DK"
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
