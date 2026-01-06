import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Code, Server, Smartphone, Database, PenTool, Cloud, Terminal, Component, Globe, Cpu } from "lucide-react";

// Radar Chart Data (Top 8 High-Level Skills)
const topSkills = [
  { subject: "Angular", A: 90, fullMark: 100 },
  { subject: "Spring Boot", A: 88, fullMark: 100 },
  { subject: "AI/ML", A: 85, fullMark: 100 },
  { subject: "Flutter", A: 87, fullMark: 100 },
  { subject: "React.js", A: 88, fullMark: 100 },
  { subject: "Python", A: 85, fullMark: 100 },
  { subject: "Java", A: 88, fullMark: 100 },
  { subject: "DevOps", A: 85, fullMark: 100 },
];

// Categorized Skills Data for Card Layout
const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL", "PHP", "HTML/CSS"],
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    title: "Frameworks",
    icon: <Component className="w-6 h-6 text-purple-400" />,
    skills: ["Spring Boot", "Angular", "Next.js", "Flask", "FastAPI", "Flutter", ".NET", "Symfony"],
    color: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions"],
    color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    title: "Tools & AI",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: ["Git/GitHub", "REST APIs", "Ollama", "MCP", "AI/ML Integration"],
    color: "bg-green-500/10 border-green-500/20 text-green-400",
  },
  {
    title: "Databases & Other",
    icon: <Database className="w-6 h-6 text-orange-400" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
    color: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Radar Chart Section (High-Level Overview) */}
        <div className="mb-20 w-full h-[400px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={topSkills}>
              <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: "bold" }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skills"
                dataKey="A"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                fill="hsl(var(--primary))"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-center text-muted-foreground">
          Technical Expertise
        </h3>

        {/* Card Layout for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.color}`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border bg-background/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
