
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
}: FeatureCardProps) => {
  // Handle both internal links (starting with /) and anchor links (starting with #)
  const isInternalLink = buttonLink.startsWith("/");
  const isAnchorLink = buttonLink.startsWith("#");
  
  return (
    <Card className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="font-display text-xl">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        {isInternalLink ? (
          <Link to={buttonLink}>
            <Button className="bg-brand-green hover:bg-brand-green/90 w-full">
              {buttonText}
            </Button>
          </Link>
        ) : (
          <a href={buttonLink}>
            <Button className="bg-brand-green hover:bg-brand-green/90 w-full">
              {buttonText}
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
