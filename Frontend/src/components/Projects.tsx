import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'ElecTech - React E-commerce',
      description: 'A modern e-commerce platform built with React.js featuring product catalog, shopping cart, user authentication, and responsive design. Implements advanced state management and modern UI components.',
      image: '/Image/ElectechReact.jpg',
      technologies: ['React.js', 'JavaScript', 'Node.js', 'CSS3', 'Local Storage', 'Responsive Design' , 'Tailwind CSS'],
      github: 'https://github.com/ankitpativala1405/ELECTECH_REACT',
      live: '#',
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Exclusive - Shopping Platform',
      description: 'A comprehensive shopping platform with advanced filtering, product search, user reviews, and secure checkout process. Features modern UI design and smooth user experience.',
      image: '/Image/Exclusive.jpg',
      technologies: ['Node.js', 'MongoDB', 'JavaScript', 'Express.js', 'HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/ankitpativala1405/Exclusive',
      live: '#',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Dhvani Enterprise Website',
      description: 'Corporate website for Dhvani Enterprise featuring company portfolio, services showcase, contact forms, and professional design. Built with modern web technologies.',
      image: '/Image/DhvaniEnterprise.jpg',
      technologies: ['HTMl', 'CSS', 'JavaScript', 'Responsive Design' , 'Local Storage'],
      github: 'https://github.com/ankitpativala1405/dhvani-enterprise-website',
      live: '#',
      category: 'Corporate'
    },
    {
      id: 4,
      title: 'Lakme Salon Website',
      description: 'Beauty salon website with appointment booking system, service catalog, gallery showcase, and customer testimonials. Features elegant design and smooth animations.',
      image: '/Image/LakmeSalon.jpg',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Animation Libraries' , 'Tailwind CSS'],
      github: 'https://github.com/ankitpativala1405/REACT/tree/master/BEAUTY-PARLOUR',
      live: '#',
      category: 'Service'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and experience. Features responsive design, smooth animations, and modern UI/UX principles.',
      image: '/Image/PortFolio.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Media Queries', 'Animations'],
      github: 'https://github.com/ankitpativala1405/rw_ankitpativala_mediaquery_projects/tree/master/Min-width_Project',
      live: '#',
      category: 'Portfolio'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Showcase of my latest work and creative solutions
          </p>
        </div>

        {/* Main Project Slider */}
        <div className="relative mb-16">
          <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent rounded-2xl"></div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm font-medium">
                  {projects[currentProject].category}
                </div>

                <h3 className="text-3xl font-bold">{projects[currentProject].title}</h3>

                <p className="text-text-secondary text-lg leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-secondary rounded-full text-sm text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={projects[currentProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex items-center gap-2"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a
                    href={projects[currentProject].live}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentProject(index)}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentProject
                ? 'border-primary scale-110'
                : 'border-transparent hover:border-primary/50'
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-text-secondary">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-text-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-text-secondary">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;