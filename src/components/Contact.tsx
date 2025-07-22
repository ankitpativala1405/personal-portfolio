import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Download, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you! Your message was sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9723665181',
      href: 'tel:+919723665181'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ankitj1405@gmail.com',
      href: 'mailto:ankitj1405@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Surat, Gujarat, India',
      href: 'https://www.google.com/maps/dir//sagun+height/@21.2230488,72.7644558,12z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV/CV - Ankit_Pativala.pdf';
    link.download = 'Ankit_Pativala_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadSourceCode = () => {
    const sourceCodeInfo = `
# Ankit Pativala - Portfolio Source Code

## 🚀 Project Overview
This is a modern, responsive portfolio website built with React and TypeScript, featuring:
- Dark theme with glass morphism effects
- Animated particles background
- Interactive skill progress bars
- Project carousel with 3D effects
- Contact form with validation
- Smooth scrolling and micro-interactions

## 🛠️ Technologies Used
### Frontend:
- React 18.3.1
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Custom CSS animations

### Build Tools:
- Vite
- ESLint
- PostCSS
- Autoprefixer

## 🎨 Design Features
- **Color Palette**: Dark theme with electric blue (#00D4FF), purple (#8B5CF6), teal (#14B8A6)
- **Glass Morphism**: Backdrop blur effects with subtle borders
- **Animations**: Smooth transitions, hover effects, typing animation
- **Responsive**: Mobile-first design with breakpoints
- **Typography**: Inter font family for modern look


## 🌟 Key Components Explained

### ParticlesBackground.tsx
Creates animated floating particles with connecting lines using HTML5 Canvas.

### Hero.tsx
Features a typing animation that cycles through different developer roles.

### Skills.tsx
Interactive skills section with categorized tabs and animated progress bars.

### Projects.tsx
Carousel showcasing projects with hover effects and navigation arrows.

## 🎯 Performance Optimizations
- Lazy loading for images
- Optimized animations with CSS transforms
- Efficient particle system
- Minimal bundle size with tree shaking

## 📞 Contact Information
**Ankit Pativala**
- Email: ankitj1405@gmail.com
- Phone: +91 9723665181
- Location: Surat, Gujarat, India
- LinkedIn: https://www.linkedin.com/in/ankit-pativala-b2b02a194/
- GitHub: https://github.com/ankitpativala1405
- Portfolio: https://portfolio-six-red-97.vercel.app/
`;

    const blob = new Blob([sourceCodeInfo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ankit_Portfolio_Source_Code_Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-glass transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">{info.title}</p>
                        <p className="text-text-secondary">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Why Work With Me?</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Fast Response Time (24 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Quality Assured Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Modern Tech Stack</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Ongoing Support</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={downloadCV}
                  className="w-full btn btn-outline flex items-center justify-center gap-2"
                >
                  <FileText size={20} />
                  Download CV
                </button>
                <button
                  onClick={downloadSourceCode}
                  className="w-full btn btn-glass flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Code Guide
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle size={24} className="text-primary" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-secondary rounded-xl border border-glass-border focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-secondary rounded-xl border border-glass-border focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary rounded-xl border border-glass-border focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-secondary text-black rounded-xl border border-glass-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;