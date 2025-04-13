import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleComponent from './ParticleComponent';

const Index = () => {
  const sectionRefs = {
    story: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    console.log("Section Refs:", sectionRefs);
  }, [sectionRefs]);

  return (
    <div className="bg-black text-white">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <ParticleComponent />
        <div className="z-10 relative text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-glow">
            Hello, I'm <span className="text-gradient">Alex.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-80">
            I'm a Full-Stack Developer passionate about creating innovative solutions.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
              Explore My Work
            </Button>
          </div>
        </div>
      </section>

      <section id="story" ref={sectionRefs.story} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">My Story</h2>
          <p className="text-lg opacity-80">
            Driven by a lifelong fascination with technology, I embarked on my journey into the world of
            software development. Starting with basic HTML and CSS, I quickly became captivated by the
            endless possibilities of code.
          </p>
        </div>
      </section>

      <Skills />

      <Projects />

      <About />

      <Contact />

      <Footer />
    </div>
  );
};

export default Index;
