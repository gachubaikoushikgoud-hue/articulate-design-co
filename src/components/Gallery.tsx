import { useState } from 'react';
import { Zap, Eye, Heart } from 'lucide-react';
import f1Car1 from '@/assets/f1-car-1.jpg';
import f1Car2 from '@/assets/f1-car-2.jpg';
import f1Car3 from '@/assets/f1-car-3.jpg';
import f1Car4 from '@/assets/f1-car-4.jpg';

const Gallery = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cars = [
    {
      id: 1,
      image: f1Car1,
      title: "Red Racing Beast",
      description: "Aerodynamic perfection with cutting-edge technology",
      speed: "320 KM/H",
      power: "1000 HP"
    },
    {
      id: 2,
      image: f1Car2,
      title: "Black Lightning",
      description: "Sleek design meets incredible performance",
      speed: "315 KM/H", 
      power: "980 HP"
    },
    {
      id: 3,
      image: f1Car3,
      title: "Neon Thunder",
      description: "Future of racing with neon-powered excellence",
      speed: "325 KM/H",
      power: "1020 HP"
    },
    {
      id: 4,
      image: f1Car4,
      title: "Carbon Fury",
      description: "Lightweight carbon fiber masterpiece",
      speed: "318 KM/H",
      power: "995 HP"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="h-6 w-6 text-accent animate-bounce" />
            <span className="text-accent font-semibold">F1 Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Racing <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our stunning collection of Formula 1 cars. Each machine represents the pinnacle of engineering and speed.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className={`group relative bg-card rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Speed Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Stats */}
                {hoveredCard === car.id && (
                  <div className="absolute top-4 right-4 space-y-2 animate-fade-in">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {car.speed}
                    </div>
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {car.power}
                    </div>
                  </div>
                )}

                {/* Glowing headlights effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {car.title}
                  </h3>
                  <Heart className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description}
                </p>
                
                {/* Racing stripes */}
                <div className="mt-4 flex gap-1">
                  <div className="h-1 bg-primary rounded flex-1 animate-pulse"></div>
                  <div className="h-1 bg-accent rounded flex-1 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-1 bg-primary rounded flex-1 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;