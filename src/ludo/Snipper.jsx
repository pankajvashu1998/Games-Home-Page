import React, { useState, useCallback } from 'react';

const Spinner = ({ onSpinResult }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6];
  const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

  const spinWheel = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedNumber(null);

    // Generate random spins (5-10 full rotations + final position)
    const spins = 5 + Math.floor(Math.random() * 5);
    const randomIndex = Math.floor(Math.random() * 6);
    const finalRotation = spins * 360 + (randomIndex * 60) + 1800; // Extra rotation for smooth stop

    setRotation(finalRotation);

    setTimeout(() => {
      const result = numbers[randomIndex];
      setSelectedNumber(result);
      setIsSpinning(false);
      onSpinResult(result);
    }, 3000);
  }, [isSpinning, onSpinResult]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Spinner Wheel</h2>
      
      <div className="relative w-64 h-64 mx-auto mb-4">
        {/* Spinner Wheel */}
        <div 
          className="relative w-full h-full transition-transform duration-3000 ease-out"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 3s cubic-bezier(0.2, 0.8, 0.3, 1)' : 'none'
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

        {/* Center Circle and Pointer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all ${
              isSpinning 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg'
            }`}
          >
            {isSpinning ? '...' : 'SPIN'}
          </button>
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-8">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
        </div>
      </div>

      {/* Result Display */}
      <div className="text-center">
        {selectedNumber && (
          <div className="mb-4">
            <p className="text-lg text-gray-600">You spun:</p>
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold text-white mx-auto"
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

export default Spinner;