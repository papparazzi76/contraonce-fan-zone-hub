
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Award } from "lucide-react";

interface RetroGridProps {
  decade: string;
}

const RetroGrid = ({ decade }: RetroGridProps) => {
  const retroProducts = [
    {
      id: "brasil70",
      name: "Brasil 1970 réplica",
      year: 1970,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1569078517723-9196a0644995?w=500&h=400&fit=crop",
      badge: "Auténtica",
      decade: "70s",
    },
    {
      id: "argentina78",
      name: "Argentina 1978 campeona",
      year: 1978,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1599577180618-cc7945b3a61d?w=500&h=400&fit=crop",
      badge: "Réplica",
      decade: "70s",
    },
    {
      id: "germany74",
      name: "Alemania 1974 local",
      year: 1974,
      price: 84.99,
      image: "https://images.unsplash.com/photo-1577124999548-1db21d1404ff?w=500&h=400&fit=crop",
      badge: "Réplica",
      decade: "70s",
    },
    {
      id: "maradona86",
      name: "Argentina 1986 Maradona",
      year: 1986,
      price: 129.99,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=400&fit=crop",
      badge: "Firmada",
      decade: "80s",
    },
    {
      id: "holanda88",
      name: "Holanda 1988 Van Basten",
      year: 1988,
      price: 94.99,
      image: "https://images.unsplash.com/photo-1565462900119-a16b91dead9f?w=500&h=400&fit=crop",
      badge: "Réplica",
      decade: "80s",
    },
    {
      id: "italia90",
      name: "Italia 1990 local",
      year: 1990,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1473976345543-9ffc928e648d?w=500&h=400&fit=crop",
      badge: "Limited",
      decade: "90s",
    },
    {
      id: "united99",
      name: "Manchester United 1999",
      year: 1999,
      price: 99.99,
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=500&h=400&fit=crop",
      badge: "Champions",
      decade: "90s",
    },
    {
      id: "brazil02",
      name: "Brasil 2002 pentacampeón",
      year: 2002,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&h=400&fit=crop",
      badge: "Ronaldo",
      decade: "00s",
    },
    {
      id: "spain10",
      name: "España 2010 campeona",
      year: 2010,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1624280157150-4d1ed8951f10?w=500&h=400&fit=crop",
      badge: "Mundial",
      decade: "00s",
    },
  ];

  const filteredProducts = decade === 'all' 
    ? retroProducts
    : retroProducts.filter(product => product.decade === decade);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden hover-scale">
          <div className="relative h-64">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <Badge variant="default" className="bg-brand-gold text-black">
                {product.badge}
              </Badge>
              <Badge variant="outline" className="bg-white">
                {product.year}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <div className="flex items-center">
                <Award size={16} className="text-brand-gold mr-1" />
                <span className="text-white text-xs">Pieza de colección</span>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="font-display text-xl">{product.price.toFixed(2)}€</span>
              <Button size="sm">
                <ShoppingCart size={16} className="mr-1" />
                Añadir
              </Button>
            </div>
            <div className="mt-3">
              <a href="#" className="text-brand-green text-sm hover:underline">
                Ver historia completa
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RetroGrid;
