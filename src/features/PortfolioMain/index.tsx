import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ];

      const currentSection = sections.find((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        scrollY={scrollY}
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
