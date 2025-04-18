'use client';

import dynamic from 'next/dynamic';
import AnimatedSection from '../components/About/AnimatedSection';
import ProjectGallery from '../components/About/ProjectGallery';
import AboutContent from '../components/About/AboutContent';

// This now works because the whole page is a client component
const RotatingGlobe = dynamic(() => import('../components/About/RotatingGlobe'), { ssr: false });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-10 py-10">
      <AnimatedSection>
        <AboutContent />
      </AnimatedSection>

      <AnimatedSection>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">Global Reach 🌍</h2>
          <RotatingGlobe />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-300">Highlighted Projects 🧠</h2>
          <ProjectGallery />
        </div>
      </AnimatedSection>
    </main>
  );
}
