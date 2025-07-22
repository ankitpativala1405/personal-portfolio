import React, { useState } from 'react';
import { Code, Server, Database, Palette, GitBranch, Zap, Usb } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 75 },
        { name: 'Next.js', level: 70 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Media Queries', level: 90 },
        { name: 'JQueries', level: 80 },
        { name: 'Figma', level: 70 }
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'JWT', level: 85 },
        { name: 'Nodemailer', level: 80 },
        { name: 'Axios', level: 90 }
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'Moon Modeler', level: 75 },
      ]
    },
    Version_Controll: {
      icon: Usb,
      title: 'Version Controll',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'GitLab', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'Render', level: 80 }
      ]
    },
    ui: {
      icon: Palette,
      title: 'UI Libraries',
      skills: [
        { name: 'Material UI', level: 82 },
        { name: 'Bootstrap', level: 95 },
        { name: 'React Bootstrap', level: 75 },
        { name: 'Flow Bite', level: 79 },
        { name: 'Ant Design', level: 85 },
        { name: 'HeroUI', level: 80 },
        { name: 'Framer Motion', level: 88 },
        { name: 'Figma', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    animation: {
      icon: Zap,
      title: 'Animation & Effects Library',
      skills: [
        { name: 'CSS Animation', level: 90 },
        { name: 'Framer Motion', level: 88 },
        { name: 'AOS', level: 85 },
        { name: 'Animista', level: 82 },
      ]
    },
    other: {
      icon: GitBranch,
      title: 'Other Skills',
      skills: [
        { name: 'Web Design', level: 92 },
        { name: 'Design Thinking', level: 88 },
        { name: 'DSA with C++', level: 80 },
        { name: 'Strong Communication', level: 95 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Team Collaboration', level: 90 }
      ]
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${activeCategory === key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'glass-card hover:scale-105'
                  }`}
              >
                <Icon size={20} />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Code size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Frontend Excellence</h3>
            <p className="text-text-secondary">
              Expert in modern React ecosystem with Next.js, TypeScript, and advanced CSS frameworks
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Server size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Backend Proficiency</h3>
            <p className="text-text-secondary">
              Skilled in Node.js, Express.js, and RESTful API development with secure authentication
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Workflow</h3>
            <p className="text-text-secondary">
              Experienced with Git, deployment platforms, and modern development tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;