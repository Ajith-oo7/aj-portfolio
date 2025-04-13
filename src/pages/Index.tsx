
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import ParticleNetwork from '@/components/ParticleNetwork';

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
      <Header />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <ParticleNetwork />
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

      <section id="skills" ref={sectionRefs.skills} className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'Node.js', 'TypeScript', 'Python', 'Data Analysis', 'SQL', 'AWS', 'Docker'].map((skill) => (
              <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-neon-blue/20 transition-colors">
                <h3 className="font-bold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" ref={sectionRefs.projects} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-glow transition-all">
                <div className="aspect-video bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">A brief description of this amazing project and its features.</p>
                  <Button variant="outline" className="w-full">View Project</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" ref={sectionRefs.about} className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg opacity-80 mb-4">
              I am a passionate developer with a focus on creating elegant, efficient solutions to complex problems.
              My journey in technology began over 5 years ago, and I've been continuously learning and growing since.
            </p>
            <p className="text-lg opacity-80">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or enjoying the outdoors. I believe in the power of technology to transform and improve lives.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" ref={sectionRefs.contact} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-neon-blue focus:border-neon-blue"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-neon-blue focus:border-neon-blue"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-neon-blue focus:border-neon-blue"
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              <Button className="w-full bg-neon-blue hover:bg-neon-blue/80">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-white font-mono text-2xl flex items-center">
                <span className="text-gradient font-bold">AA</span>
                <span className="text-neon-blue">.</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© {new Date().getFullYear()} Alex. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 justify-center md:justify-end">
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
