
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Tienda", href: "#tienda" },
    { label: "Retro Corner", href: "#retro" },
    { label: "Comunidad", href: "#comunidad" },
    { label: "Juegos", href: "#juegos" },
    { label: "Recompensas", href: "#recompensas" }
  ];

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d58c6cde-bb6b-4db1-98ff-4edf73f43433.png" 
                alt="11contraonce Logo" 
                className="h-10 w-auto" 
              />
              <span className="ml-2 text-xl font-display hidden sm:block">11CONTRAONCE</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex md:items-center">
            <Button className="bg-brand-green hover:bg-brand-green/90">
              Únete ahora
            </Button>
          </div>
          
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-black hover:text-brand-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 px-3 py-2">
              <Button className="bg-brand-green hover:bg-brand-green/90 w-full">
                Únete ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
