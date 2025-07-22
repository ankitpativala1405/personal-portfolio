import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Diamond Industry Professional',
      companies: ['Kiran Gems Pvt Ltd.', 'Sheetal Manufacturing Company', 'Dharma Diamond'],
      period: '2016 - 2025',
      location: 'Surat, Gujarat',
      description: 'Gained valuable experience in the diamond industry while developing technical skills in web development. Managed quality control, customer relationships, and manufacturing processes.',
      achievements: [
        'Quality Control & Assurance',
        'Client Relationship Management',
        'Manufacturing Process Optimization',
        'Team Collaboration & Leadership'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Development Student',
      companies: ['Red And White Skill Institute'],
      period: '2024 - 2025',
      location: 'Surat, Gujarat',
      description: 'Intensive full-stack development program focusing on MERN stack technologies, modern web development practices, and industry best practices.',
      achievements: [
        'MERN Stack Proficiency',
        'Modern JavaScript (ES6+)',
        'Database Design & Management',
        'Version Control & Deployment'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Development',
      issuer: 'Red And White Skill Institute',
      year: '2025',
      icon: '🎓'
    },
    {
      name: 'React.js Development',
      issuer: 'Self-Learning',
      year: '2024',
      icon: '⚛️'
    },
    {
      name: 'Node.js Backend Development',
      issuer: 'Online Certification',
      year: '2024',
      icon: '🚀'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Professional experience and continuous learning path
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20 pb-16 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-bg-primary"></div>

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-8 card-hover">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="space-y-1">
                        {exp.companies.map((company, idx) => (
                          <p key={idx} className="text-lg text-primary font-medium">{company}</p>
                        ))}
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center card-hover">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{cert.name}</h4>
                <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                <p className="text-text-secondary">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Evolution */}
        <div className="mt-16 glass-card rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text">Continuous Growth</h3>
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            My journey from the diamond industry to tech has given me a unique perspective on precision, 
            quality, and attention to detail. These skills, combined with my passion for technology, 
            drive me to create exceptional digital experiences.
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold">
              Ready for New Challenges
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;