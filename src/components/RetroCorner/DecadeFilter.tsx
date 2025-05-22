
import React from "react";
import { Button } from "@/components/ui/button";

interface DecadeFilterProps {
  activeDecade: string;
  setActiveDecade: (decade: string) => void;
}

const DecadeFilter = ({ activeDecade, setActiveDecade }: DecadeFilterProps) => {
  const decades = [
    { id: "all", name: "Todo" },
    { id: "70s", name: "70s" },
    { id: "80s", name: "80s" },
    { id: "90s", name: "90s" },
    { id: "00s", name: "00s" },
  ];

  return (
    <div className="flex justify-center overflow-x-auto no-scrollbar">
      <div className="flex space-x-2">
        {decades.map((decade) => (
          <Button
            key={decade.id}
            onClick={() => setActiveDecade(decade.id)}
            variant={activeDecade === decade.id ? "default" : "outline"}
            className={activeDecade === decade.id ? "bg-brand-green" : ""}
            size="lg"
          >
            {decade.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DecadeFilter;
