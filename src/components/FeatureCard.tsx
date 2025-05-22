
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  buttonText?: string;
  buttonLink?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  buttonText = "Explorar",
  buttonLink = "#"
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover-scale hover:shadow-lg border border-gray-100",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-display">{title}</h3>
          <div className="bg-brand-green/10 p-2 rounded-full">{icon}</div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={buttonLink}
          className="inline-flex items-center font-medium text-brand-green hover:text-brand-green/80"
        >
          {buttonText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="ml-1 h-4 w-4"
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
