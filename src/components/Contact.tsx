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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
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
      href: 'https://maps.google.com/?q=Surat,Gujarat,India'
    }
  ];

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/cv/Ankit_Pativala_CV.pdf';
    link.download = 'Ankit_Pativala_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadSourceCode = () => {
    // Create a comprehensive source code info file
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

## 📁 Project Structure
src/
├── components/
│   ├── Navbar.tsx          # Navigation with glass effect
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Interactive skills showcase
│   ├── Projects.tsx        # Project carousel
│   ├── Experience.tsx      # Professional timeline
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with social links
│   ├── ParticlesBackground.tsx  # Animated background
│   └── ScrollToTop.tsx     # Scroll to top button
├── App.tsx                 # Main app component
├── App.css                 # Global styles and animations
├── main.tsx               # App entry point
└── index.css              # Tailwind imports

## 🎨 Design Features
- **Color Palette**: Dark theme with electric blue (#00D4FF), purple (#8B5CF6), teal (#14B8A6)
- **Glass Morphism**: Backdrop blur effects with subtle borders
- **Animations**: Smooth transitions, hover effects, typing animation
- **Responsive**: Mobile-first design with breakpoints
- **Typography**: Inter font family for modern look

## 🚀 Getting Started
1. Clone the repository
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
4. Open http://localhost:5173

## 📦 Available Scripts
- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

## 🌟 Key Components Explained

### ParticlesBackground.tsx
Creates animated floating particles with connecting lines using HTML5 Canvas.

### Hero.tsx
Features a typing animation that cycles through different developer roles.

### Skills.tsx
Interactive skills section with categorized tabs and animated progress bars.

### Projects.tsx
Carousel showcasing projects with hover effects and navigation arrows.

## 📱 Responsive Design
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

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

## 🔧 Customization
To customize this portfolio for your own use:
1. Update personal information in components
2. Replace project data in Projects.tsx
3. Modify color scheme in App.css CSS variables
4. Update skills and experience data
5. Replace CV file in public/cv/ directory

## 📄 License
This project is open source and available under the MIT License.

---
Built with ❤️ by Ankit Pativala
MERN Stack Developer | React Specialist | Full Stack Engineer
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
                  className="w-full px-4 py-3 bg-bg-secondary rounded-xl border border-glass-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
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