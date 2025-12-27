import { Smartphone, Globe, Palette, Server, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Services = () => {
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

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and project requirements to create a solid foundation."
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create wireframes, mockups, and prototypes that bring your vision to life with user-centered design principles."
    },
    {
      number: "03",
      title: "Develop",
      description: "Our developers build your application using modern technologies, following best practices and writing clean, maintainable code."
    },
    {
      number: "04",
      title: "Test",
      description: "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all devices and platforms."
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "We deploy your application and provide ongoing support, maintenance, and updates to ensure continued success."
    }
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            End-to-End Software Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            From concept to deployment and beyond, we provide comprehensive development services that transform your ideas into powerful digital products.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-primary/20 hover:border-primary overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors">
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
                    <Button className="bg-primary hover:bg-primary/90 gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full">
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

      {/* Process Timeline Section */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              A proven 5-step methodology that ensures quality, efficiency, and success
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-background shadow-lg">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-primary">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
