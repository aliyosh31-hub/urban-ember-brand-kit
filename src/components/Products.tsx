import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import productBong from "@/assets/product-bong.jpg";
import productVape from "@/assets/product-vape.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

const Products = () => {
  const products = [
    {
      title: "Premium Glass Collection",
      price: "$299",
      image: productBong,
      description: "Hand-blown borosilicate glass with LED accent lighting. Premium quality for the ultimate experience."
    },
    {
      title: "Luxury Vape Series",
      price: "$199",
      image: productVape,
      description: "Gold-finished precision vaporizer with temperature control and sleek modern design."
    },
    {
      title: "Essential Accessories",
      price: "$89",
      image: productAccessories,
      description: "Complete starter kit with grinder, papers, premium lighter and cleaning supplies."
    }
  ];

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-oswald mb-6 gradient-text">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium smoking accessories and luxury glass pieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;