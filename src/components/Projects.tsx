import { ExternalLink, Github, Code, Zap, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weather Application",
      description: "A modern weather application built with responsive design and real-time weather data integration. Features location-based forecasts and intuitive user interface.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Responsive Design"],
      github: "https://github.com/prabhupalani18/Weather-app",
      demo: null,
      featured: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Logistics Management System",
      description: "Global logistics software for petrochemical imports/exports. Built with microservices architecture for scalability and reliability.",
      technologies: ["Node.js", "AWS", "Microservices", "Docker", "TypeScript"],
      github: null,
      demo: null,
      featured: true,
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Airline Backend Services",
      description: "Backend microservices architecture for airline operations. Handles complex business logic with high availability and performance.",
      technologies: ["Node.js", "Fastify", "SQL", "REST APIs", "Docker"],
      github: null,
      demo: null,
      featured: false,
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Scalable API Framework",
      description: "Custom framework for building scalable REST APIs with built-in authentication, validation, and monitoring capabilities.",
      technologies: ["Node.js", "Express.js", "JWT", "Sequelize", "Redis"],
      github: null,
      demo: null,
      featured: false,
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in backend development and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card-professional animate-slide-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-card-hover text-foreground px-3 py-1 rounded-full text-sm font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/prabhupalani18"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;