import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { AchievementSection } from "../components/AchievementSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />

        <RevealOnScroll width="100%">
          <AboutSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <SkillsSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <ProjectsSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <AchievementSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <ExperienceSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <TestimonialsSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <ContactSection />
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
};
