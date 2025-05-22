import { Player } from "./PlayerCard";

// Demo players data
export const DEMO_PLAYERS: Player[] = [
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

export const VALID_FORMATIONS = ["3-4-3", "3-5-2", "4-3-3", "4-4-2", "4-5-1", "5-3-2", "5-4-1"];
