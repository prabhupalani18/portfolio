import { Award, Code, Database, Cloud, Server, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "TypeScript", "JavaScript", "Spring Boot", "Fastify", "Express.js"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Lambda", "EC2"]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "PostgreSQL", "MongoDB", "Sequelize", "Redis", "DynamoDB"]
    },
    {
      title: "Architecture & APIs",
      icon: <Layers className="w-6 h-6" />,
      skills: ["Microservices", "REST APIs", "GraphQL", "Event-Driven", "CQRS", "Domain-Driven Design"]
    },
    {
      title: "Frontend Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: ["Angular", "React", "HTML5", "CSS3", "Responsive Design", "Progressive Web Apps"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "aws-dev-associate"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-professional animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-card-hover text-foreground px-3 py-1 rounded-full text-sm font-medium border border-border hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-8">
            <span className="gradient-text">Certifications & Education</span>
          </h3>
        </div>

        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="card-professional animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg text-accent">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h4>
                  <p className="text-muted-foreground">{cert.issuer} • {cert.year}</p>
                </div>
                <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-medium">
                  Certified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;