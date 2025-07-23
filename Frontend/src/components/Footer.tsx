import React from 'react';
import { Github, Linkedin, Mail, FileText, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ankitpativala1405',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ankit-pativala-b2b02a194/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:ankitj1405@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Ankit_Pativala_CV.pdf';
    link.download = 'Ankit_Pativala_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <footer className="bg-bg-secondary border-t border-glass-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Ankit Pativala</h3>
            <p className="text-text-secondary">
              MERN Stack Developer passionate about creating exceptional digital experiences
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4 text-text-secondary">
              <a className='flex gap-3'><MapPin /> Surat, Gujarat, India</a>
              <a className='flex gap-3' href='tel:+919723665181'><Phone /> +91 9723665181</a>
              <a className='flex gap-3'><Mail /> ankitj1405@gmail.com</a>
            </div>

            {/* Download Buttons */}
            <div className="space-y-2 pt-4">
              <button
                onClick={downloadCV}
                className="w-full btn btn-outline text-sm py-2 flex items-center justify-center gap-2"
              >
                <FileText size={16} />
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border mt-8 pt-8 text-center">
          <p className="text-text-secondary flex items-center justify-center gap-2">
            © 2025 Ankit Pativala — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;