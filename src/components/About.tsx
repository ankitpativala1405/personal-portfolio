import React, { useState, useEffect, useRef } from 'react';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: 5, label: 'Projects Completed', suffix: '+' },
    { icon: Briefcase, value: 8, label: 'Years Experience', suffix: '+' },
    { icon: GraduationCap, value: 3, label: 'Certifications', suffix: '' },
    { icon: Award, value: 15, label: 'Technologies', suffix: '+' }
  ];


  const languages = [
    { name: 'English', level: 75 },
    { name: 'Hindi', level: 95 },
    { name: 'Gujarati', level: 100 }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);


  const startCounting = () => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 200);
    });

    setTimeout(() => {
      intervals.forEach(clearInterval);
    }, 10000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);


  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-7xl mx-auto">
            I am a passionate and dedicated MERN Stack Developer with a strong foundation in modern web technologies and a keen eye for design. I specialize in building responsive, user-friendly, and high-performance web applications using React.js, Next.js, Node.js, and Express.js. With hands-on experience in crafting intuitive user interfaces with Tailwind CSS, Material UI, and other modern frameworks, I take pride in writing clean, maintainable code that delivers real value. I thrive in collaborative environments, enjoy solving complex problems, and continuously push myself to learn new tools and best practices. My goal is to create meaningful digital experiences that not only meet but exceed user expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Story</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm a motivated and creative MERN Stack Developer with expertise in building scalable web applications
                using React.js, Next.js, and Redux. I have a strong foundation in crafting modern, responsive user
                interfaces with frameworks like Material UI, Tailwind CSS, and other cutting-edge technologies.
              </p>
              <p className="text-text-secondary leading-relaxed">
                both frontend and backend development, I bring a logical problem-solving approach
                and creative mindset to every project. I'm known for my adaptability under pressure and collaborative
                spirit, always eager to tackle new challenges and contribute to excellent user-centric web solutions.
              </p>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-primary">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 text-center card-hover group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">
                    {counts[index]}
                    {stat.suffix}
                  </h3>
                  <p className="text-text-secondary">{stat.label}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 card-hover">
              <div className="text-primary font-semibold mb-2">2025</div>
              <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
              <p className="text-text-secondary">Red And White Skill Institute</p>
            </div>
            <div className="glass-card rounded-2xl p-8 card-hover">
              <div className="text-primary font-semibold mb-2">2016</div>
              <h4 className="text-xl font-semibold mb-2">GSHEB - HSC</h4>
              <p className="text-text-secondary">Alembic Vidhyalaya</p>
            </div>
            <div className="glass-card rounded-2xl p-8 card-hover">
              <div className="text-primary font-semibold mb-2">2014</div>
              <h4 className="text-xl font-semibold mb-2">GSEB - SSC</h4>
              <p className="text-text-secondary">Smt L.L.Kakadiya Secondary School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;