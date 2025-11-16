import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive weather data visualization.",
      tags: ["HTML", "CSS", "JavaScript", "API Integration"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    },
    {
      title: "Slidob Dashboard for Litter Dispenser",
      description: "IoT dashboard for monitoring and controlling smart litter dispenser systems with real-time data tracking.",
      tags: ["Python", "IoT", "Dashboard", "Backend"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "eCommerce Website",
      description: "Full-featured online shopping platform with product catalog, shopping cart, and user authentication.",
      tags: ["HTML", "CSS", "Node.js", "Full Stack"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's a selection of my recent work. Each project represents a unique challenge 
            and showcases different aspects of my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-shadow hover:card-shadow-lg transition-all duration-300 group bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ transitionDelay: "50ms" }}>
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
