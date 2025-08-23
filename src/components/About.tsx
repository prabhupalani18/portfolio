import { Award, Code, Globe, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "4+ Years Experience",
      description: "Backend development expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AWS Certified",
      description: "Developer Associate certified"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Software",
      description: "Logistics & petrochemical systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Microservices",
      description: "Scalable architecture design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate backend developer creating scalable solutions for complex business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Technology Developer & AWS Expert
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Experienced backend developer with 4+ years of expertise in building scalable applications, 
              microservices architecture, and cloud solutions. Currently at Elite Digital Technologies, 
              I'm developing global logistics software for petrochemical imports and exports.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My passion lies in creating robust backend systems that can handle complex business logic 
              while maintaining high performance and reliability. I specialize in Node.js, AWS services, 
              and modern development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open source projects, 
              and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="card-professional text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;