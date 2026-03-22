import { ArrowRight, Code, Smartphone, Palette, Server, CheckCircle, MessageSquare, ChevronDown, Star, Quote, Lightbulb, Pencil, Wrench, Rocket, BookOpen, Clock, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TechStack from "@/components/TechStack";
import spaceExplorationImg from "@/assets/space_xploration_project.png";
import touchBridgeImg from "@/assets/touch_bridge_project.png";
import dishDiscoverImg from "@/assets/dish_discover_project.png";
import { useEffect, useState } from "react";
import { allProjects } from "./Projects";
import { companyStats, clientLogos } from "@/data/companyData";
import { featuredResources } from "@/data/resourcesData";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Home = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for scroll indicator fade
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const stats = [
    { value: allProjects.length, suffix: "+", label: "Projects Delivered" },
    { value: companyStats.clientSatisfaction, suffix: "%", label: "Client Satisfaction" },
    { value: companyStats.yearsExperience, suffix: "+", label: "Years Experience" },
  ];

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      company: "TechStart",
      content: "Codenest Collective transformed our vision into a stunning, functional app. Their attention to detail and technical expertise exceeded our expectations. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, FinanceFlow",
      company: "FinanceFlow",
      content: "Working with Codenest was a game-changer for our project. They delivered on time, communicated clearly, and the code quality was exceptional. Will definitely work with them again.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthHub",
      company: "HealthHub",
      content: "From concept to launch, the team at Codenest guided us every step of the way. Their development process is transparent, efficient, and results-driven. Couldn't ask for better partners.",
      rating: 5,
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

      {/* Hero Section - Animated Mesh Gradient */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BDA] to-[#4874E8]">
          {/* Gradient Orbs - Slower, elegant movement */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5088FA] rounded-full mix-blend-multiply filter blur-[128px] opacity-70"
               style={{ animation: 'blob 12s ease-in-out infinite' }}></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#42A5F5] rounded-full mix-blend-multiply filter blur-[128px] opacity-70"
               style={{ animation: 'blob 12s ease-in-out infinite 3s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-[#5088FA] rounded-full mix-blend-multiply filter blur-[128px] opacity-70"
               style={{ animation: 'blob 12s ease-in-out infinite 6s' }}></div>

        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circle 1 */}
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#5088FA]/10 animate-float-slow"></div>
          {/* Diamond 1 */}
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#42A5F5]/10 rotate-45 rounded-lg animate-blob-large"></div>
          {/* Circle 2 */}
          <div className="absolute bottom-32 left-1/4 w-32 h-32 rounded-full bg-[#5088FA]/10 animate-blob animation-delay-2000"></div>
          {/* Diamond 2 */}
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-[#42A5F5]/10 rotate-45 rounded-lg animate-float-slow animation-delay-1000"></div>
          {/* Circle 3 */}
          <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-[#5088FA]/15 animate-float-slow animation-delay-3000"></div>
          {/* Diamond 3 */}
          <div className="absolute top-1/2 left-16 w-12 h-12 bg-[#42A5F5]/15 rotate-45 rounded-lg animate-blob-large animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 text-center animate-fade-in relative z-10">
          {/* Main Heading with Animated Gradient */}
          <h1 className="hero-title font-bold mb-6 leading-[1.1] pb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'gradient-shift 8s ease infinite' }}>
            Custom Web & Mobile Apps<br />for Startups & Businesses
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-sm md:text-base text-white/95 leading-relaxed">
              We design, build, and scale digital products that drive results
            </p>
          </div>

          {/* CTA Buttons with enhanced shadows */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="gap-2 px-6 md:px-8 py-4 md:py-6 bg-[#5088FA] hover:bg-[#4078EA] text-white shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all duration-300">
                Book Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" className="gap-2 px-6 md:px-8 py-4 md:py-6 border-2 border-white bg-white text-[#5088FA] hover:bg-transparent hover:text-white hover:border-white shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                See Our Work
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {/* Stats Counter */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300"
          style={{ opacity: scrollY > 100 ? 0 : 1 }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce-slow">
            <span className="text-white/70 text-sm">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group border-primary/20 hover:border-primary transition-all hover:shadow-soft-xl hover:-translate-y-2 duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 inline-block group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-3 text-primary group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Showcasing our recent work and successful client collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Card key={project.title} className={`card-glass hover-lift group overflow-hidden transition-all duration-300 border-primary/20 hover:border-primary stagger-${idx + 1}`}>
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardContent className="pt-6">
                  <h3 className="text-base font-bold mb-2 text-primary group-hover:text-blue-600 transition-colors">{project.title}</h3>

                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mb-3">
                    {project.category}
                  </span>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} className="tech-badge">
                        {tech}
                      </Badge>
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

      {/* Process / How We Work Section - Compact Design */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Process</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    {/* Animated Icon */}
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Lightbulb className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        1
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-primary">Discovery</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Understanding your goals and requirements
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow connector - desktop only */}
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    {/* Animated Icon */}
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Pencil className="w-8 h-8 text-cyan-600 group-hover:animate-pulse" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        2
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-cyan-600">Design</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Crafting beautiful, intuitive interfaces
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow connector - desktop only */}
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    {/* Animated Icon */}
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Wrench className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        3
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-primary">Development</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Building with modern tech and best practices
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow connector - desktop only */}
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    {/* Animated Icon */}
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Rocket className="w-8 h-8 text-cyan-600 group-hover:animate-pulse" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        4
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-cyan-600">Launch</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Deploying and supporting your success
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Why Choose Us</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Partner with a reliable, senior-level development team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/20 transition-all hover:shadow-soft bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2 text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">What Our Clients Say</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden border-primary/20 hover:border-primary/20 transition-all hover:shadow-soft-lg hover:-translate-y-1 duration-300 bg-white">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Avatar Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section - Client Logos - Hidden for now */}
      {/* <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Trusted By</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who trust us with their digital products
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-soft group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white rounded-lg border border-primary/10">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xl font-bold text-primary">{companyStats.clientSatisfaction}%</p>
                <p className="text-xs text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-primary/10">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xl font-bold text-primary">{allProjects.length}+</p>
                <p className="text-xs text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-primary/10">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xl font-bold text-primary">{companyStats.yearsExperience}+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-primary/10">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xl font-bold text-primary">{companyStats.clientsWorldwide}+</p>
                <p className="text-xs text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* Featured Resources Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Latest Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, guides, and best practices from our team of experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredResources.map((resource) => (
              <Card
                key={resource.id}
                className="border-primary/20 hover:border-primary/20 transition-all duration-300 cursor-pointer group hover:shadow-soft-lg hover:-translate-y-1"
                onClick={() => navigate('/resource-detail', { state: resource })}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="capitalize text-xs">
                      {resource.type.replace("-", " ")}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {resource.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-primary/10 pt-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{resource.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/resources">
              <Button size="lg" className="gap-2">
                View All Resources
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-lg mb-8 opacity-90">
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
