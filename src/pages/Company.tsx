import { Users, TrendingUp, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Company = () => {
  const stats = [
    { icon: Users, value: "10+", label: "Team Members" },
    { icon: TrendingUp, value: "5+", label: "Projects Completed" },
    { icon: Award, value: "1+", label: "Industry Awards" },
    { icon: Globe, value: "3+", label: "Countries Served" },
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", expertise: "Business Strategy" },
    { name: "Michael Chen", role: "CTO", expertise: "Software Architecture" },
    { name: "Emily Rodriguez", role: "Head of Design", expertise: "UX/UI Design" },
    { name: "David Kim", role: "VP of Engineering", expertise: "Full Stack Development" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Our Company</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Learn more about Codenest Collective Technologies, our journey, and the people behind our success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Team
          <div className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Leadership Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          */}

          {/* Company Culture */}
          <div className="bg-muted/30 rounded-lg p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Culture</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-muted-foreground">
                  We encourage experimentation and creative problem-solving, staying at the forefront of technology trends.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Collaborative Environment</h3>
                <p className="text-muted-foreground">
                  Our open and inclusive culture promotes teamwork, knowledge sharing, and mutual respect.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-muted-foreground">
                  We believe in flexible work arrangements and supporting our team's well-being and personal growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We invest in our team's development through training, conferences, and certification programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
