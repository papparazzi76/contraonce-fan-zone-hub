
import React from "react";

interface BenefitsListProps {
  benefits: string[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <ul className="space-y-3 mb-8">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center">
          <div className="mr-3 bg-brand-gold text-black rounded-full p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {benefit}
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
