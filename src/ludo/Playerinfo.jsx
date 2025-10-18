import React from 'react';

const PlayerInfo = ({ players, currentPlayerIndex, lastSpin, extraTurn }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Players</h2>
      
      <div className="space-y-4">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`p-4 rounded-lg border-2 transition-all ${
              index === currentPlayerIndex 
                ? 'border-purple-500 bg-purple-50 shadow-md' 
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div 
                  className="w-6 h-6 rounded-full mr-3 border-2 border-white shadow-sm"
                  style={{ backgroundColor: player.color }}
                ></div>
                <span className="font-bold text-gray-800">{player.name}</span>
              </div>
              {index === currentPlayerIndex && (
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-bold">
                  Current
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {player.tokens.map((token, tokenIndex) => (
                <div
                  key={tokenIndex}
                  className={`text-center p-2 rounded border ${
                    token.isHome 
                      ? 'bg-gray-100 border-gray-300' 
                      : 'bg-green-100 border-green-300'
                  }`}
                >
                  <div 
                    className="w-4 h-4 rounded-full mx-auto mb-1 border border-white"
                    style={{ backgroundColor: player.color }}
                  ></div>
                  <span className="text-xs font-bold">
                    {token.isHome ? 'Home' : `Pos: ${token.position + 1}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Game Status */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Game Status</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Current Player:</span>
            <span className="font-bold" style={{ color: players[currentPlayerIndex].color }}>
              {players[currentPlayerIndex].name}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Last Spin:</span>
            <span className="font-bold">{lastSpin || 'None'}</span>
          </div>
          {extraTurn && (
            <div className="flex justify-between text-green-600 font-bold">
              <span>Extra Turn:</span>
              <span>Active!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;