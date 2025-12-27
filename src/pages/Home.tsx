import { ArrowRight, Code, Smartphone, Palette, Server, CheckCircle, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TechStack from "@/components/TechStack";
import spaceExplorationImg from "@/assets/space_xploration_project.png";
import touchBridgeImg from "@/assets/touch_bridge_project.png";
import dishDiscoverImg from "@/assets/dish_discover_project.png";
import heroBg from "@/assets/hero-bg-new.jpg";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive, scalable web applications built with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS & Android apps plus cross-platform Flutter solutions for maximum reach.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with intuitive functionality.",
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description: "Robust, secure backend systems and RESTful APIs to power your applications.",
    },
  ];

  const whyUs = [
    { title: "On-time delivery", description: "We respect deadlines and deliver quality on schedule" },
    { title: "Clean code", description: "Maintainable, scalable code following industry standards" },
    { title: "Transparent communication", description: "Regular updates and clear project visibility" },
    { title: "Post-launch support", description: "Ongoing maintenance and technical assistance" },
  ];

  const featuredProjects = [
    {
      title: "Space Exploration",
      category: "Mobile Apps",
      industry: "Education",
      description: "Educational Android app for space exploration",
      tech: ["Android", "Jetpack Compose", "Firebase"],
      image: spaceExplorationImg
    },
    {
      title: "TouchBridge - NFC",
      category: "Mobile Apps",
      industry: "Healthcare",
      description: "Cross-platform NFC tag reading and writing application",
      tech: ["Flutter", "Android", "iOS"],
      image: touchBridgeImg
    },
    {
      title: "Dish Discover - Recipe App",
      category: "Fullstack",
      industry: "SaaS",
      description: "Recipe management platform with Flutter frontend and Node.js backend",
      tech: ["Flutter", "Node.js", "GetX"],
      image: dishDiscoverImg
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Codenest Collective Technologies - Build The Future"
        description="Codenest Collective Technologies creates innovative software solutions that transform businesses. Expert team delivering custom development, web applications, mobile apps, and enterprise software with agile methodology."
        path="/"
        keywords="software development, custom software, web development, mobile app development, enterprise software, Codenest Collective Technologies"
      />
      <Navigation />

      {/* Hero Section - Professional Background Image */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Blue Overlay - using #5088FA color family */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929]/80 via-[#1a2f4a]/75 to-[#0d1b2a]/80"></div>

        <div className="container mx-auto px-6 text-center animate-fade-in relative z-10">
          {/* Main Heading */}
          <h1 className="hero-title font-bold mb-6 leading-[1.1] pb-4 text-white">
            Custom Web & Mobile Apps<br />for Startups & Businesses
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-base md:text-lg text-white/95 leading-relaxed">
              We design, build, and scale digital products that drive results
            </p>
          </div>

          {/* CTA Buttons with enhanced shadows */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="gap-2 px-6 md:px-8 py-4 md:py-6 bg-[#5088FA] hover:bg-[#4078EA] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Book Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" className="gap-2 px-6 md:px-8 py-4 md:py-6 border-2 border-white bg-white text-[#5088FA] hover:bg-transparent hover:text-white hover:border-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                See Our Work
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group border-primary/20 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 inline-block group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Showcasing our recent work and successful client collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary hover:-translate-y-2 bg-white">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-cyan-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-blue-600 transition-colors">{project.title}</h3>

                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-3">
                    {project.category}
                  </span>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

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
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Why Us Section */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Why Choose Us</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Partner with a reliable, senior-level development team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with us to discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/918735940200?text=Hi,%20I'd%20like%20to%20discuss%20a%20software%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5088FA] px-6 md:px-8 py-4 md:py-6">
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
