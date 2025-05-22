
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import PlayerCard, { Player, Position } from "./PlayerCard";
import { toast } from "sonner";

// Team interface
export interface Team {
  players: Player[];
  formation: string;
  budget: number;
  captain?: number;
  viceCaptain?: number;
}

interface TeamViewProps {
  team: Team;
  setTeam: React.Dispatch<React.SetStateAction<Team>>;
  isTeamValid: boolean;
  setActiveTab: (tab: string) => void;
  savedMessage: boolean;
  setSavedMessage: (saved: boolean) => void;
  countByPosition: Record<Position, number>;
}

const VALID_FORMATIONS = ["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-3-2", "5-4-1"];

const TeamView: React.FC<TeamViewProps> = ({
  team,
  setTeam,
  isTeamValid,
  setActiveTab,
  savedMessage,
  setSavedMessage,
  countByPosition
}) => {
  // Handle removing player from team
  const removePlayerFromTeam = (playerId: number) => {
    // If captain, remove captain
    if (team.captain === playerId) {
      setTeam(prev => ({
        ...prev,
        captain: undefined
      }));
    }
    
    // If vice captain, remove vice captain
    if (team.viceCaptain === playerId) {
      setTeam(prev => ({
        ...prev,
        viceCaptain: undefined
      }));
    }
    
    // Remove player
    setTeam(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== playerId)
    }));
  };
  
  // Handle setting captain
  const setCaptain = (playerId: number) => {
    // If already vice captain, swap
    if (team.viceCaptain === playerId) {
      setTeam(prev => ({
        ...prev,
        viceCaptain: prev.captain,
        captain: playerId
      }));
      return;
    }
    
    setTeam(prev => ({
      ...prev,
      captain: playerId
    }));
  };
  
  // Handle setting vice captain
  const setViceCaptain = (playerId: number) => {
    // If already captain, swap
    if (team.captain === playerId) {
      setTeam(prev => ({
        ...prev,
        captain: prev.viceCaptain,
        viceCaptain: playerId
      }));
      return;
    }
    
    setTeam(prev => ({
      ...prev,
      viceCaptain: playerId
    }));
  };
  
  // Save team
  const saveTeam = () => {
    if (!isTeamValid) {
      toast.error("El equipo no cumple con los requisitos");
      return;
    }
    
    // In a real app, this would save to backend
    localStorage.setItem("fantasy_team", JSON.stringify(team));
    setSavedMessage(true);
    toast.success("Equipo guardado correctamente");
    
    setTimeout(() => {
      setSavedMessage(false);
    }, 3000);
  };
  
  if (team.players.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">Equipo vacío</h3>
        <p className="text-gray-500 mb-4">Ficha jugadores desde la pestaña "Mercado" para empezar a armar tu equipo</p>
        <Button onClick={() => setActiveTab("market")}>Ir al mercado</Button>
      </div>
    );
  }

  return (
    <>
      {savedMessage && (
        <Alert className="mb-4 bg-green-50 border-green-200">
          <AlertTitle>Equipo guardado</AlertTitle>
          <AlertDescription>
            Tu equipo ha sido guardado correctamente.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="flex flex-col gap-4">
        {["GK", "DEF", "MID", "FWD"].map((position) => (
          <Card key={position} className="shadow-sm">
            <CardHeader className="py-2 px-4 bg-gray-50">
              <CardTitle className="text-sm font-medium flex justify-between items-center">
                <span>{position === "GK" ? "Porteros" : 
                      position === "DEF" ? "Defensas" :
                      position === "MID" ? "Centrocampistas" : "Delanteros"}</span>
                <span className="text-xs text-gray-500">
                  {team.players.filter(p => p.position === position).length}/
                  {position === "GK" ? 2 : position === "DEF" ? 5 : position === "MID" ? 5 : 3}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Jugador</TableHead>
                    <TableHead>Club</TableHead>
                    <TableHead className="text-right">Precio</TableHead>
                    <TableHead className="text-center w-[100px]">Capitán</TableHead>
                    <TableHead className="text-right w-[80px]">Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {team.players
                    .filter(p => p.position === position)
                    .map(player => (
                      <PlayerCard
                        key={player.id}
                        player={player}
                        isInTeam={true}
                        isCaptain={team.captain === player.id}
                        isViceCaptain={team.viceCaptain === player.id}
                        onRemovePlayer={removePlayerFromTeam}
                        onSetCaptain={setCaptain}
                        onSetViceCaptain={setViceCaptain}
                      />
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
        
        <div className="flex justify-between mt-4">
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500">Formación:</span>
            <select 
              className="border rounded px-2 py-1 text-sm"
              value={team.formation}
              onChange={(e) => setTeam(prev => ({ ...prev, formation: e.target.value }))}
            >
              {VALID_FORMATIONS.map(formation => (
                <option key={formation} value={formation}>{formation}</option>
              ))}
            </select>
          </div>
          
          <Button 
            onClick={saveTeam}
            disabled={!isTeamValid}
            className="bg-brand-green hover:bg-brand-green/90"
          >
            Guardar Equipo
          </Button>
        </div>
        
        {!isTeamValid && (
          <Alert className="mt-4 bg-amber-50 border-amber-200">
            <AlertTitle>Equipo incompleto</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 text-sm">
                {team.players.length < 15 && <li>Debes seleccionar 15 jugadores</li>}
                {countByPosition.GK !== 2 && <li>Necesitas exactamente 2 porteros</li>}
                {countByPosition.DEF !== 5 && <li>Necesitas exactamente 5 defensas</li>}
                {countByPosition.MID !== 5 && <li>Necesitas exactamente 5 centrocampistas</li>}
                {countByPosition.FWD !== 3 && <li>Necesitas exactamente 3 delanteros</li>}
                {team.captain === undefined && <li>Debes seleccionar un capitán</li>}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default TeamView;
