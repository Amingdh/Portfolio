import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Software Developer Intern – Payment Platform & Frontend",
        company: "NavInspireAI",
        period: "06/2025 – 10/2025",
        location: "Tunis, Tunisia",
        description:
            "Contributed to the development of a payment platform and frontend interfaces within an AI-driven product.",
        achievements: [
            "Designed and implemented frontend architecture and wrote MCP code.",
            "Developed a mobile application using Flutter.",
            "Collaborated with cross-functional teams to define technical requirements.",
            "Implemented RESTful APIs to enhance platform functionality and integrations.",
            "Stack: Flutter, FastAPI, Next.js, MCP, Git, AI tools.",
        ],
    },
    {
        id: 2,
        role: "AI & Full-Stack Developer Intern – ISO 9001 Automation",
        company: "Coconsult",
        period: "01/2025 – 06/2025",
        location: "Paris, France (Remote)",
        description:
            "Developed an AI-powered web platform to automate Quality Management System (QMS) processes compliant with ISO 9001:2015.",
        achievements: [
            "Integrated AI-powered modules (OCR & semantic analysis) for automated document processing and non-conformity detection.",
            "Automated reporting and notification systems to improve compliance tracking and monitoring.",
            "Conducted testing and optimization to ensure performance, reliability, and accuracy of AI modules.",
            "Stack: Angular, Spring Boot, MongoDB, REST APIs, Ollama, Git.",
        ],
    },
    {
        id: 3,
        role: "Full-Stack Developer Intern – E-Learning Platform",
        company: "Sumitomo Electric Bordnetze",
        period: "06/2024 – 09/2024",
        location: "Jendouba, Tunisia",
        description:
            "Developed an e-learning web application for course management and academic performance tracking.",
        achievements: [
            "Designed intuitive and responsive UI components aligned with brand guidelines.",
            "Integrated third-party APIs to enhance functionality and user experience.",
            "Contributed to backend and frontend development within a scalable web architecture.",
            "Stack: Angular, Spring Boot, REST APIs, SCSS, TypeScript, Java, MySQL, Git.",
        ],
    },
];

export const ExperienceSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl" ref={containerRef}>
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12 pb-12">
                    {/* Gradient Light effect on the line */}
                    <motion.div
                        className="absolute top-0 left-[-2px] w-[4px] h-full bg-primary origin-top shadow-[0_0_10px_2px_rgba(139,92,246,0.5)]"
                        style={{ scaleY: scrollYProgress }}
                    />

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot with Pulse */}
                            <div className="absolute -left-[10px] top-6 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(139,92,246,0.6)] z-10 transition-transform duration-300 group-hover:scale-125" />

                            <div className="bg-card/50 backdrop-blur-md border border-primary/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 transform group-hover:translate-x-2">
                                {/* Card Header */}
                                <div className="bg-secondary/40 p-6 md:p-8 border-b border-primary/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-primary font-medium mt-1">
                                            {exp.company}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 text-sm font-medium text-muted-foreground/80 md:text-right shrink-0">
                                        <div className="flex items-center gap-2 md:justify-end bg-background/40 px-3 py-1 rounded-full border border-white/5">
                                            <Calendar size={14} className="text-primary" />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-2 md:justify-end bg-background/40 px-3 py-1 rounded-full border border-white/5">
                                            <MapPin size={14} className="text-primary" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 md:p-8">
                                    <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="space-y-6">
                                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/80">
                                            <span className="w-8 h-[1px] bg-primary/50"></span>
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-muted-foreground text-sm group/item hover:text-foreground transition-colors"
                                                >
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(139,92,246,1)] transition-all shrink-0" />
                                                    <span className="leading-relaxed">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
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
