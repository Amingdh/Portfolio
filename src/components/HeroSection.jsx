import Typewriter from "typewriter-effect";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-purple-500 blur-lg opacity-50 animate-pulse-subtle"></div>
              <img
                src="/profile.png"
                alt="Mohamed Amin Gadhgadhi"
                className="relative w-full h-full object-cover rounded-full border-2 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block mb-2">
              <span className="text-primary">
                Mohamed Amin Gadhgadhi
              </span>
            </span>
            <div className="text-2xl md:text-4xl text-muted-foreground mt-4 h-[60px]">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer & Systems Designer",
                    "Certified Software Engineer & AI Specialist",
                    "DevOps & Automation Specialist",
                    "Innovation-Driven Problem Solver"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Final-year engineering student with 3+ years of experience in Fullstack development, Applied AI,Devops and IT support. Passionate about building intelligent features, scalable systems, and real-world solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
