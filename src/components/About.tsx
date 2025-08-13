import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Truck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Hand-selected products from trusted manufacturers with rigorous quality standards."
    },
    {
      icon: Shield,
      title: "Secure & Discreet",
      description: "Your privacy matters. All orders are shipped in discreet packaging with secure payment."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping across the country. Track your order every step of the way."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-oswald mb-6 gradient-text">
            Why Choose Urban Ember
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another smoke shop. We're curators of premium experiences, 
            dedicated to bringing you the finest smoking accessories and glass art.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border card-shadow smooth-transition hover:shadow-glow">
              <CardContent className="p-8 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4 glow-effect" />
                <h3 className="font-oswald text-xl mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-oswald mb-6 text-foreground">Your Next Session Starts Here</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Urban Ember for their smoking needs. 
            Experience the difference that quality makes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;