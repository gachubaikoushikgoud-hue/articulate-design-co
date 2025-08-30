import { Zap, Flag, Trophy, Heart, Github, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Racing Story', href: '#story' },
    { name: 'F1 Facts', href: '#facts' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Zap className="h-10 w-10 text-primary animate-pulse" />
                <Flag className="h-5 w-5 text-accent absolute -top-1 -right-1 animate-bounce" />
              </div>
              <span className="text-2xl font-bold text-white">F1 Racing Zone</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Your ultimate destination for Formula 1 racing excitement! Join our vibrant community of F1 enthusiasts and experience the thrill of high-speed racing.
            </p>
            
            {/* Racing Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-primary/10 rounded-lg p-3">
                <Trophy className="h-5 w-5 text-accent mx-auto mb-1" />
                <div className="text-lg font-bold text-primary">2.5K+</div>
                <div className="text-xs text-muted-foreground">Members</div>
              </div>
              <div className="text-center bg-accent/10 rounded-lg p-3">
                <Zap className="h-5 w-5 text-primary mx-auto mb-1 animate-pulse" />
                <div className="text-lg font-bold text-accent">23</div>
                <div className="text-xs text-muted-foreground">Races</div>
              </div>
              <div className="text-center bg-primary/10 rounded-lg p-3">
                <Flag className="h-5 w-5 text-accent mx-auto mb-1 animate-bounce" />
                <div className="text-lg font-bold text-primary">10</div>
                <div className="text-xs text-muted-foreground">Teams</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Flag className="h-4 w-4 text-accent" />
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              Connect With Us
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors group"
                  >
                    <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 hello@f1racingzone.com</p>
              <p>🏁 Join our racing community!</p>
              <p>⚡ Built with passion for F1</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 F1 Racing Zone. Made with <Heart className="h-4 w-4 text-accent inline animate-pulse" /> for racing fans.
            </div>
            
            {/* Racing Animation */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded animate-pulse"></div>
              <span className="text-xs text-accent font-bold">RACING</span>
              <div className="w-6 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;