import { Zap, Trophy, Timer, Fuel, Target, Gauge } from 'lucide-react';

const F1Facts = () => {
  const facts = [
    {
      icon: Zap,
      title: "Lightning Speed",
      fact: "300+ KM/H",
      description: "F1 cars can reach incredible speeds of over 300 km/h on straight sections of the track!"
    },
    {
      icon: Timer,
      title: "Quick Pit Stops", 
      fact: "2-3 Seconds",
      description: "Professional F1 teams can change all four tires in just 2-3 seconds during pit stops!"
    },
    {
      icon: Trophy,
      title: "Racing Circuits",
      fact: "23 Races",
      description: "The Formula 1 season features 23 exciting races across different countries and continents!"
    },
    {
      icon: Fuel,
      title: "Fuel Efficiency",
      fact: "100KG Limit",
      description: "F1 cars must complete entire races with only 100kg of fuel - that's amazing efficiency!"
    },
    {
      icon: Target,
      title: "Perfect Precision",
      fact: "1000+ HP",
      description: "Modern F1 engines produce over 1000 horsepower with incredible precision and reliability!"
    },
    {
      icon: Gauge,
      title: "G-Force Masters",
      fact: "5G Forces",
      description: "F1 drivers experience up to 5G forces during high-speed corners - that's intense!"
    }
  ];

  return (
    <section id="facts" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-6 w-6 text-accent animate-bounce" />
            <span className="text-accent font-semibold">Amazing Facts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            F1 <span className="gradient-text">Fun Facts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover incredible facts about Formula 1 racing that will blow your mind!
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 animate-slide-up border border-border/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary group-hover:animate-pulse" />
                  </div>
                  
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-accent/20 group-hover:border-accent/60 transition-colors animate-pulse"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {fact.title}
                </h3>
                
                <div className="text-2xl font-bold text-accent mb-3 animate-pulse">
                  {fact.fact}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {fact.description}
                </p>

                {/* Racing stripe */}
                <div className="mt-4 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our racing community to discover even more amazing F1 facts and connect with fellow racing enthusiasts!
            </p>
            <div className="flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-accent font-bold">More facts coming soon!</span>
              <Zap className="h-5 w-5 text-accent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default F1Facts;