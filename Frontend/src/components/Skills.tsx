import React, { useState } from 'react';
import { Code, Server, Database, Palette, GitBranch, Zap, Usb } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', experience: 3 },
        { name: 'Next.js', experience: 3 },
        { name: 'JavaScript', experience: 4 },
        { name: 'HTML5 & CSS3', experience: 4 },
        { name: 'Media Queries', experience: 3 },
        { name: 'jQuery', experience: 2 },
        { name: 'Figma', experience: 2 },
        { name: 'Graphcommerce', experience: 3},
        { name: 'ScandiPWA', experience: 2}
      ],
    },

    backend: {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', experience: 3 },
        { name: 'Express.js', experience: 3 },
        { name: 'REST APIs', experience: 2 },
        { name: 'GraphQL', experience: 2 },
        { name: 'JWT', experience: 2 },
        { name: 'Nodemailer', experience: 2 },
        { name: 'Axios', experience: 2 },
      ],
    },

    database: {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', experience: 3 },
        { name: 'Moon Modeler', experience: 2 },
      ],
    },

    version_control: {
      icon: Usb,
      title: 'Version Control & Deployment',
      skills: [
        { name: 'Git & GitHub', experience: 2 },
        { name: 'GitLab', experience: 3 },
        { name: 'Vercel', experience: 3 },
        { name: 'Render', experience: 2 },
      ],
    },

    ui: {
      icon: Palette,
      title: 'UI Libraries',
      skills: [
        { name: 'Material UI', experience: 3 },
        { name: 'Bootstrap', experience: 2 },
        { name: 'React Bootstrap', experience: 2 },
        { name: 'Flowbite', experience: 2 },
        { name: 'Ant Design', experience: 3 },
        { name: 'HeroUI', experience: 2 },
        { name: 'Framer Motion', experience: 3 },
        { name: 'Figma', experience: 3 },
        { name: 'Tailwind CSS', experience: 3 },
      ],
    },

    animation: {
      icon: Zap,
      title: 'Animation & Effects',
      skills: [
        { name: 'CSS Animations', experience: 2 },
        { name: 'Framer Motion', experience: 2 },
        { name: 'AOS', experience: 2 },
        { name: 'Animista', experience: 2 },
      ],
    },

    other: {
      icon: GitBranch,
      title: 'Other Skills',
      skills: [
        { name: 'Web Design', experience: 2 },
        { name: 'Design Thinking', experience: 3 },
        { name: 'DSA with C++', experience: 2 },
        { name: 'Strong Communication', experience: 4 },
        { name: 'Problem Solving', experience: 4 },
        { name: 'Team Collaboration', experience: 4 },
      ],
    },
  };


  const experienceMap = {
    1: { label: 'Beginner', color: 'text-yellow-400' },
    2: { label: 'Intermediate', color: 'text-blue-400' },
    3: { label: 'Advanced', color: 'text-green-400' },
    4: { label: 'Expert', color: 'text-purple-400' },
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
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const exp = experienceMap[skill.experience];

              return (
                <div key={skill.name} className="space-y-3">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">
                      {skill.name}
                    </span>

                    <span className="text-primary font-bold">
                      {exp.label}
                    </span>
                  </div>

                  {/* Experience Bar (4-step instead of %) */}
                  <div className="w-full bg-bg-secondary rounded-full h-3 overflow-hidden flex">
                    {[1, 2, 3, 4].map(level => (
                      <div
                        key={level}
                        className={`h-full flex-1 transition-all duration-700 ${level <= skill.experience
                            ? 'bg-gradient-to-r from-primary to-secondary'
                            : 'bg-bg-secondary'
                          }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

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