import { useState, useEffect } from "react";
import { BookOpen, FileText, Video, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { allResources, resourceCategories } from "@/data/resourcesData";
import ResourceCardSkeleton from "@/components/ResourceCardSkeleton";

const Resources = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Map icon names to actual icon components
  const iconMap: { [key: string]: any } = {
    BookOpen,
    FileText,
    Video,
    Code
  };

  // Filter resources by category
  const filteredResources = selectedCategory === "All"
    ? allResources
    : allResources.filter(resource => resource.type === selectedCategory.toLowerCase().replace(" ", "-"));

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Resources - Blog, Guides & Case Studies"
        description="Explore insights, guides, and best practices from CodeNest Collective Technologies. Stay updated with the latest in software development, DevOps, cloud computing, and technology trends."
        path="/resources"
        keywords="software development blog, tech guides, case studies, coding tutorials, DevOps resources, cloud computing, API design"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#3B6FE6] to-[#5A8BF5] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="section-title text-4xl md:text-5xl font-bold mb-6 text-white">
            Resources & Insights
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Insights, guides, and best practices from our team of experts. Stay updated with the latest
            in software development and technology trends.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white border-y border-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {resourceCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-soft"
                    : "border-primary/20 text-primary hover:bg-primary/10 hover:border-primary"
                } transition-all hover:scale-105 duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Show 6 skeleton cards while loading
              Array(6).fill(0).map((_, index) => (
                <ResourceCardSkeleton key={index} />
              ))
            ) : (
              filteredResources.map((resource) => {
              const Icon = iconMap[resource.iconName];
              return (
              <div
                key={resource.id}
                className="cursor-pointer group"
                onClick={() => navigate('/resource-detail', { state: resource })}
              >
                <Card className="card-glass border-primary/20 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="capitalize text-xs">
                        {resource.type.replace("-", " ")}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{resource.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground border-t border-primary/10 pt-3">
                      <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{resource.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
            })
            )}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
