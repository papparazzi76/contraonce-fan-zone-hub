
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, Instagram, Twitter, Facebook, Youtube, Twitch } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Tienda", href: "/tienda" },
    { label: "Retro Corner", href: "/retro" },
    { label: "Comunidad", href: "/comunidad" },
    { label: "Juegos", href: "#juegos" },
    { label: "Recompensas", href: "#recompensas" }
  ];

  const socialIcons = [
    { Icon: Instagram, href: "#instagram", color: "#E1306C", ariaLabel: "Instagram" },
    { Icon: Twitter, href: "#twitter", color: "#1DA1F2", ariaLabel: "Twitter" },
    { Icon: Facebook, href: "#facebook", color: "#1877F2", ariaLabel: "Facebook" },
    { Icon: Youtube, href: "#youtube", color: "#FF0000", ariaLabel: "YouTube" },
    { Icon: Twitch, href: "#twitch", color: "#9146FF", ariaLabel: "Twitch" }
  ];

  const getUserInitials = () => {
    if (!user || !user.user_metadata) return '??';
    
    const name = user.user_metadata.name || user.user_metadata.full_name;
    if (!name) return user.email?.substring(0, 2).toUpperCase() || '??';
    
    const nameParts = name.split(' ');
    if (nameParts.length === 1) return nameParts[0].substring(0, 2).toUpperCase();
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d58c6cde-bb6b-4db1-98ff-4edf73f43433.png" 
                alt="11contraonce Logo" 
                className="h-10 w-auto" 
              />
              <span className="ml-2 text-xl font-display hidden sm:block">11CONTRAONCE</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center gap-2 mr-4">
            {socialIcons.map(({ Icon, href, color, ariaLabel }) => (
              <a 
                key={ariaLabel}
                href={href}
                aria-label={ariaLabel}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Icon size={20} color={color} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex md:items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border border-brand-green">
                  <AvatarImage src={user.user_metadata?.avatar_url || ''} alt={user.user_metadata?.name || 'Usuario'} />
                  <AvatarFallback className="bg-brand-green text-white">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1 text-brand-green border-brand-green hover:bg-brand-green/10"
                  onClick={signOut}
                >
                  <LogOut size={16} />
                  <span>Salir</span>
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button className="bg-brand-green hover:bg-brand-green/90">
                  Iniciar sesión
                </Button>
              </Link>
            )}
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
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              )
            ))}

            {/* Social Media Icons - Mobile */}
            <div className="flex items-center gap-3 px-3 py-2">
              {socialIcons.map(({ Icon, href, color, ariaLabel }) => (
                <a 
                  key={ariaLabel}
                  href={href}
                  aria-label={ariaLabel}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={toggleMenu}
                >
                  <Icon size={20} color={color} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            
            <div className="mt-4 px-3 py-2">
              {user ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border border-brand-green">
                      <AvatarImage src={user.user_metadata?.avatar_url || ''} alt={user.user_metadata?.name || 'Usuario'} />
                      <AvatarFallback className="bg-brand-green text-white">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.user_metadata?.name || user.user_metadata?.full_name || user.email}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 text-brand-green border-brand-green hover:bg-brand-green/10"
                    onClick={() => {
                      signOut();
                      toggleMenu();
                    }}
                  >
                    <LogOut size={16} />
                    <span>Cerrar sesión</span>
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={toggleMenu}>
                  <Button className="bg-brand-green hover:bg-brand-green/90 w-full">
                    Iniciar sesión
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
