
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: 'frontend' },
  { name: "JavaScript", level: 90, category: 'frontend' },
  { name: "React", level: 85, category: 'frontend' },
  { name: "TypeScript", level: 80, category: 'frontend' },
  { name: "Node.js", level: 75, category: 'backend' },
  { name: "Express", level: 80, category: 'backend' },
  { name: "MongoDB", level: 70, category: 'backend' },
  { name: "PostgreSQL", level: 65, category: 'backend' },
  { name: "UI/UX Design", level: 75, category: 'design' },
  { name: "Figma", level: 70, category: 'design' },
  { name: "Git", level: 85, category: 'other' },
  { name: "Docker", level: 60, category: 'other' },
];

const SkillCard = ({ name, level }: Skill) => (
  <Card className="p-4 dark:bg-gray-800 dark:border-gray-700">
    <CardContent className="p-0">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium dark:text-white">{name}</span>
        <span className="text-sm text-muted-foreground dark:text-gray-400">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </CardContent>
  </Card>
);

const Skills = () => {
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

  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Skills</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and expertise 
            across different domains of web development.
          </p>
        </div>
        
        <div ref={sectionRef} className="reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Frontend Development</h3>
              <div className="space-y-4">
                {frontendSkills.map(skill => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Backend Development</h3>
              <div className="space-y-4">
                {backendSkills.map(skill => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Design</h3>
              <div className="space-y-4">
                {designSkills.map(skill => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Other Skills</h3>
              <div className="space-y-4">
                {otherSkills.map(skill => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
