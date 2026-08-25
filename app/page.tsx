import { ProfileHeader } from '@/components/profile-header';
import { AboutSection } from '@/components/about-section';
import { StackSection } from '@/components/stack-section';
import { ProjectsSection } from '@/components/projects-section';
import { AchievementsSection } from '@/components/achievements-section';
import { ExperienceSection } from '@/components/experience-section';
import { BlogSection } from '@/components/blog-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default function Page() {
  return (
    <main className="max-w-screen overflow-x-clip px-2 py-8 sm:py-16">
      <div className="mx-auto md:max-w-6xl">
        <ScrollReveal delay={0.1}>
          <ProfileHeader />
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <StackSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        
        <AchievementsSection />

        <ScrollReveal>
          <BlogSection />
        </ScrollReveal>

        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </main>
  );
}