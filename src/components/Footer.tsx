import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Prabhu Palani</h3>
            <p className="text-muted-foreground">
              Backend Developer & AWS Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center space-x-6">
            <a
              href="mailto:prabhupalani18@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/prabhupalani18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/prabhupalani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart size={16} className="text-red-500" /> by Prabhu Palani
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;