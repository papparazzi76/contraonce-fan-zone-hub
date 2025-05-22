import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

// Player position types
type Position = "GK" | "DEF" | "MID" | "FWD";

// Formations
const VALID_FORMATIONS = ["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-3-2", "5-4-1"];

// Player interface
interface Player {
  id: number;
  name: string;
  position: Position;
  club: string;
  price: number;
  points: number;
  status?: "fit" | "doubt" | "injured" | "suspended";
  image?: string;
}

// Team interface
interface Team {
  players: Player[];
  formation: string;
  budget: number;
  captain?: number;
  viceCaptain?: number;
}

// Demo players data
const DEMO_PLAYERS: Player[] = [
  // Goalkeepers
  { id: 1, name: "Courtois", position: "GK", club: "Real Madrid", price: 6.5, points: 0, image: "https://i.imgur.com/placeholder.jpg" },
  { id: 2, name: "Ederson", position: "GK", club: "Man City", price: 6.0, points: 0 },
  { id: 3, name: "Alisson", position: "GK", club: "Liverpool", price: 6.0, points: 0 },
  
  // Defenders
  { id: 4, name: "Alexander-Arnold", position: "DEF", club: "Liverpool", price: 7.0, points: 0 },
  { id: 5, name: "Carvajal", position: "DEF", club: "Real Madrid", price: 5.5, points: 0 },
  { id: 6, name: "Van Dijk", position: "DEF", club: "Liverpool", price: 6.5, points: 0 },
  { id: 7, name: "Rüdiger", position: "DEF", club: "Real Madrid", price: 5.5, points: 0 },
  { id: 8, name: "Robertson", position: "DEF", club: "Liverpool", price: 6.5, points: 0 },
  { id: 9, name: "Militão", position: "DEF", club: "Real Madrid", price: 5.0, points: 0 },
  { id: 10, name: "Días", position: "DEF", club: "Man City", price: 6.0, points: 0 },
  
  // Midfielders
  { id: 11, name: "Rodri", position: "MID", club: "Man City", price: 7.0, points: 0 },
  { id: 12, name: "Modric", position: "MID", club: "Real Madrid", price: 8.0, points: 0 },
  { id: 13, name: "De Bruyne", position: "MID", club: "Man City", price: 9.5, points: 0 },
  { id: 14, name: "Valverde", position: "MID", club: "Real Madrid", price: 7.5, points: 0 },
  { id: 15, name: "Mac Allister", position: "MID", club: "Liverpool", price: 6.5, points: 0 },
  { id: 16, name: "Bellingham", position: "MID", club: "Real Madrid", price: 9.0, points: 0 },
  { id: 17, name: "Bernardo Silva", position: "MID", club: "Man City", price: 7.5, points: 0 },
  
  // Forwards
  { id: 18, name: "Haaland", position: "FWD", club: "Man City", price: 12.0, points: 0 },
  { id: 19, name: "Vinícius Jr.", position: "FWD", club: "Real Madrid", price: 11.0, points: 0 },
  { id: 20, name: "Salah", position: "FWD", club: "Liverpool", price: 10.5, points: 0 },
  { id: 21, name: "Mbappé", position: "FWD", club: "Real Madrid", price: 12.5, points: 0, status: "doubt" },
  { id: 22, name: "Darwin Núñez", position: "FWD", club: "Liverpool", price: 8.0, points: 0 },
  { id: 23, name: "Grealish", position: "FWD", club: "Man City", price: 7.5, points: 0 },
];

// Clubs for filtering
const CLUBS = ["Real Madrid", "Liverpool", "Man City", "All"];

const FantasyLeague = () => {
  // State management
  const [team, setTeam] = useState<Team>({
    players: [],
    formation: "4-3-3",
    budget: 100,
    captain: undefined,
    viceCaptain: undefined
  });
  
  const [activeTab, setActiveTab] = useState("myteam");
  const [clubFilter, setClubFilter] = useState("All");
  const [positionFilter, setPositionFilter] = useState<Position | "All">("All");
  const [savedMessage, setSavedMessage] = useState(false);
  
  // Calculate remaining budget
  const usedBudget = team.players.reduce((sum, player) => sum + player.price, 0);
  const remainingBudget = parseFloat((team.budget - usedBudget).toFixed(1));
  
  // Count players by position
  const countByPosition = {
    GK: team.players.filter(p => p.position === "GK").length,
    DEF: team.players.filter(p => p.position === "DEF").length,
    MID: team.players.filter(p => p.position === "MID").length,
    FWD: team.players.filter(p => p.position === "FWD").length
  };
  
  // Check if team is valid
  const isTeamValid = 
    team.players.length === 15 &&
    countByPosition.GK === 2 &&
    countByPosition.DEF === 5 &&
    countByPosition.MID === 5 &&
    countByPosition.FWD === 3 &&
    team.captain !== undefined;
  
  // Filter available players (those not in team)
  const availablePlayers = DEMO_PLAYERS.filter(
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
  
  // Load team from localStorage on initial render
  useEffect(() => {
    const savedTeam = localStorage.getItem("fantasy_team");
    if (savedTeam) {
      try {
        setTeam(JSON.parse(savedTeam));
      } catch (e) {
        console.error("Error loading saved team:", e);
      }
    }
  }, []);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-brand-green px-6 py-4 text-white flex justify-between items-center">
        <h2 className="text-xl font-display">FANTASY MUNDIAL DE CLUBES 2025</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-white/10 px-3 py-1 rounded-md text-sm">
            Presupuesto: <span className={`font-bold ${remainingBudget < 0 ? 'text-red-300' : 'text-white'}`}>
              {remainingBudget}M €
            </span>
          </div>
          <div className="bg-white/10 px-3 py-1 rounded-md text-sm">
            Jugadores: {team.players.length}/15
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="myteam" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="myteam">Mi Equipo</TabsTrigger>
          <TabsTrigger value="market">Mercado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="myteam" className="p-4">
          {team.players.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Equipo vacío</h3>
              <p className="text-gray-500 mb-4">Ficha jugadores desde la pestaña "Mercado" para empezar a armar tu equipo</p>
              <Button onClick={() => setActiveTab("market")}>Ir al mercado</Button>
            </div>
          ) : (
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
                              <TableRow key={player.id}>
                                <TableCell className="font-medium">
                                  <div className="flex items-center">
                                    {player.name}
                                    {player.status && (
                                      <Badge variant="outline" className="ml-2 text-xs">
                                        {player.status === "doubt" ? "Duda" : 
                                         player.status === "injured" ? "Lesionado" : "Sancionado"}
                                      </Badge>
                                    )}
                                  </div>
                                </TableCell>
                                <TableCell>{player.club}</TableCell>
                                <TableCell className="text-right">{player.price}M €</TableCell>
                                <TableCell className="text-center">
                                  <div className="flex justify-center space-x-1">
                                    <Toggle 
                                      size="sm"
                                      pressed={team.captain === player.id} 
                                      onPressedChange={() => setCaptain(player.id)}
                                      className="h-7 w-7 p-0 data-[state=on]:bg-yellow-400 data-[state=on]:text-black"
                                      title="Capitán"
                                    >
                                      C
                                    </Toggle>
                                    <Toggle 
                                      size="sm"
                                      pressed={team.viceCaptain === player.id} 
                                      onPressedChange={() => setViceCaptain(player.id)}
                                      className="h-7 w-7 p-0 data-[state=on]:bg-gray-200"
                                      title="Vice Capitán"
                                    >
                                      V
                                    </Toggle>
                                  </div>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => removePlayerFromTeam(player.id)}
                                    className="h-7 px-2 text-xs"
                                  >
                                    Quitar
                                  </Button>
                                </TableCell>
                              </TableRow>
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
          )}
        </TabsContent>
        
        <TabsContent value="market" className="p-4">
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
                <TableRow key={player.id}>
                  <TableCell>
                    <Badge variant={
                      player.position === "GK" ? "outline" :
                      player.position === "DEF" ? "secondary" :
                      player.position === "MID" ? "default" : "destructive"
                    }>
                      {player.position}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {player.name}
                      {player.status && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          {player.status === "doubt" ? "Duda" : 
                           player.status === "injured" ? "Lesionado" : "Sancionado"}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{player.club}</TableCell>
                  <TableCell className="text-right">{player.price}M €</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${countByPosition[player.position] >= 
                        (player.position === "GK" ? 2 : 
                         player.position === "DEF" ? 5 : 
                         player.position === "MID" ? 5 : 3) || 
                        player.price > remainingBudget ? 
                        'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => addPlayerToTeam(player)}
                      disabled={countByPosition[player.position] >= 
                        (player.position === "GK" ? 2 : 
                         player.position === "DEF" ? 5 : 
                         player.position === "MID" ? 5 : 3) || 
                        player.price > remainingBudget}
                    >
                      Fichar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {availablePlayers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No hay jugadores disponibles con los filtros seleccionados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FantasyLeague;
