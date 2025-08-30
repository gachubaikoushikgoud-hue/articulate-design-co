import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageCircle, Trophy, Flag, Mail, User, Zap } from 'lucide-react';

const Community = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const communityFeatures = [
    {
      icon: Users,
      title: "Racing Community",
      description: "Connect with fellow F1 enthusiasts from around the world!"
    },
    {
      icon: MessageCircle,
      title: "Live Race Chat",
      description: "Join exciting discussions during live F1 races and events!"
    },
    {
      icon: Trophy,
      title: "Prediction Games",
      description: "Compete in fun prediction games and win cool racing prizes!"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-secondary via-secondary/80 to-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flag className="h-6 w-6 text-accent animate-bounce" />
            <span className="text-accent font-semibold">Join Our Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Racing <span className="text-accent">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant F1 racing community and connect with passionate fans worldwide!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Community Features */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">
              What You'll Get
            </h3>
            
            {communityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-accent group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Racing Statistics */}
            <Card className="bg-primary/10 border-accent/20 animate-scale-in mt-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">2.5K+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">Daily Messages</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background/10 border-accent/20 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent animate-pulse" />
                Join the Race!
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below to join our amazing F1 community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <User className="h-4 w-4 text-accent" />
                    Racing Name
                  </label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter your racing alias..."
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/20 border-accent/30 text-white placeholder:text-muted-foreground focus:border-accent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/20 border-accent/30 text-white placeholder:text-muted-foreground focus:border-accent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    Tell us about yourself
                  </label>
                  <Textarea
                    name="message"
                    placeholder="What's your favorite F1 team? Any racing experience? Let us know!"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/20 border-accent/30 text-white placeholder:text-muted-foreground focus:border-accent min-h-[100px]"
                    required
                  />
                </div>

                <Button type="submit" variant="racing" size="lg" className="w-full group">
                  Join Racing Community
                  <Flag className="h-5 w-5 group-hover:animate-bounce" />
                </Button>
              </form>

              {/* Cute racing icons */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-accent/20">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                  🏎️
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }}>
                  🏁
                </div>
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }}>
                  🏆
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;