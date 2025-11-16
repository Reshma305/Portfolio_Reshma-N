import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following industry best practices.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces with attention to user experience.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and responsiveness across all devices.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            I'm a college student passionate about UI/UX design and full-stack development. 
            I specialize in creating intuitive user interfaces and building powerful backend solutions using Python and Node.js.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 card-shadow hover:card-shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 lg:p-10 card-shadow bg-gradient-to-br from-card to-muted border-border animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a college student, I combine my academic learning with hands-on development experience. 
                My passion for design and development drives me to create user-centric solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I work across the full stack - from designing intuitive UI/UX interfaces to building robust backends 
                with Python and Node.js. I'm constantly exploring new technologies and best practices to grow my skills.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">UI/UX</div>
                <div className="text-sm text-muted-foreground">Design</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-accent mb-2">Python</div>
                <div className="text-sm text-muted-foreground">Backend</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">Node.js</div>
                <div className="text-sm text-muted-foreground">Backend</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-accent mb-2">Full Stack</div>
                <div className="text-sm text-muted-foreground">Development</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
