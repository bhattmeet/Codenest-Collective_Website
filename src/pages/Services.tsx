import { Smartphone, Globe, Cloud, Database, Cpu, Lock, Sparkles, Palette, Code2, TestTube, Megaphone, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices. From simple websites to complex enterprise platforms.",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "CMS Integration"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to ensure your applications perform at their best.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data Warehousing", "BI Dashboards", "Machine Learning", "Data Pipeline"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to streamline operations and enhance decision-making.",
      features: ["Process Automation", "AI Integration", "Chatbots", "Predictive Analytics"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Lock,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "GDPR Compliance", "Incident Response"],
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design and user research.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      icon: Code2,
      title: "API Development",
      description: "Robust, scalable APIs that power your applications with RESTful and GraphQL architectures.",
      features: ["REST & GraphQL APIs", "API Documentation", "Microservices", "API Security"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description: "Comprehensive testing services to ensure your software is reliable, performant, and bug-free.",
      features: ["Automated Testing", "Manual Testing", "Performance Testing", "Test Strategy"],
      gradient: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to increase your online presence and drive measurable results.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics & Reporting"],
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Headphones,
      title: "IT Consulting",
      description: "Expert technology consulting to guide your digital transformation and optimize your IT strategy.",
      features: ["Technology Strategy", "Architecture Review", "Process Optimization", "Technology Training"],
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: Sparkles,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and dedicated support to keep your applications running smoothly 24/7.",
      features: ["24/7 Support", "Bug Fixes", "Performance Monitoring", "Regular Updates"],
      gradient: "from-primary/20 to-accent/20"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">What We Offer</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive <span className="text-primary font-semibold">software solutions</span> tailored to your business needs. We offer end-to-end services from concept to deployment and beyond.
            </p>
          </div>

          {/* Services Grid - Modern Design */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative border-primary/10 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <CardHeader className="relative z-10">
                  {/* Icon with Glow Effect */}
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300"></div>
                    <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 inline-flex">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0" />
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
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

export default Services;
