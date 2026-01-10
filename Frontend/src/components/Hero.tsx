import  { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['MERN Stack Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', "Web Designer"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container text-center relative z-10">
        <div className="animate-slide-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center pt-10">
            <div className="relative pt-20">
              <div className="w-48 h-48 rounded-full glass-card overflow-hidden animate-float">
                <img
                  src="/Image/ProfileImage.jpeg"
                  alt="Ankit Pativala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            Hi, I'm <span className="gradient-text">Ankit</span>
          </h1>

          <div className="text-2xl md:text-4xl font-medium mb-6 h-16 flex items-center justify-center">
            <span className="text-text-secondary">I'm a </span>
            <span className="gradient-text ml-2 min-w-0">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-text-secondary mb-8 max-w-5xl mx-auto leading-relaxed">
            Full Stack MERN Developer with specialized experience in GraphCommerce and ScandiPWA,
            focused on building high-performance, scalable, and modern eCommerce solutions.
            Skilled in React, Next.js, GraphQL, Node.js, and Magento integrations, with a strong
            emphasis on responsive design, performance optimization, and user-centric
            development. Passionate about creating seamless digital experiences that combine
            clean architecture with engaging UI.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="tel:+919723665181"
              className="flex items-center gap-2 text-text-secondary hover:underline"
            >
              <Phone size={20} className="text-primary" />
              <span>+91 9723665181</span>
            </a>
            <a className="flex items-center gap-2 text-text-secondary" href="mailto:ankitj1405@gmail.com">
              <Mail size={20} className="text-primary" />
              <span>ankitj1405@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin size={20} className="text-primary" />
              <span>Surat, Gujarat</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ankitpativala1405"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-pativala-b2b02a194/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Linkedin size={24} />
            </a>
            {/* <a
              href="https://portfolio-six-red-97.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <span className="font-bold">P</span>
            </a> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section >
  );
};

export default Hero;