import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      content: 'Articulate Design Co transformed our brand identity completely. Their strategic approach and creative execution exceeded our expectations. The new design has significantly improved our market positioning.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, EcoVibe Products',
      content: 'Working with this team was an absolute pleasure. They understood our vision for sustainable design and brought it to life beautifully. Our conversion rates increased by 40% after the redesign.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Director, Mindful App',
      content: 'The mobile app design they created is intuitive and calming – exactly what our users needed. The attention to detail and user experience is exceptional. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients say 
            about working with Articulate Design Co.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-8 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-accent mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-accent fill-current"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-lg font-semibold text-primary">TechFlow</div>
            <div className="text-lg font-semibold text-primary">EcoVibe</div>
            <div className="text-lg font-semibold text-primary">Mindful</div>
            <div className="text-lg font-semibold text-primary">Finance+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;