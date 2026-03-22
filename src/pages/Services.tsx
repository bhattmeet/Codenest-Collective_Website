import { Smartphone, Globe, Palette, Server, Wrench, ArrowRight, CheckCircle, Lightbulb, Pencil, Code2, TestTube, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  useScrollReveal();
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Build powerful, responsive web applications that scale with your business. From landing pages to complex enterprise platforms, we create web solutions that deliver results.",
      benefits: [
        "Responsive design that works seamlessly on all devices",
        "SEO-optimized architecture for better visibility",
        "Lightning-fast performance and load times"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps (iOS/Android/Flutter)",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences. We build iOS, Android, and Flutter apps that your users will love.",
      benefits: [
        "Native iOS (Swift) and Android (Kotlin) development",
        "Cross-platform Flutter apps for faster deployment",
        "App Store and Play Store optimization"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines beautiful aesthetics with intuitive functionality. We create interfaces that delight users and drive engagement.",
      benefits: [
        "User research and persona development",
        "Interactive prototypes and design systems",
        "Usability testing and iterative improvements"
      ]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description: "Robust, scalable backend systems and RESTful APIs built with Node.js, Express, MongoDB, and Firebase. Secure, reliable infrastructure that powers your applications.",
      benefits: [
        "RESTful API architecture with comprehensive documentation",
        "Secure authentication and authorization systems",
        "Database design and optimization (MongoDB, Firebase)"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly. We're here for you long after launch.",
      benefits: [
        "Regular updates and security patches",
        "Performance monitoring and optimization",
        "24/7 technical support and bug fixes"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Services - End-to-End Software Solutions"
        description="Comprehensive software development services: Web Development, Mobile Apps (iOS/Android/Flutter), UI/UX Design, Backend & APIs, and Maintenance & Support. Expert team delivering custom solutions."
        path="/services"
        keywords="web development, mobile app development, flutter, kotlin, iOS, android, UI/UX design, backend APIs, Node.js, Express, MongoDB, Firebase"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="section-title text-3xl md:text-4xl font-bold mb-6 text-white">
            End-to-End Software Solutions
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            From concept to deployment and beyond, we provide comprehensive development services that transform your ideas into powerful digital products.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`card-glass ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} group border-primary/20 transition-all duration-300`}
              >
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 group-hover:shadow-soft group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-primary group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90 gap-2 shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300 w-full">
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Compact Design */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              A proven 5-step methodology that ensures success
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Step 1 - Discovery */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Lightbulb className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
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
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 2 - Design */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/10 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Pencil className="w-8 h-8 text-cyan-600 group-hover:animate-pulse" />
                      </div>
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
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 3 - Develop */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Code2 className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        3
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-primary">Develop</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Building with modern tech and best practices
                    </p>
                  </CardContent>
                </Card>
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 4 - Test */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/10 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <TestTube className="w-8 h-8 text-cyan-600 group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        4
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-cyan-600">Test</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Ensuring quality across all platforms
                    </p>
                  </CardContent>
                </Card>
                <div className="hidden lg:flex absolute top-1/2 left-[calc(100%+0.75rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Step 5 - Launch */}
              <div className="group relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all hover:shadow-soft-lg hover:-translate-y-2 duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Rocket className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-soft group-hover:scale-125 transition-transform duration-300">
                        5
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-primary">Launch</h3>
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">
              Common questions about our services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                Project timelines vary based on complexity and scope. A simple mobile app typically takes 2-3 months,
                while a complex web application with backend can take 4-6 months. We provide detailed timelines
                during the discovery phase after understanding your requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base">
                What technologies do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                We specialize in modern tech stacks including React, Next.js, Node.js, Flutter, Kotlin (Android),
                Swift (iOS), MongoDB, Firebase, and more. We choose the best technology based on your project
                requirements and long-term goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base">
                Do you provide post-launch support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                Yes! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring,
                and feature enhancements. We provide different support packages to fit your needs and budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base">
                How do you ensure code quality?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                We follow industry best practices including code reviews, automated testing, continuous integration,
                and adherence to coding standards. Every project goes through rigorous quality assurance before deployment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base">
                Can you work with my existing codebase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                Absolutely! We have experience working with existing codebases. We can review, refactor, add features,
                or help migrate to newer technologies while maintaining stability and minimizing downtime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base">
                What is your pricing model?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers.
                The best model depends on your project type and requirements. Contact us for a detailed quote
                tailored to your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-lg md:text-xl lg:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let's discuss your project and how we can help bring it to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5088FA] px-6 md:px-8 py-4 md:py-6">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
