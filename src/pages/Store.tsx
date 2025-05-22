
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const Store = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Categories based on your documentation
  const categories = [
    { id: "all", name: "Todos" },
    { id: "equipaciones", name: "Equipaciones actuales" },
    { id: "vintage", name: "Vintage" },
    { id: "merchandising", name: "Merchandising" },
    { id: "coleccionables", name: "Coleccionables" },
    { id: "tecnologia", name: "Tecnología & Gaming" },
    { id: "accesorios", name: "Accesorios de entrenamiento" },
    { id: "lifestyle", name: "Lifestyle" },
    { id: "packs", name: "Packs regalo" },
    { id: "drops", name: "Drops limitados" },
  ];

  // Example products
  const products = [
    {
      id: "prod1",
      name: "Camiseta Real Madrid Home 24/25",
      sku: "MAD-24-H-M",
      category: "equipaciones",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=400&fit=crop",
      badge: "Nuevo",
    },
    {
      id: "prod2",
      name: "Brasil 1970 réplica",
      sku: "BRA-70-H-L",
      category: "vintage",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=400&fit=crop",
      badge: "Retro",
    },
    {
      id: "prod3",
      name: "Bufanda oficial 11contraonce",
      sku: "BUF-11X11-ORG",
      category: "merchandising",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
    },
    {
      id: "prod4",
      name: "Balón réplica Pelé firmado",
      sku: "BALL-PELE-SIG",
      category: "coleccionables",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop",
      badge: "Exclusivo",
    },
    {
      id: "prod5",
      name: "Mando PS5 Real Madrid",
      sku: "PS5-RMA-CTRLR",
      category: "tecnologia",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
    },
    {
      id: "prod6",
      name: "Argentina Away 25",
      sku: "ARG-25-AWAY-M",
      category: "equipaciones",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
      badge: "-15%",
    },
    {
      id: "prod7",
      name: "Mystery Box Vintage 90s",
      sku: "BOX-MYST-V90",
      category: "packs",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=400&fit=crop",
      badge: "Limited",
    },
    {
      id: "prod8",
      name: "Sudadera 11contraonce",
      sku: "HOOD-11X11-BLK",
      category: "lifestyle",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop",
    },
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="bg-gray-900 text-white relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">TIENDA 11CONTRAONCE</h1>
          <p className="text-xl max-w-2xl mb-8">
            Equipaciones actuales, vintage, merchandising y coleccionables exclusivos para los verdaderos amantes del fútbol.
          </p>
          <div className="flex items-center">
            <span className="bg-brand-gold text-black px-3 py-1 rounded-md text-sm font-medium mr-4">
              Envíos gratis +50€
            </span>
            <span className="bg-brand-green text-white px-3 py-1 rounded-md text-sm font-medium">
              +10 GOLES en cada compra
            </span>
          </div>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="bg-white sticky top-16 z-30 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto flex py-4 no-scrollbar">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-brand-green text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display">{
              activeCategory === "all" 
                ? "TODOS LOS PRODUCTOS" 
                : categories.find(c => c.id === activeCategory)?.name.toUpperCase()
            }</h2>
            <div className="flex items-center text-sm text-gray-500">
              <span>{filteredProducts.length} productos</span>
              {/* Add filters button here if needed */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale">
                <div className="relative h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-brand-gold text-black px-2 py-1 text-xs font-medium rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-display text-xl">{product.price.toFixed(2)}€</span>
                    <Button size="sm">
                      <ShoppingCart size={16} className="mr-1" />
                      Añadir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Store;
