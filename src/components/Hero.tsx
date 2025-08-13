import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-smoke.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-oswald mb-6 leading-tight">
          <span className="block text-foreground">Urban</span>
          <span className="block gradient-text glow-effect">Ember</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Elevate Your Experience
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Where smoke meets style. Discover premium glass, luxury accessories, and everything you need for the perfect session.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Shop Collection
          </Button>
          <Button variant="accent" size="lg" className="text-lg px-8 py-6">
            Explore Products
          </Button>
        </div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary/30 rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;