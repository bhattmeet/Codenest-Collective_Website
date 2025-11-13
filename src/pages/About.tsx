import { Target, Eye, Award, Sparkles, Users, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">About Us</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Codenest Collective
              </span>
              <br />
              <span className="text-foreground">Technologies</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a team of <span className="text-primary font-semibold">passionate developers</span>, designers, and strategists committed to delivering exceptional software solutions that drive business success.
            </p>
          </div>

          {/* Mission, Vision, Values - Modern Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To empower businesses through innovative technology solutions that drive growth and efficiency.",
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be the leading software partner for businesses worldwide, setting new standards in quality.",
                gradient: "from-accent/20 to-primary/20"
              },
              {
                icon: Award,
                title: "Our Values",
                description: "Excellence, integrity, innovation, and customer satisfaction guide everything we do.",
                gradient: "from-primary/20 to-accent/10"
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="group relative border-primary/10 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <CardContent className="pt-8 pb-6 text-center relative z-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-2xl blur-xl"></div>
                    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Story Section - Modern Design */}
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-gradient-to-br from-primary/5 via-background/50 to-accent/5 border border-primary/10 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="relative pl-6 border-l-2 border-primary/30">
                Codenest Collective Technologies is a <span className="text-foreground font-semibold">modern software development company</span> founded in 2025, built on remote collaboration and distributed expertise. We are a collective of talented developers working remotely across multiple technologies—<span className="text-primary font-medium">Android, iOS, Flutter, Web, Backend, Cloud, and UI/UX</span>—united by a commitment to delivering enterprise-grade solutions with agility and innovation.
              </p>
              <p className="relative pl-6 border-l-2 border-accent/30">
                As a fresh start company, we combine deep technical expertise with the flexibility of remote work. Our distributed team brings diverse perspectives and focused dedication to every project, ensuring <span className="text-foreground font-semibold">quality and reliability</span> that clients can trust across the full software development lifecycle.
              </p>
              <p className="relative pl-6 border-l-2 border-primary/30">
                We believe great software should be accessible, maintainable, and built with modern best practices. We're not just building software—we're <span className="text-accent font-semibold">building lasting partnerships</span>, proving that a passionate group of remote developers can deliver world-class results regardless of location.
              </p>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: Users, label: "Remote First", value: "100%" },
                { icon: Globe, label: "Global Reach", value: "3+ Countries" },
                { icon: Award, label: "Quality Focus", value: "Top Tier" },
                { icon: Heart, label: "Client Satisfaction", value: "100%" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind Codenest Collective Technologies' success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Meet Bhatt",
                  role: "CEO & Founder",
                  bio: "Visionary leader with 15+ years in software development and business strategy.",
                  initials: "AC",
                  color: "from-primary to-accent"
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  bio: "Tech innovator specializing in cloud architecture and scalable solutions.",
                  initials: "SJ",
                  color: "from-accent to-primary"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Design",
                  bio: "Creative director crafting intuitive and beautiful user experiences.",
                  initials: "MR",
                  color: "from-primary/80 to-accent/80"
                },
                {
                  name: "Emily Watson",
                  role: "VP of Engineering",
                  bio: "Engineering expert driving technical excellence and team innovation.",
                  initials: "EW",
                  color: "from-accent/80 to-primary/80"
                },
                {
                  name: "David Kim",
                  role: "Lead Developer",
                  bio: "Full-stack developer passionate about clean code and best practices.",
                  initials: "DK",
                  color: "from-primary/70 to-accent/70"
                },
                {
                  name: "Lisa Martinez",
                  role: "Product Manager",
                  bio: "Strategic thinker ensuring products meet user needs and business goals.",
                  initials: "LM",
                  color: "from-accent/70 to-primary/70"
                },
                {
                  name: "James Wilson",
                  role: "DevOps Lead",
                  bio: "Infrastructure wizard optimizing deployments and system reliability.",
                  initials: "JW",
                  color: "from-primary/60 to-accent/60"
                },
                {
                  name: "Rachel Green",
                  role: "UX Researcher",
                  bio: "User advocate conducting research to inform design decisions.",
                  initials: "RG",
                  color: "from-accent/60 to-primary/60"
                }
              ].map((member, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="pt-6 text-center">
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
