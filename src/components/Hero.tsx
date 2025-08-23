import { Download, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleHireMe = () => {
    window.location.href = "mailto:prabhupalani18@gmail.com?subject=Hiring%20Inquiry%20%E2%80%93%20Portfolio%20Website";
  };

  const handleDownloadResume = () => {
    const resumeUrl = import.meta.env.VITE_RESUME_URL || "https://drive.google.com/file/d/1xXJzuybbjxGaWybqdatZW5ILbi8srqfG/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="section-container text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Prabhu Palani</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-4 max-w-3xl mx-auto">
            Technology Developer | Backend Engineering | Typescript
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            AWS Certified Developer building scalable microservices and global logistics software
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleHireMe}
              className="btn-hero flex items-center gap-2"
            >
              <Mail size={20} />
              Hire Me
            </button>
            <button 
              onClick={handleDownloadResume}
              className="btn-outline flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;