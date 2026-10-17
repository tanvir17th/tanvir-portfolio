import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TestingWorkflow from '@/components/TestingWorkflow';
import Coursework from '@/components/Coursework';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-gray-300 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <TestingWorkflow />
        <Coursework />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
