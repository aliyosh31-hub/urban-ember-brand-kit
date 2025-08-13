import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-primary rounded glow-effect"></div>
              <h3 className="text-xl font-oswald uppercase tracking-wider gradient-text">
                Urban Ember
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Elevate your experience with premium smoking accessories and luxury glass pieces.
            </p>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg mb-4 text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Glass Collection</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Vaporizers</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Accessories</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Cleaning Supplies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Returns</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg mb-4 text-foreground">Follow Us</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 Urban Ember. All rights reserved. Must be 21+ to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;