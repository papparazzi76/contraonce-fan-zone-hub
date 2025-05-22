
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamView, { Team } from "./TeamView";
import MarketView from "./MarketView";
import { DEMO_PLAYERS } from "./data";
import { Position } from "./PlayerCard";

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
    player => !team.players.some(p => p.id === player.id)
  );
  
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
          <TeamView 
            team={team}
            setTeam={setTeam}
            isTeamValid={isTeamValid}
            setActiveTab={setActiveTab}
            savedMessage={savedMessage}
            setSavedMessage={setSavedMessage}
            countByPosition={countByPosition}
          />
        </TabsContent>
        
        <TabsContent value="market" className="p-4">
          <MarketView
            availablePlayers={availablePlayers}
            team={team}
            setTeam={setTeam}
            countByPosition={countByPosition}
            remainingBudget={remainingBudget}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FantasyLeague;
