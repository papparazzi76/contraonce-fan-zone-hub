
import React from "react";
import { Instagram, Facebook, Youtube, Twitter, Twitch } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const sections = [
    {
      title: "Secciones",
      links: [
        { label: "Home", href: "/" },
        { label: "Tienda", href: "#tienda" },
        { label: "Retro Corner", href: "#retro" },
        { label: "Comunidad", href: "#comunidad" },
        { label: "Juegos", href: "#juegos" }
      ]
    },
    {
      title: "Ayuda",
      links: [
        { label: "Preguntas Frecuentes", href: "#faq" },
        { label: "Devoluciones", href: "#devoluciones" },
        { label: "Contacto", href: "#contacto" },
        { label: "Política de Privacidad", href: "#privacidad" },
        { label: "Términos y Condiciones", href: "#terminos" }
      ]
    },
    {
      title: "Síguenos",
      links: [
        { label: "Instagram", href: "#instagram" },
        { label: "Twitter", href: "#twitter" },
        { label: "Facebook", href: "#facebook" },
        { label: "YouTube", href: "#youtube" },
        { label: "Twitch", href: "#twitch" },
        { label: "TikTok", href: "#tiktok" }
      ]
    }
  ];

  const socialIcons = {
    instagram: <Instagram size={20} />,
    twitter: <Twitter size={20} />,
    facebook: <Facebook size={20} />,
    youtube: <Youtube size={20} />,
    twitch: <Twitch size={20} />,
    tiktok: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        stroke="none"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/d58c6cde-bb6b-4db1-98ff-4edf73f43433.png" 
                alt="11contraonce Logo" 
                className="h-10 w-auto" 
              />
              <span className="ml-2 text-xl font-display text-white">11CONTRAONCE</span>
            </div>
            <p className="text-gray-400 mb-4">
              La plataforma definitiva para los verdaderos amantes del fútbol. 
              Coleccionismo, historia, predicciones y recompensas en un solo lugar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#instagram"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-green transition-colors"
                aria-label="Instagram"
              >
                {socialIcons.instagram}
              </a>
              <a 
                href="#twitter"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-green transition-colors"
                aria-label="Twitter/X"
              >
                {socialIcons.twitter}
              </a>
              <a 
                href="#facebook"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-green transition-colors"
                aria-label="Facebook"
              >
                {socialIcons.facebook}
              </a>
              <a 
                href="#youtube"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-green transition-colors"
                aria-label="YouTube"
              >
                {socialIcons.youtube}
              </a>
              <a 
                href="#twitch"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-green transition-colors"
                aria-label="Twitch"
              >
                {socialIcons.twitch}
              </a>
              <a 
                href="#tiktok"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-green transition-colors"
                aria-label="TikTok"
              >
                {socialIcons.tiktok}
              </a>
            </div>
          </div>
          
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-brand-green transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} 11contraonce. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#privacidad" className="text-gray-400 hover:text-brand-green text-sm">
              Privacidad
            </a>
            <a href="#terminos" className="text-gray-400 hover:text-brand-green text-sm">
              Términos
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-brand-green text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
