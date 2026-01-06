import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NavInspireAI - Full Stack Development",
    description: "Built AI-driven interfaces and a high-performance cross-platform mobile app for a secure payment orchestration platform.",
    image: "/projects/navinspireai.png",
    tags: ["Flutter", "FastAPI", "Next.js", "MCP", "AI Tools"],
    features: [
      "Architected High-Performance Flutter Mobile App",
      "Implemented Model Context Protocol (MCP) for AI Agents",
      "Seamless Multi-Gateway Payment Orchestration",
      "Real-time AI Personalization Engine",
    ],
    demoUrl: "#",
    githubUrl: "#",
    period: "",
    company: "NavInspireAI, Tunis"
  },
  {
    id: 2,
    title: "Quality Management System (ISO 9001:2015)",
    description: "Engineered an intelligent, ISO-compliant QMS platform automating complex workflows with advanced AI document analysis.",
    image: "/projects/qms-coconsult.png",
    tags: ["Angular", "Spring Boot", "MongoDB", "REST API", "Ollama", "AI"],
    features: [
      "AI-Powered Optical Character Recognition (OCR) Engine",
      "Semantic Analysis for Automated Audit Compliance",
      "Intelligent Non-Conformity Detection System",
      "Automated ISO 9001:2015 Workflow Pipelines",
    ],
    demoUrl: "#",
    githubUrl: "#",
    period: "",
    company: "Coconsult, Paris (Remote)"
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "Developed a scalable e-learning ecosystem featuring real-time academic tracking and intuitive course management dashboards.",
    image: "/projects/elearning.png",
    tags: ["Angular", "Spring Boot", "REST API", "TypeScript", "MySQL"],
    features: [
      "Interactive & Gamified Learning Modules",
      "Real-time Academic Performance Analytics",
      "Scalable Architecture for High-Volume Course Management",
      "Seamless Third-Party API & Data Integration",
    ],
    demoUrl: "#",
    githubUrl: "#",
    period: "",
    company: "Sumitomo Electric Bordnetze"
  },
  {
    id: 4,
    title: "TuniHire – AI-Powered Job Matching",
    description: "Revolutionized recruitment with a 'Tinder-style' AI platform featuring automated cover letters and real-time chat infrastructure.",
    image: "/projects/tunihire.png",
    tags: ["Next.js", "FastAPI", "Gemini AI", "Real-time Chat", "REST API"],
    features: [
      "Gemini AI-Powered Resume-Job Matching Engine",
      "Generative AI Cover Letter Automation",
      "Real-Time WebSocket Chat Infrastructure",
      "Intuitive 'Swipe-to-Apply' User Experience",
    ],
    demoUrl: "#",
    githubUrl: "#",
    period: "Personal Project",
    company: "TuniHire"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional experience and projects showcasing full-stack development expertise,
          AI implementation, and innovative solutions across web and mobile platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>

                <div className="text-xs text-primary mb-1 font-medium">
                  {project.company}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {project.period}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mt-auto mb-6 pt-4 border-t border-border/50">
                  <h4 className="text-sm font-semibold mb-3 text-foreground/90">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
