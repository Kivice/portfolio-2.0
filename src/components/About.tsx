
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/me2.png" 
                alt="Profile" 
                className="w-64 h-64 object-cover rounded-full" 
              />
            </div>
          </div>
          
          <div ref={sectionRef} className="md:w-1/2 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About Me</h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              Hello!  Myy name is  Philip Gachie I'm a passionate developer with expertise in building modern web applications.
              With over 5 years of experience, I specialize in creating responsive, accessible, 
              and performant websites that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground dark:text-gray-300 mb-8">
              My journey in tech started when I built my first website at 15. Since then, 
              I've worked with various technologies and frameworks, constantly expanding my 
              skills to stay at the forefront of web development trends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Download size={16} />
                Download CV
              </Button>
              <Button variant="outline" className="flex items-center gap-2 dark:border-gray-700 dark:text-gray-300">
                <Mail size={16} />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
