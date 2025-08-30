import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Every design decision is backed by strategic thinking and deep understanding of your business goals.'
    },
    {
      icon: Heart,
      title: 'Passionate Craft',
      description: 'We pour our passion into every pixel, creating designs that truly resonate with your audience.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead of design trends while creating timeless solutions that stand the test of time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with you throughout the process to ensure your vision comes to life perfectly.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            About Our Studio
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded on the belief that great design has the power to transform businesses, 
            Articulate Design Co brings together creativity, strategy, and technical excellence 
            to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full shadow-medium flex items-center justify-center">
                <value.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Meet Our Creative Team
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of designers, strategists, and developers work together 
            to create extraordinary experiences. With backgrounds spanning various 
            industries, we bring fresh perspectives to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;