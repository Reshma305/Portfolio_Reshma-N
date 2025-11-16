import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up">
            Hi, I'm Reshma N
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            M.Tech Integrated CSE Student | UI/UX Designer | Full Stack Developer
          </p>
          <p className="text-base sm:text-lg mb-8 md:mb-12 text-white/80 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Passionate about creating beautiful user experiences and building robust backend solutions with Python and Node.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white text-primary hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-white text-white hover:bg-white hover:text-primary transition-all transform hover:scale-105 px-8"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
