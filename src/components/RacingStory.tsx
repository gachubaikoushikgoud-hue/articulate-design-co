import { Play, Pause, RotateCcw, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const RacingStory = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section id="story" className="py-20 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flag className="h-6 w-6 text-accent animate-bounce" />
            <span className="text-accent font-semibold">Racing Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="gradient-text">Ultimate Race</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our cute cartoon F1 cars race around the track in this animated story sequence!
          </p>
        </div>

        {/* Animated Race Track */}
        <div className="relative max-w-4xl mx-auto bg-gradient-to-b from-muted/20 to-muted/40 rounded-3xl p-8 shadow-large">
          {/* Race Track SVG Animation */}
          <div className="relative h-96 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl overflow-hidden">
            {/* Track */}
            <svg 
              viewBox="0 0 800 400" 
              className="w-full h-full absolute inset-0"
            >
              {/* Track outline */}
              <ellipse 
                cx="400" 
                cy="200" 
                rx="350" 
                ry="150" 
                fill="none" 
                stroke="hsl(var(--border))" 
                strokeWidth="4"
                strokeDasharray="20,10"
                className="animate-pulse"
              />
              
              {/* Inner track */}
              <ellipse 
                cx="400" 
                cy="200" 
                rx="280" 
                ry="100" 
                fill="none" 
                stroke="hsl(var(--muted))" 
                strokeWidth="2"
              />

              {/* Starting line */}
              <rect x="395" y="50" width="10" height="40" fill="hsl(var(--accent))" className="animate-pulse" />
              
              {/* Checkered pattern */}
              <pattern id="checkered" patternUnits="userSpaceOnUse" width="20" height="20">
                <rect width="10" height="10" fill="white"/>
                <rect x="10" y="10" width="10" height="10" fill="white"/>
                <rect x="10" y="0" width="10" height="10" fill="black"/>
                <rect x="0" y="10" width="10" height="10" fill="black"/>
              </pattern>
              <rect x="390" y="45" width="20" height="50" fill="url(#checkered)" opacity="0.8"/>

              {/* Animated Racing Cars */}
              <g className={isPlaying ? "animate-spin" : ""} style={{ transformOrigin: '400px 200px', animationDuration: '4s' }}>
                {/* Car 1 - Red */}
                <g>
                  <ellipse cx="750" cy="200" rx="15" ry="8" fill="hsl(var(--primary))" />
                  <rect x="735" y="196" width="30" height="8" rx="4" fill="hsl(var(--primary))" />
                  <circle cx="742" cy="200" r="3" fill="hsl(var(--accent))" className="animate-pulse" />
                  <circle cx="758" cy="200" r="3" fill="hsl(var(--accent))" className="animate-pulse" />
                </g>
              </g>

              <g className={isPlaying ? "animate-spin" : ""} style={{ transformOrigin: '400px 200px', animationDuration: '3.5s' }}>
                {/* Car 2 - Black */}
                <g>
                  <ellipse cx="70" cy="200" rx="15" ry="8" fill="hsl(var(--secondary))" />
                  <rect x="55" y="196" width="30" height="8" rx="4" fill="hsl(var(--secondary))" />
                  <circle cx="62" cy="200" r="3" fill="hsl(var(--accent))" className="animate-pulse" />
                  <circle cx="78" cy="200" r="3" fill="hsl(var(--accent))" className="animate-pulse" />
                </g>
              </g>

              <g className={isPlaying ? "animate-spin" : ""} style={{ transformOrigin: '400px 200px', animationDuration: '4.2s' }}>
                {/* Car 3 - Accent */}
                <g>
                  <ellipse cx="400" cy="50" rx="15" ry="8" fill="hsl(var(--accent))" />
                  <rect x="385" y="46" width="30" height="8" rx="4" fill="hsl(var(--accent))" />
                  <circle cx="392" cy="50" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
                  <circle cx="408" cy="50" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
                </g>
              </g>

              {/* Speed lines */}
              {isPlaying && (
                <>
                  <line x1="100" y1="120" x2="150" y2="120" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.6" className="animate-pulse" />
                  <line x1="650" y1="280" x2="700" y2="280" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" className="animate-pulse" />
                  <line x1="300" y1="80" x2="350" y2="80" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.6" className="animate-pulse" />
                </>
              )}
            </svg>

            {/* Pit Stops */}
            <div className="absolute bottom-4 left-4 bg-primary/20 rounded-lg p-2 animate-bounce">
              <span className="text-xs text-white font-bold">PIT STOP</span>
            </div>
            
            <div className="absolute top-4 right-4 bg-accent/20 rounded-lg p-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <span className="text-xs text-accent-foreground font-bold">FINISH LINE</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={togglePlay}
              className="group"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 group-hover:scale-110 transition-transform" />
              ) : (
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              )}
              {isPlaying ? 'Pause Race' : 'Start Race'}
            </Button>
            
            <Button variant="ghost" size="lg" className="group">
              <RotateCcw className="h-5 w-5 group-hover:rotate-180 transition-transform" />
              Replay
            </Button>
          </div>

          {/* Race Info */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-primary/10 rounded-lg p-4">
              <div className="text-lg font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Racing Cars</div>
            </div>
            <div className="bg-accent/10 rounded-lg p-4">
              <div className="text-lg font-bold text-accent">5</div>
              <div className="text-sm text-muted-foreground">Pit Stops</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <div className="text-lg font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Laps to Go</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RacingStory;