
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

// Player position types
export type Position = "GK" | "DEF" | "MID" | "FWD";

// Player interface
export interface Player {
  id: number;
  name: string;
  position: Position;
  club: string;
  price: number;
  points: number;
  status?: "fit" | "doubt" | "injured" | "suspended";
  image?: string;
}

interface PlayerCardProps {
  player: Player;
  isInTeam?: boolean;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
  onAddPlayer?: (player: Player) => void;
  onRemovePlayer?: (playerId: number) => void;
  onSetCaptain?: (playerId: number) => void;
  onSetViceCaptain?: (playerId: number) => void;
  disableAdd?: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  isInTeam = false,
  isCaptain = false,
  isViceCaptain = false,
  onAddPlayer,
  onRemovePlayer,
  onSetCaptain,
  onSetViceCaptain,
  disableAdd = false,
}) => {
  return (
    <tr>
      {!isInTeam && (
        <td>
          <Badge variant={
            player.position === "GK" ? "outline" :
            player.position === "DEF" ? "secondary" :
            player.position === "MID" ? "default" : "destructive"
          }>
            {player.position}
          </Badge>
        </td>
      )}
      <td className="font-medium">
        <div className="flex items-center">
          {player.name}
          {player.status && (
            <Badge variant="outline" className="ml-2 text-xs">
              {player.status === "doubt" ? "Duda" : 
              player.status === "injured" ? "Lesionado" : "Sancionado"}
            </Badge>
          )}
        </div>
      </td>
      <td>{player.club}</td>
      <td className="text-right">{player.price}M €</td>
      
      {isInTeam && (
        <>
          <td className="text-center">
            <div className="flex justify-center space-x-1">
              <Toggle 
                size="sm"
                pressed={isCaptain} 
                onPressedChange={() => onSetCaptain?.(player.id)}
                className="h-7 w-7 p-0 data-[state=on]:bg-yellow-400 data-[state=on]:text-black"
                title="Capitán"
              >
                C
              </Toggle>
              <Toggle 
                size="sm"
                pressed={isViceCaptain} 
                onPressedChange={() => onSetViceCaptain?.(player.id)}
                className="h-7 w-7 p-0 data-[state=on]:bg-gray-200"
                title="Vice Capitán"
              >
                V
              </Toggle>
            </div>
          </td>
          <td className="text-right">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onRemovePlayer?.(player.id)}
              className="h-7 px-2 text-xs"
            >
              Quitar
            </Button>
          </td>
        </>
      )}
      
      {!isInTeam && (
        <td className="text-right">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onAddPlayer?.(player)}
            disabled={disableAdd}
            className={`h-7 px-2 text-xs ${disableAdd ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Fichar
          </Button>
        </td>
      )}
    </tr>
  );
};

export default PlayerCard;
