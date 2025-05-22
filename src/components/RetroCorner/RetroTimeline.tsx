
import React, { useState } from "react";
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent 
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";

interface RetroTimelineProps {
  decade: string;
}

const RetroTimeline = ({ decade }: RetroTimelineProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const timelineItems = [
    { id: "brasil70", year: 1970, title: "Brasil tricampeón", decade: "70s" },
    { id: "cruyff74", year: 1974, title: "La naranja mecánica", decade: "70s" },
    { id: "italia78", year: 1978, title: "Argentina campeona", decade: "70s" },
    { id: "naranjito82", year: 1982, title: "Mundial Naranjito", decade: "80s" },
    { id: "maradona86", year: 1986, title: "La mano de Dios", decade: "80s" },
    { id: "holanda88", year: 1988, title: "Holanda campeona", decade: "80s" },
    { id: "usa94", year: 1994, title: "USA 94", decade: "90s" },
    { id: "united99", year: 1999, title: "Triplete del United", decade: "90s" },
    { id: "champions9x", year: 1999, title: "Champions clásicas", decade: "90s" },
    { id: "galacticos", year: 2002, title: "Era Galáctica", decade: "00s" },
    { id: "invincibles", year: 2004, title: "Los invencibles", decade: "00s" },
    { id: "spain0810", year: 2010, title: "España campeona", decade: "00s" },
  ];

  const filteredItems = decade === 'all' 
    ? timelineItems 
    : timelineItems.filter(item => item.decade === decade);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-display text-xl mb-4">HITOS DEL FÚTBOL</h3>
      <div className="space-y-2">
        {filteredItems.map((item) => (
          <Collapsible key={item.id} open={openItem === item.id} onOpenChange={() => handleToggle(item.id)}>
            <div className="border-l-4 border-brand-green pl-4 py-2">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <div>
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <h4 className="font-medium">{item.title}</h4>
                </div>
                {openItem === item.id ? (
                  <ChevronDown size={18} className="text-brand-green" />
                ) : (
                  <ChevronRight size={18} />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 text-sm text-gray-600">
                <p>
                  {item.id === "maradona86" 
                    ? "El histórico gol de Maradona contra Inglaterra en el Mundial de México, donde con una jugada individual anotó el mejor gol de los mundiales."
                    : `Momento histórico que marcó el fútbol y que puedes revivir con nuestras piezas de colección.`}
                </p>
                <div className="mt-2">
                  <a href="#" className="text-brand-green text-xs font-medium hover:underline">
                    Ver detalles
                  </a>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default RetroTimeline;
