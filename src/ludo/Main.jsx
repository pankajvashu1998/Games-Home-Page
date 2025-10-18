import React, { useState, useEffect } from 'react';

function Main() {
  const [players, setPlayers] = useState([
    { 
      id: 1, 
      name: 'Player 1', 
      color: 'red', 
      tokens: [
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 }
      ], 
      isActive: true 
    },
    { 
      id: 2, 
      name: 'Player 2', 
      color: 'blue', 
      tokens: [
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 }
      ], 
      isActive: false 
    },
    { 
      id: 3, 
      name: 'Player 3', 
      color: 'green', 
      tokens: [
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 }
      ], 
      isActive: false 
    },
    { 
      id: 4, 
      name: 'Player 4', 
      color: 'yellow', 
      tokens: [
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 },
        { position: -1, isHome: true, path: 0 }
      ], 
      isActive: false 
    }
  ]);
  
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [lastSpin, setLastSpin] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [extraTurn, setExtraTurn] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);

  const currentPlayer = players[currentPlayerIndex];

  const handleSpinResult = (number) => {
    if (winner) return;
    
    console.log("Spun:", number);
    setLastSpin(number);
    setGameStarted(true);

    if (number === 6) {
      setExtraTurn(true);
    }

    // Check available moves
    const availableMoves = [];
    currentPlayer.tokens.forEach((token, index) => {
      if (canTokenMove(currentPlayer, token, index, number)) {
        availableMoves.push(index);
      }
    });

    console.log("Available moves:", availableMoves);
    
    if (availableMoves.length === 0) {
      console.log("No moves available, moving to next player");
      nextPlayer();
    } else {
      setSelectedToken(null);
    }
  };

  const canTokenMove = (player, token, tokenIndex, steps) => {
    // If token is home, can only move if spin is 6
    if (token.isHome) {
      return steps === 6;
    }
    
    // If token is on board, can always move (simplified logic)
    return true;
  };

  const moveToken = (playerIndex, tokenIndex) => {
    if (winner || playerIndex !== currentPlayerIndex || !lastSpin) return;

    console.log(`Moving player ${playerIndex}, token ${tokenIndex} by ${lastSpin} steps`);

    setPlayers(prev => prev.map((player, pIndex) => {
      if (pIndex !== playerIndex) return player;

      const newTokens = [...player.tokens];
      const token = newTokens[tokenIndex];

      if (token.isHome && lastSpin === 6) {
        // Move token out of home to starting position
        newTokens[tokenIndex] = { 
          position: playerIndex * 13, 
          isHome: false, 
          path: 0 
        };
        console.log(`Token ${tokenIndex} moved out of home to position ${playerIndex * 13}`);
      } else if (!token.isHome) {
        // Move token on board
        const newPosition = (token.position + lastSpin) % 52;
        newTokens[tokenIndex] = { 
          position: newPosition, 
          isHome: false, 
          path: 0 
        };
        console.log(`Token ${tokenIndex} moved from ${token.position} to ${newPosition}`);
        
        // Check for captures
        checkCapture(playerIndex, tokenIndex, newPosition);
      }

      return { ...player, tokens: newTokens };
    }));

    // Reset for next turn
    if (lastSpin !== 6 || !extraTurn) {
      nextPlayer();
    } else {
      setExtraTurn(false);
    }
    
    setLastSpin(null);
    setSelectedToken(null);
  };

  const checkCapture = (playerIndex, tokenIndex, position) => {
    setPlayers(prev => prev.map((player, pIndex) => {
      if (pIndex === playerIndex) return player;

      const newTokens = player.tokens.map((token, tIndex) => {
        if (!token.isHome && token.position === position) {
          console.log(`Captured player ${pIndex}'s token ${tIndex}`);
          return { position: -1, isHome: true, path: 0 };
        }
        return token;
      });

      return { ...player, tokens: newTokens };
    }));
  };

  const nextPlayer = () => {
    setCurrentPlayerIndex(prev => (prev + 1) % players.length);
    setLastSpin(null);
    setExtraTurn(false);
    setSelectedToken(null);
    console.log("Next player:", (currentPlayerIndex + 1) % players.length);
  };

  const startNewGame = () => {
    setPlayers([
      { 
        id: 1, 
        name: 'Player 1', 
        color: 'red', 
        tokens: [
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 }
        ], 
        isActive: true 
      },
      { 
        id: 2, 
        name: 'Player 2', 
        color: 'blue', 
        tokens: [
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 }
        ], 
        isActive: false 
      },
      { 
        id: 3, 
        name: 'Player 3', 
        color: 'green', 
        tokens: [
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 }
        ], 
        isActive: false 
      },
      { 
        id: 4, 
        name: 'Player 4', 
        color: 'yellow', 
        tokens: [
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 },
          { position: -1, isHome: true, path: 0 }
        ], 
        isActive: false 
      }
    ]);
    setCurrentPlayerIndex(0);
    setLastSpin(null);
    setGameStarted(false);
    setWinner(null);
    setExtraTurn(false);
    setSelectedToken(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">Ludo with Spinner</h1>
        <p className="text-white text-center mb-8">Traditional Ludo meets modern spinner!</p>
        
        {winner !== null && (
          <div className="bg-green-500 text-white p-4 rounded-lg text-center mb-4">
            <h2 className="text-2xl font-bold">🎉 Player {winner + 1} Wins! 🎉</h2>
            <button 
              onClick={startNewGame}
              className="mt-2 bg-white text-green-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100"
            >
              Play Again
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Board 
              players={players}
              currentPlayerIndex={currentPlayerIndex}
              onTokenMove={moveToken}
              lastSpin={lastSpin}
              currentPlayer={currentPlayer}
            />
          </div>
          
          <div className="space-y-6">
            <Spinner onSpinResult={handleSpinResult} />
            
            <PlayerInfo 
              players={players}
              currentPlayerIndex={currentPlayerIndex}
              lastSpin={lastSpin}
              extraTurn={extraTurn}
              onTokenSelect={setSelectedToken}
              selectedToken={selectedToken}
              onMoveToken={moveToken}
            />
            
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <button 
                onClick={startNewGame}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
              >
                New Game
              </button>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-lg">
              <h3 className="font-bold text-lg mb-2">Game Rules</h3>
              <ul className="text-sm space-y-1">
                <li>• Spin 6 to get a token out or get extra turn</li>
                <li>• Click on your token after spinning to move it</li>
                <li>• Capture opponent tokens by landing on them</li>
                <li>• First to get all tokens home wins!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Spinner Component
const Spinner = ({ onSpinResult }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6];
  const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedNumber(null);

    // Generate random spins
    const spins = 5 + Math.floor(Math.random() * 5);
    const randomIndex = Math.floor(Math.random() * 6);
    const finalRotation = spins * 360 + (randomIndex * 60);

    setRotation(rotation + finalRotation);

    setTimeout(() => {
      const result = numbers[randomIndex];
      setSelectedNumber(result);
      setIsSpinning(false);
      onSpinResult(result);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Spinner Wheel</h2>
      
      <div className="relative w-64 h-64 mx-auto mb-4">
        {/* Spinner Wheel */}
        <div 
          className="relative w-full h-full rounded-full border-4 border-gray-300 overflow-hidden transition-transform duration-3000 ease-out"
          style={{ 
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {numbers.map((number, index) => (
            <div
              key={number}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                transform: `rotate(${index * 60}deg)`,
                clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ 
                  backgroundColor: colors[index],
                  transform: 'rotate(30deg)'
                }}
              >
                <span className="text-white text-2xl font-bold transform -rotate-30">
                  {number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg border-4 border-gray-300 flex items-center justify-center">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white transition-all ${
              isSpinning 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg'
            }`}
          >
            {isSpinning ? '...' : 'SPIN'}
          </button>
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-8 z-10">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
        </div>
      </div>

      {/* Result Display */}
      <div className="text-center">
        {selectedNumber && (
          <div className="mb-4">
            <p className="text-lg text-gray-600">You spun:</p>
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold text-white mx-auto shadow-lg"
              style={{ backgroundColor: colors[selectedNumber - 1] }}
            >
              {selectedNumber}
            </div>
            {selectedNumber === 6 && (
              <p className="text-green-600 font-bold mt-2">🎉 Extra Turn! 🎉</p>
            )}
          </div>
        )}
        
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
            isSpinning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg'
          }`}
        >
          {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
        </button>
      </div>
    </div>
  );
};

// Board Component
const Board = ({ players, currentPlayerIndex, onTokenMove, lastSpin, currentPlayer }) => {
  const renderCell = (position) => {
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
      <div className="w-8 h-8 border border-gray-300 bg-white flex items-center justify-center relative">
        {tokensInCell.map((token, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full border-2 border-white shadow-md absolute`}
            style={{ 
              backgroundColor: token.color,
              left: index % 2 === 0 ? '1px' : '16px',
              top: index < 2 ? '1px' : '16px',
            }}
          />
        ))}
        <span className="text-xs text-gray-500">{position + 1}</span>
      </div>
    );
  };

  const renderHomeCell = (playerIndex, tokenIndex, player) => {
    const token = player.tokens[tokenIndex];
    const isCurrentPlayer = playerIndex === currentPlayerIndex;
    const canMove = isCurrentPlayer && lastSpin && 
                   ((token.isHome && lastSpin === 6) || !token.isHome);

    return (
      <div
        key={tokenIndex}
        onClick={() => {
          if (canMove) {
            onTokenMove(playerIndex, tokenIndex);
          }
        }}
        className={`w-8 h-8 rounded-full border-2 transition-all ${
          canMove 
            ? 'cursor-pointer hover:scale-110 hover:shadow-lg transform' 
            : 'cursor-not-allowed'
        } ${
          token.isHome 
            ? `bg-${player.color}-200 border-${player.color}-400` 
            : `bg-${player.color}-500 border-${player.color}-700`
        }`}
      >
        {!token.isHome && (
          <div className="w-full h-full rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{token.position + 1}</span>
          </div>
        )}
      </div>
    );
  };

  // Generate board cells (simplified 52 cells)
  const boardCells = Array.from({ length: 52 }, (_, i) => i);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Ludo Board</h2>
      
      <div className="relative">
        {/* Main Board Area */}
        <div className="bg-green-100 p-6 rounded-lg border-4 border-green-600">
          {/* Player Homes */}
          <div className="grid grid-cols-13 grid-rows-13 gap-2 mb-4">
            {/* Red Home (Top Left) */}
            <div className="col-span-3 row-span-3 bg-red-100 border-2 border-red-300 rounded p-2 grid grid-cols-2 gap-1">
              {players[0].tokens.map((_, tokenIndex) => 
                renderHomeCell(0, tokenIndex, players[0])
              )}
            </div>

            {/* Green Home (Top Right) */}
            <div className="col-start-11 col-span-3 row-span-3 bg-green-100 border-2 border-green-300 rounded p-2 grid grid-cols-2 gap-1">
              {players[2].tokens.map((_, tokenIndex) => 
                renderHomeCell(2, tokenIndex, players[2])
              )}
            </div>

            {/* Yellow Home (Bottom Left) */}
            <div className="col-span-3 row-start-11 row-span-3 bg-yellow-100 border-2 border-yellow-300 rounded p-2 grid grid-cols-2 gap-1">
              {players[3].tokens.map((_, tokenIndex) => 
                renderHomeCell(3, tokenIndex, players[3])
              )}
            </div>

            {/* Blue Home (Bottom Right) */}
            <div className="col-start-11 col-span-3 row-start-11 row-span-3 bg-blue-100 border-2 border-blue-300 rounded p-2 grid grid-cols-2 gap-1">
              {players[1].tokens.map((_, tokenIndex) => 
                renderHomeCell(1, tokenIndex, players[1])
              )}
            </div>
          </div>

          {/* Board Cells Grid */}
          <div className="grid grid-cols-13 gap-1">
            {boardCells.slice(0, 13).map(position => (
              <div key={position} className="text-center">
                {renderCell(position)}
              </div>
            ))}
          </div>
        </div>

        {/* Current Player Indicator */}
        <div className="mt-4 text-center">
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full text-white font-bold shadow-lg"
            style={{ backgroundColor: currentPlayer.color }}
          >
            {currentPlayer.name}'s Turn
          </div>
          {lastSpin && (
            <p className="text-gray-700 mt-2 font-semibold">
              Last spin: <span className="text-2xl">{lastSpin}</span>
              {lastSpin === 6 && <span className="text-green-600 ml-2">(Extra Turn!)</span>}
            </p>
          )}
          {lastSpin && (
            <p className="text-sm text-gray-600 mt-1">
              Click on your token to move it {lastSpin} steps
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// PlayerInfo Component
const PlayerInfo = ({ players, currentPlayerIndex, lastSpin, extraTurn, onTokenSelect, selectedToken, onMoveToken }) => {
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
              {player.tokens.map((token, tokenIndex) => {
                const isCurrentPlayer = index === currentPlayerIndex;
                const canSelect = isCurrentPlayer && lastSpin && 
                                ((token.isHome && lastSpin === 6) || !token.isHome);
                
                return (
                  <div
                    key={tokenIndex}
                    onClick={() => {
                      if (canSelect) {
                        onMoveToken(index, tokenIndex);
                      }
                    }}
                    className={`text-center p-2 rounded border transition-all ${
                      canSelect 
                        ? 'cursor-pointer hover:scale-105 hover:shadow-md' 
                        : 'cursor-not-allowed'
                    } ${
                      token.isHome 
                        ? 'bg-gray-100 border-gray-300' 
                        : 'bg-green-100 border-green-300'
                    }`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full mx-auto mb-1 border-2 border-white shadow-sm"
                      style={{ backgroundColor: player.color }}
                    ></div>
                    <span className="text-xs font-bold block">
                      {token.isHome ? 'Home' : `Pos: ${token.position + 1}`}
                    </span>
                    {canSelect && (
                      <span className="text-xs text-green-600 font-bold block mt-1">
                        Move {lastSpin}
                      </span>
                    )}
                  </div>
                );
              })}
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
            <span className="font-bold text-xl">{lastSpin || 'None'}</span>
          </div>
          {extraTurn && (
            <div className="flex justify-between text-green-600 font-bold">
              <span>Extra Turn:</span>
              <span>Active!</span>
            </div>
          )}
          {lastSpin && (
            <div className="text-center mt-2 p-2 bg-blue-100 rounded">
              <p className="text-blue-700 font-semibold">
                Click on any available token to move!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;