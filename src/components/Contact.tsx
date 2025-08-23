import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const handleHireMe = () => {
    window.location.href = "mailto:prabhupalani18@gmail.com?subject=Hiring%20Inquiry";
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "prabhupalani18@gmail.com",
      href: "mailto:prabhupalani18@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@prabhupalani18",
      href: "https://github.com/prabhupalani18"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Prabhu Palani",
      href: "https://linkedin.com/in/prabhu-palani"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Available for Remote Work",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're looking for a backend developer, need help with AWS infrastructure, 
                or want to discuss technology, feel free to reach out.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-professional text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl text-primary mb-6">
                  <Send className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Ready to Work Together?
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm available for full-time positions, consulting, and freelance projects. 
                  Let's discuss how I can help bring your ideas to life with robust backend solutions.
                </p>

                <div className="space-y-4">
                  <button 
                    onClick={handleHireMe}
                    className="btn-hero w-full flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Send Me an Email
                  </button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>Response time: Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;