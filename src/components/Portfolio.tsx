import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechFlow Solutions',
      category: 'Brand Identity & Web Design',
      description: 'Complete rebrand and website redesign for a leading technology consultancy.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'EcoVibe Products',
      category: 'E-commerce Design',
      description: 'Sustainable product showcase with seamless shopping experience.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Mindful App',
      category: 'Mobile App Design',
      description: 'Meditation and wellness app with calming, intuitive interface.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Artisan Coffee Co',
      category: 'Brand Identity',
      description: 'Handcrafted visual identity for premium coffee roasters.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Fitness Plus',
      category: 'Web Platform',
      description: 'Comprehensive fitness platform with modern, energetic design.',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Finance Forward',
      category: 'Fintech Design',
      description: 'Clean, trustworthy design for financial technology platform.',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore some of our recent projects where creativity meets strategy 
            to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-medium text-accent mb-2">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto group">
                  View Project
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;