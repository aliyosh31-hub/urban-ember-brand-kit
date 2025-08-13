import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard = ({ title, price, image, description }: ProductCardProps) => {
  return (
    <Card className="bg-gradient-card border-border card-shadow smooth-transition hover:scale-105 hover:shadow-glow overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover smooth-transition hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-oswald text-xl mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-oswald gradient-text">{price}</span>
          <Button variant="default" size="sm" className="font-oswald">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;