import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Toaster } from "../components/ui/toaster";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
            <HomeSection/>
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <PublicationsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Tosater */}
        <Toaster />
    </div>

    );
};