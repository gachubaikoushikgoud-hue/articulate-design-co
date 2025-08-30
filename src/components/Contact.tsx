import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Ready to transform your brand? Get in touch with us and let's discuss 
              how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder-white/60"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder-white/60"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder-white/60"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="">Select a service</option>
                    <option value="branding">Brand Identity</option>
                    <option value="web">Web Design</option>
                    <option value="mobile">Mobile App</option>
                    <option value="photography">Photography</option>
                    <option value="print">Print Design</option>
                    <option value="strategy">Design Strategy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder-white/60"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button variant="accent" size="lg" className="w-full">
                  Send Message
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  We'd love to hear about your project and explore how we can help 
                  bring your vision to life. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-primary-foreground/80">hello@articulatedesign.co</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-primary-foreground/80">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Studio</div>
                    <div className="text-primary-foreground/80">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold mb-4">Response Time</h4>
                <p className="text-primary-foreground/80">
                  We typically respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;