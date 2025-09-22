import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import GameInfo from "./FAQ";
import AdSenseAd from "../../Adsense";
import { Helmet } from "react-helmet";

// Emoji icons for the game
const EMOJIS = ["🍎", "🍌", "🍇", "🍒", "🥭", "🍊", "🍓", "🍑"];

const MemoryGame = () => {
  // Game configuration
  const [gridSize, setGridSize] = useState(4); // 4x4 grid (16 cards)
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [score, setScore] = useState(0);
  const [showWinningModal, setShowWinningModal] = useState(false);

  const fireConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 50,
      decay: 0.9,
      startVelocity: 50,
    });
  };

  const clickSound = () => {
    const playSound = new Audio("/memory_match/flip.mp3");
    playSound.play();
  };

  const matchSound = () => {
    const playSound = new Audio("/memory_match/match.mp3");
    playSound.play();
  };

  const winSound = () => {
    const playSound = new Audio("/memory_match/win.mp3");
    playSound.play();
  };

  // Initialize the game
  const initializeGame = () => {
    // Create pairs of emojis based on grid size
    const totalPairs = (gridSize * gridSize) / 2;
    const selectedEmojis = EMOJIS.slice(0, totalPairs);

    // Create card objects with emojis
    const cardPairs = [...selectedEmojis, ...selectedEmojis];

    // Shuffle the cards
    const shuffledCards = cardPairs
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameCompleted(false);
    setScore(0);
    setShowWinningModal(false);
  };

  // Handle card click
  const handleCardClick = (cardId) => {
    // Prevent action if card is already flipped, matched, or if we're processing
    if (
      isProcessing ||
      flippedCards.includes(cardId) ||
      matchedCards.includes(cardId) ||
      flippedCards.length >= 2
    ) {
      return;
    }

    // Flip the card
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);
    clickSound();

    // If two cards are flipped, check for a match
    if (newFlippedCards.length === 2) {
      setIsProcessing(true);
      setMoves(moves + 1);

      const firstCard = cards.find((card) => card.id === newFlippedCards[0]);
      const secondCard = cards.find((card) => card.id === newFlippedCards[1]);

      if (firstCard.emoji === secondCard.emoji) {
        // Match found - add points
        setScore(score + 100);
        matchSound();
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
        setIsProcessing(false);
      } else {
        // No match - flip cards back after a delay
        setTimeout(() => {
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  // Check if game is completed
  useEffect(() => {
    if (matchedCards.length > 0 && matchedCards.length === cards.length) {
      setGameCompleted(true);
      // Bonus points for completing the game
      setScore(score + 500);
      // Show winning modal after a short delay
      setTimeout(() => {
        setShowWinningModal(true);
        winSound();
        fireConfetti();
      }, 500);
    }
  }, [matchedCards, cards.length]);

  // Initialize game on component mount and when grid size changes
  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  // Render the game grid
  const renderGrid = () => {
    const gridColsClass = {
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
    }[gridSize];

    return (
      <div className={`grid ${gridColsClass} gap-2 max-w-md mx-auto`}>
        {cards.map((card) => {
          const isFlipped =
            flippedCards.includes(card.id) || matchedCards.includes(card.id);

          return (
            <div
              key={card.id}
              className={`relative aspect-square rounded cursor-pointer transition-all duration-300 ${
                isFlipped
                  ? "bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg scale-105"
                  : "bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-xl"
              } flex items-center justify-center text-4xl border-2 border-white/30`}
              onClick={() => handleCardClick(card.id)}
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Card Back (Question Mark) */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                  <div className="">
                    {/* <span className="text-white text-2xl font-bold">?</span> */}
                    <img
                      src="/memory_match/help.png"
                      alt=""
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>

              {/* Card Front (Emoji) */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 rounded flex items-center justify-center shadow-inner">
                  <span className="text-6xl drop-shadow-lg">{card.emoji}</span>
                </div>
              </div>

              {/* Glowing effect for matched cards */}
              {matchedCards.includes(card.id) && (
                <div className="absolute inset-0 rounded bg-gradient-to-r from-yellow-400 to-orange-400 opacity-60 animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Winning Modal Component
  const WinningModal = () => {
    if (!showWinningModal) return null;

    // Determine performance based on move count - simple for kids
    const getPerformanceRating = () => {
      if (moves <= 16)
        return {
          rating: "AMAZING! 🌟",
          message: "You're a memory superhero!",
          meme: "🦸‍♂️",
          color: "text-yellow-300",
        };
      if (moves <= 20)
        return {
          rating: "SUPER! 🚀",
          message: "Wow! You're so smart!",
          meme: "🧠",
          color: "text-green-300",
        };
      if (moves <= 24)
        return {
          rating: "GREAT! 👍",
          message: "You're getting really good!",
          meme: "😎",
          color: "text-blue-300",
        };
      if (moves <= 30)
        return {
          rating: "GOOD! 😊",
          message: "Nice job! You did it!",
          meme: "🎯",
          color: "text-teal-300",
        };
      return {
        rating: "YAY! 🎉",
        message: "You finished the game!",
        meme: "🙌",
        color: "text-purple-300",
      };
    };

    const performance = getPerformanceRating();

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-500 scale-100 animate-in fade-in-90 zoom-in-90">
          <div className="text-center">
            {/* Big celebration emoji */}
            <div className="text-7xl mb-4 animate-bounce">
              {performance.meme}
            </div>

            <p className="text-xl text-blue-200 mb-4">All pairs matched!</p>

            <div className="bg-black/30 rounded-xl p-6 mb-6">
              <div className="mb-4">
                <div className={`text-4xl font-bold ${performance.color} mb-2`}>
                  {performance.rating}
                </div>
                <p className="text-lg text-blue-200">{performance.message}</p>
              </div>

              {/* Fun progress bar visualization */}
              <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-yellow-400 h-4 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.max(30, 100 - (moves - 16) * 5)}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-300">
                {moves <= 16
                  ? "PERFECT SCORE!"
                  : "Keep playing to get even better!"}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowWinningModal(false);
                  initializeGame();
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                PLAY AGAIN
              </button>

              <button
                onClick={() => setShowWinningModal(false)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer"
              >
                CLOSE
              </button>
            </div>

            {/* Fun footer message */}
            <p className="text-sm text-gray-400 mt-4">
              {moves <= 16
                ? "You're a memory champion! 🏆"
                : moves <= 20
                ? "Almost perfect! Try again? 🔥"
                : "Fun game! Want to play more? 😄"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Memory Match Game - Fun Brain Training & Concentration Boost
        </title>
        <meta
          name="description"
          content="Play the Memory Match Game online! Boost your memory, sharpen focus, and improve concentration while having fun. Perfect for kids, students, and adults."
        />
        <meta
          name="keywords"
          content="memory game, memory match game for adult, memory match game for kids, google memory game, picture memory game for adult, memory match game online, brain training game, concentration game, fun matching game, card flip memory game, puzzle game for kids, cognitive skills booster"
        />
        <meta name="author" content="https://game.zenithwebzone.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://game.zenithwebzone.com/memory_matching"
        />
        <meta
          property="og:title"
          content="Memory Match Game - Boost Your Brain Power"
        />
        <meta
          property="og:description"
          content="Play free memory match game online and improve your memory, focus, and problem-solving skills."
        />
       

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://game.zenithwebzone.com/memory_matching"
        />
        <meta name="twitter:title" content="Play Memory Match Game Online" />
        <meta
          name="twitter:description"
          content="Improve your focus and memory with this fun matching game. Great for all ages!"
        />
        

        {/* Canonical URL */}
        <link rel="canonical" href="https://game.zenithwebzone.com/" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-radial-gradient(from-white, to-transparent) opacity-5 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce delay-500"></div>
        </div>

        <div className="max-w-md mx-auto relative z-10">
          {/* Header with neon effect */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Memory{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Match
              </span>
            </h1>
            <p className="text-lg text-blue-200 font-semibold">
              Flip cards to find matching pairs!
            </p>
          </div>

          {/* Game Grid Container */}
          <div className="bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-2xl mb-6">
            {renderGrid()}
          </div>

          {/* Game Stats Panel */}
          <div className="   p-4 mb-6 ">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={initializeGame}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                New Game
              </button>
            </div>
          </div>
        </div>
        {/* Winning Modal */}
        <WinningModal />
        <GameInfo />
      </div>
    </>
  );
};

export default MemoryGame;
