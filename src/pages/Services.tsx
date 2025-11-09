import { Smartphone, Globe, Cloud, Database, Cpu, Lock } from "lucide-react";
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
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to ensure your applications perform at their best.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data Warehousing", "BI Dashboards", "Machine Learning", "Data Pipeline"],
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to streamline operations and enhance decision-making.",
      features: ["Process Automation", "AI Integration", "Chatbots", "Predictive Analytics"],
    },
    {
      icon: Lock,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "GDPR Compliance", "Incident Response"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprehensive software solutions tailored to your business needs. We offer end-to-end services 
              from concept to deployment and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
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
