import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS3/Tailwind", level: 95 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 md:p-8 card-shadow hover:card-shadow-lg transition-all duration-300 bg-card animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-scale-in"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind", "Node.js", "Git"].map(
            (tech, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg text-center transform hover:scale-105 transition-all duration-300 card-shadow hover:card-shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-base md:text-lg font-semibold text-foreground">
                  {tech}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
