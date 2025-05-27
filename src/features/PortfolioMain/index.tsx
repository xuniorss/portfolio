import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { useRef, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "@/components/Footer";

export const PortfolioMain = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    const refs: { [key: string]: React.RefObject<HTMLElement | null> } = {
      home: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };

    refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <Cursor mousePosition={mousePosition} activeSection={activeSection} />
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroSection
        heroRef={heroRef}
        mousePosition={mousePosition}
        scrollToSection={scrollToSection}
      />

      <AboutSection aboutRef={aboutRef} />

      <SkillsSection skillsRef={skillsRef} />

      <ProjectsSection
        projectsRef={projectsRef}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />

      <ContactSection contactRef={contactRef} />

      <Footer />
    </div>
  );
};
