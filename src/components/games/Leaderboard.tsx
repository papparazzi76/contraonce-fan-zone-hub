
import React from "react";

const Leaderboard: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-gold rounded-full opacity-20"></div>
        <h3 className="text-3xl font-display mb-6 text-brand-green">LEADERBOARD</h3>
        
        {[1, 2, 3, 4, 5].map((position) => (
          <div 
            key={position}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center">
              <span className={`flex items-center justify-center w-6 h-6 rounded-full ${
                position === 1 
                  ? "bg-brand-gold text-black" 
                  : position === 2
                  ? "bg-gray-300 text-black"
                  : position === 3
                  ? "bg-brand-gold/60 text-black"
                  : "bg-gray-100 text-gray-600"
              } text-xs font-bold mr-3`}>
                {position}
              </span>
              <div>
                <p className="font-medium">Usuario {position}</p>
                <p className="text-xs text-gray-500">Club Favorito {position}</p>
              </div>
            </div>
            <div className="font-display text-xl text-brand-green">
              {1000 - (position * 150)} pts
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-green rounded-full opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-40 bg-brand-gold rounded-full opacity-10"></div>
    </div>
  );
};

export default Leaderboard;
