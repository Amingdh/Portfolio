import { Briefcase, Code, User, Brain, Smartphone, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Dynamic Full-Stack Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Final-year engineering student with extensive experience in crafting innovative web
              applications, mobile solutions, and back-end systems. I specialize in delivering efficient,
              scalable solutions across front-end and back-end technologies.
            </p>

            <p className="text-muted-foreground">
              Passionate about transforming ideas into impactful digital experiences through technical
              expertise and innovative approaches. I thrive in collaborative environments, employing
              creative problem-solving techniques to overcome challenges and drive success with
              cutting-edge industry practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Integration & Implementation</h4>
                  <p className="text-muted-foreground">
                    Specialized in integrating AI-powered solutions including OCR for document scanning,
                    semantic analysis for intelligent detection, and ML model implementation using Ollama and modern AI tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Expert in building complete web applications using Angular, React, Next.js for frontend,
                    and Spring Boot, .NET, Symfony for backend with REST API architecture and database management.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Development </h4>
                  <p className="text-muted-foreground">
                    Experienced in cross-platform mobile application development using Flutter and FlutterFlow, focusing on building scalable, user-friendly applications. Skilled in designing responsive UI components, and managing application state to deliver high-performance mobile solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
