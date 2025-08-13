import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded glow-effect"></div>
          <h1 className="text-2xl font-oswald uppercase tracking-wider gradient-text">
            Urban Ember
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-foreground hover:text-primary smooth-transition">Products</a>
          <a href="#about" className="text-foreground hover:text-primary smooth-transition">About</a>
          <a href="#contact" className="text-foreground hover:text-primary smooth-transition">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;