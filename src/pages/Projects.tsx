import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  
  const projects = [
    {
      title: "Space Exploration",
      category: "Mobile Development",
      description: "Educational Android app for space exploration built with Kotlin & Jetpack Compose. Features comprehensive data on planets, moons, galaxies with multimedia content.",
      tech: ["Android", "Jetpack Compose", "Firebase"],
      image: `url(${spaceExplorationProjectImg})`,
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
      category: "Mobile Development",
      description: "Enables reading and writing of NFC tags, displaying tag details, maintaining scan history, and offering a smooth UI/UX experience with light and dark themes.",
      tech: ["Flutter", "Android", "iOS", "NFC", "Firebase"],
      image: `url(${touchBridgeProjectImg})`,
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
      category: "Full Stack Development",
      description: "DishDiscover helps you find, organize, and save recipes with ease. Plan meals efficiently, search by categories, and personalize your profile for a seamless cooking experience. Keep your favorite recipes handy and enjoy smart meal planning made simple.",
      tech: ["Flutter", "Node.js", "GetX", "Dio", "MongoDB"],
      image: `url(${dishDiscoverProjectImg})`,
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Projects - Portfolio & Case Studies"
        description="Explore our portfolio of successful software projects including mobile apps, web applications, and enterprise solutions. View detailed case studies showcasing our expertise in custom development."
        path="/projects"
        keywords="software portfolio, case studies, mobile apps, web applications, project showcase, development projects"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Our Work
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of <span className="text-primary font-semibold">successful projects</span> across various industries and technologies.
            </p>
          </div>

          {/* Projects Grid - Modern Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative border-primary/10 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                {/* Project Image with Overlay */}
                <div className="relative overflow-hidden">
                  {project.image.startsWith('url(') ? (
                    <img
                      src={project.image.replace('url(', '').replace(')', '')}
                      alt={project.title}
                      className="h-56 w-full object-contain bg-gradient-to-br from-muted/50 to-muted/30 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="h-56 w-full group-hover:scale-110 transition-transform duration-500"
                      style={{ background: project.image }}
                    />
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardHeader className="relative z-10">
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" variant="secondary">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="gap-2 w-full group/btn border border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
                    onClick={() => navigate("/case-study", { state: { project } })}
                  >
                    View Case Study
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Bottom Gradient Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
