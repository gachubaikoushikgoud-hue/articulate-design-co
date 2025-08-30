import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Flag, Trophy } from 'lucide-react';
import heroImage from '@/assets/f1-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Flag className="h-5 w-5 text-accent animate-bounce" />
              <span className="text-accent font-semibold">Formula 1 Racing Zone</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Experience the{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Thrill of F1 Racing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Dive into the high-speed world of Formula 1! Discover amazing cars, watch epic races, and join our racing community for the ultimate F1 experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="racing" size="xl" className="group">
                Start Your Engines
                <Zap className="h-5 w-5 group-hover:animate-spin transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Gallery
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Racing Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary mb-1 flex items-center justify-center gap-1">
                  <Trophy className="h-6 w-6 text-accent" />
                  23
                </div>
                <div className="text-sm text-muted-foreground">F1 Circuits</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary mb-1">300+</div>
                <div className="text-sm text-muted-foreground">KM/H Top Speed</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary mb-1">10</div>
                <div className="text-sm text-muted-foreground">Racing Teams</div>
              </div>
            </div>
          </div>

          {/* Racing Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={heroImage}
                alt="Formula 1 racing car at high speed"
                className="relative rounded-2xl shadow-large w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Speed effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;