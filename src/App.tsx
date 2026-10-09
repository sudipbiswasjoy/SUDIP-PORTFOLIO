import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpecializationSection } from './components/SpecializationSection';
import { ArchitectureLab } from './components/ArchitectureLab';
import { ProjectsSection } from './components/ProjectsSection';
import { ServiceRatesSection } from './components/ServiceRatesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InteractiveSqlLab } from './components/InteractiveSqlLab';
import { CapacityCalculator } from './components/CapacityCalculator';
import { CareerSection } from './components/CareerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CareerVerificationModal } from './components/CareerVerificationModal';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [selectedServiceScope, setSelectedServiceScope] = useState<string>('');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (title: string, rate: string) => {
    setSelectedServiceScope(`${title} (${rate})`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenVerification={() => setIsVerificationModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenVerification={() => setIsVerificationModalOpen(true)}
          onOpenContact={scrollToContact}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 2. About Me Section (Bio, 7+ years experience, key skills, headshot) */}
        <AboutSection
          onOpenVerification={() => setIsVerificationModalOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 3. Core Specialization & Database Matrix */}
        <SpecializationSection />

        {/* 4. Interactive Architecture Lab (Live topology & Failover simulation) */}
        <ArchitectureLab />

        {/* 5. Client Projects & Case Studies (3-5 projects with tech, description, links) */}
        <ProjectsSection
          onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
          onOpenContact={scrollToContact}
        />

        {/* 6. Transparent Consulting Rates & Engagement Estimator */}
        <ServiceRatesSection onSelectService={handleSelectService} />

        {/* 7. Client Endorsements & Testimonials (Client name, company, quote, metrics) */}
        <TestimonialsSection />

        {/* 8. Interactive SQL Profiling & Benchmark Lab */}
        <InteractiveSqlLab />

        {/* 9. Capacity Sizing & IOPS Calculator */}
        <CapacityCalculator onOpenContact={scrollToContact} />

        {/* 10. Career History, HCLTech Verification & Credentials */}
        <CareerSection
          onOpenVerification={() => setIsVerificationModalOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 11. Contact & Advisory Inquiry Section */}
        <ContactSection selectedScope={selectedServiceScope} />
      </main>

      {/* Footer */}
      <Footer
        onOpenVerification={() => setIsVerificationModalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Modals */}
      <CareerVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        onOpenContact={scrollToContact}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onOpenVerification={() => {
          setIsResumeModalOpen(false);
          setIsVerificationModalOpen(true);
        }}
      />

      <CaseStudyModal
        caseStudyId={activeCaseStudyId}
        onClose={() => setActiveCaseStudyId(null)}
        onOpenContact={() => {
          setActiveCaseStudyId(null);
          scrollToContact();
        }}
      />
    </div>
  );
}
