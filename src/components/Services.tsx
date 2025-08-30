import { Palette, Globe, Smartphone, Camera, PenTool, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand development including logo design, color palettes, typography, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography']
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Responsive, user-centered web experiences that engage your audience and drive conversions.',
      features: ['UI/UX Design', 'Responsive Design', 'User Research', 'Prototyping']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Intuitive mobile application designs that provide seamless user experiences across all devices.',
      features: ['iOS Design', 'Android Design', 'App Prototypes', 'User Testing']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional product and brand photography that tells your story and showcases your offerings.',
      features: ['Product Photos', 'Brand Photography', 'Lifestyle Shoots', 'Image Editing']
    },
    {
      icon: PenTool,
      title: 'Print Design',
      description: 'Beautiful print materials that extend your brand presence into the physical world.',
      features: ['Business Cards', 'Brochures', 'Packaging', 'Marketing Materials']
    },
    {
      icon: Zap,
      title: 'Strategy',
      description: 'Design strategy and consulting to align your visual identity with your business objectives.',
      features: ['Design Strategy', 'Brand Audit', 'Competitive Analysis', 'Design Systems']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to completion, we offer comprehensive design services 
            to elevate your brand and create meaningful connections with your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="racing" size="lg">
            Join Our Racing Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;