import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Codenest Collective Technologies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and strategists committed to delivering
              exceptional software solutions that drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses through innovative technology solutions that drive growth and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading software partner for businesses worldwide, setting new standards in quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, innovation, and customer satisfaction guide everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Codenest Collective Technologies is a modern software development company founded in 2025, built on remote collaboration and distributed expertise. We are a collective of talented developers working remotely across multiple technologies—Android, iOS, Flutter, Web, Backend, Cloud, and UI/UX—united by a commitment to delivering enterprise-grade solutions with agility and innovation.
              </p>
              <p>
                As a fresh start company, we combine deep technical expertise with the flexibility of remote work. Our distributed team brings diverse perspectives and focused dedication to every project, ensuring quality and reliability that clients can trust across the full software development lifecycle.
              </p>
              <p>
                We believe great software should be accessible, maintainable, and built with modern best practices. We're not just building software—we're building lasting partnerships, proving that a passionate group of remote developers can deliver world-class results regardless of location.
              </p>
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
