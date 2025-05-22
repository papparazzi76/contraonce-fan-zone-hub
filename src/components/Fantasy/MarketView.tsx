
import React, { useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead } from "@/components/ui/table";
import { toast } from "sonner";
import PlayerCard, { Player, Position } from "./PlayerCard";
import { Team } from "./TeamView";

interface MarketViewProps {
  availablePlayers: Player[];
  team: Team;
  setTeam: React.Dispatch<React.SetStateAction<Team>>;
  countByPosition: Record<Position, number>;
  remainingBudget: number;
}

const CLUBS = ["Real Madrid", "Liverpool", "Man City", "All"];

const MarketView: React.FC<MarketViewProps> = ({
  availablePlayers: initialAvailablePlayers,
  team,
  setTeam,
  countByPosition,
  remainingBudget
}) => {
  const [clubFilter, setClubFilter] = useState("All");
  const [positionFilter, setPositionFilter] = useState<Position | "All">("All");

  // Filter available players (those not in team)
  const availablePlayers = initialAvailablePlayers.filter(
    player => !team.players.some(p => p.id === player.id) &&
    (clubFilter === "All" || player.club === clubFilter) &&
    (positionFilter === "All" || player.position === positionFilter)
  );

  // Handle adding player to team
  const addPlayerToTeam = (player: Player) => {
    // Check position limits
    const positionLimits = { GK: 2, DEF: 5, MID: 5, FWD: 3 };
    if (countByPosition[player.position] >= positionLimits[player.position]) {
      toast.error(`Máximo de ${positionLimits[player.position]} jugadores en posición ${player.position}`);
      return;
    }
    
    // Check budget
    if (player.price > remainingBudget) {
      toast.error("Presupuesto insuficiente");
      return;
    }
    
    // Add player
    setTeam(prev => ({
      ...prev,
      players: [...prev.players, player]
    }));
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <select
            className="border rounded px-3 py-1.5 text-sm"
            value={clubFilter}
            onChange={(e) => setClubFilter(e.target.value)}
          >
            {CLUBS.map(club => (
              <option key={club} value={club}>{club}</option>
            ))}
          </select>
          
          <select
            className="border rounded px-3 py-1.5 text-sm"
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value as Position | "All")}
          >
            <option value="All">Todas las posiciones</option>
            <option value="GK">Porteros</option>
            <option value="DEF">Defensas</option>
            <option value="MID">Centrocampistas</option>
            <option value="FWD">Delanteros</option>
          </select>
        </div>
        
        <div className="bg-brand-green text-white px-3 py-1 rounded-md text-sm">
          Presupuesto: {remainingBudget}M €
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">Pos</TableHead>
            <TableHead>Jugador</TableHead>
            <TableHead>Club</TableHead>
            <TableHead className="text-right">Precio</TableHead>
            <TableHead className="text-right w-[100px]">Acción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {availablePlayers.map(player => (
            <PlayerCard
              key={player.id}
              player={player}
              onAddPlayer={addPlayerToTeam}
              disableAdd={
                countByPosition[player.position] >= 
                (player.position === "GK" ? 2 : 
                 player.position === "DEF" ? 5 : 
                 player.position === "MID" ? 5 : 3) || 
                player.price > remainingBudget
              }
            />
          ))}
          {availablePlayers.length === 0 && (
            <TableRow>
              <td colSpan={5} className="text-center py-8 text-gray-500">
                No hay jugadores disponibles con los filtros seleccionados
              </td>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default MarketView;
