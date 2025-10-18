import React from 'react';

const Board = ({ players, currentPlayerIndex, onTokenMove, lastSpin, currentPlayer }) => {
  const renderCell = (position, isSafe = false) => {
    const tokensInCell = [];
    
    players.forEach((player, playerIndex) => {
      player.tokens.forEach((token, tokenIndex) => {
        if (!token.isHome && token.position === position) {
          tokensInCell.push({
            playerIndex,
            tokenIndex,
            color: player.color
          });
        }
      });
    });

    return (
      <div 
        className={`w-8 h-8 border border-gray-300 flex items-center justify-center relative ${
          isSafe ? 'bg-yellow-100' : 'bg-white'
        }`}
      >
        {tokensInCell.map((token, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full border-2 border-white shadow-md absolute`}
            style={{ 
              backgroundColor: token.color,
              left: index % 2 === 0 ? '2px' : '18px',
              top: index < 2 ? '2px' : '18px',
              zIndex: index
            }}
          />
        ))}
      </div>
    );
  };

  const renderHomeCell = (playerIndex, tokenIndex, player) => {
    const token = player.tokens[tokenIndex];
    
    return (
      <div
        key={tokenIndex}
        onClick={() => {
          if (playerIndex === currentPlayerIndex && lastSpin) {
            onTokenMove(playerIndex, tokenIndex, lastSpin);
          }
        }}
        className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
          playerIndex === currentPlayerIndex && lastSpin 
            ? 'hover:scale-110 hover:shadow-lg' 
            : ''
        } ${
          token.isHome 
            ? `bg-${player.color}-200 border-${player.color}-400` 
            : `bg-${player.color}-500 border-${player.color}-700`
        }`}
      >
        {!token.isHome && (
          <div className="w-full h-full rounded-full bg-white bg-opacity-20"></div>
        )}
      </div>
    );
  };

  // Safe cells positions
  const safeCells = [0, 8, 13, 21, 26, 34, 39, 47];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Ludo Board</h2>
      
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Main Board Grid */}
        <div className="grid grid-cols-15 grid-rows-15 gap-0 bg-gray-100 p-4 rounded-lg">
          {/* Top Row */}
          {Array.from({ length: 15 }, (_, i) => (
            <div key={`top-${i}`} className="col-start-2 row-start-1">
              {renderCell(i, safeCells.includes(i))}
            </div>
          ))}

          {/* Right Column */}
          {Array.from({ length: 13 }, (_, i) => (
            <div key={`right-${i}`} className="col-start-15 row-start-2">
              {renderCell(15 + i, safeCells.includes(15 + i))}
            </div>
          ))}

          {/* Bottom Row */}
          {Array.from({ length: 15 }, (_, i) => (
            <div key={`bottom-${i}`} className="col-start-14 row-start-15">
              {renderCell(28 + i, safeCells.includes(28 + i))}
            </div>
          ))}

          {/* Left Column */}
          {Array.from({ length: 13 }, (_, i) => (
            <div key={`left-${i}`} className="col-start-1 row-start-14">
              {renderCell(43 + i, safeCells.includes(43 + i))}
            </div>
          ))}

          {/* Player Homes */}
          {/* Red Home (Top Left) */}
          <div className="col-start-2 col-span-6 row-start-2 row-span-6 bg-red-100 border-2 border-red-300 rounded-lg p-2 grid grid-cols-2 gap-2">
            {players[0].tokens.map((_, tokenIndex) => 
              renderHomeCell(0, tokenIndex, players[0])
            )}
          </div>

          {/* Green Home (Top Right) */}
          <div className="col-start-9 col-span-6 row-start-2 row-span-6 bg-green-100 border-2 border-green-300 rounded-lg p-2 grid grid-cols-2 gap-2">
            {players[2].tokens.map((_, tokenIndex) => 
              renderHomeCell(2, tokenIndex, players[2])
            )}
          </div>

          {/* Yellow Home (Bottom Left) */}
          <div className="col-start-2 col-span-6 row-start-9 row-span-6 bg-yellow-100 border-2 border-yellow-300 rounded-lg p-2 grid grid-cols-2 gap-2">
            {players[3].tokens.map((_, tokenIndex) => 
              renderHomeCell(3, tokenIndex, players[3])
            )}
          </div>

          {/* Blue Home (Bottom Right) */}
          <div className="col-start-9 col-span-6 row-start-9 row-span-6 bg-blue-100 border-2 border-blue-300 rounded-lg p-2 grid grid-cols-2 gap-2">
            {players[1].tokens.map((_, tokenIndex) => 
              renderHomeCell(1, tokenIndex, players[1])
            )}
          </div>

          {/* Center Home */}
          <div className="col-start-7 col-span-3 row-start-7 row-span-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm text-center">HOME</span>
          </div>
        </div>

        {/* Current Player Indicator */}
        <div className="mt-4 text-center">
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full text-white font-bold"
            style={{ backgroundColor: currentPlayer.color }}
          >
            {currentPlayer.name}'s Turn
          </div>
          {lastSpin && (
            <p className="text-gray-600 mt-2">
              Last spin: <span className="font-bold">{lastSpin}</span>
              {lastSpin === 6 && <span className="text-green-600 ml-2">(Extra Turn!)</span>}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;