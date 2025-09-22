import React, { useState, useRef } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

export default function ChessGame() {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  const [fen, setFen] = useState(chessGame.fen());
  const [premoves, setPremoves] = useState([]);
  const premovesRef = useRef([]);
  const [showAnimations, setShowAnimations] = useState(true);

  // Make random CPU move
  function makeRandomMove() {
    if (chessGame.isGameOver()) return;

    const moves = chessGame.moves();
    if (moves.length === 0) return;

    const move = moves[Math.floor(Math.random() * moves.length)];
    chessGame.move(move);
    setFen(chessGame.fen());

    if (premovesRef.current.length > 0) {
      const nextPremove = premovesRef.current.shift();
      setPremoves([...premovesRef.current]);
      setTimeout(() => {
        handlePieceDrop(nextPremove.sourceSquare, nextPremove.targetSquare, nextPremove.piece);
      }, 300);
    }
  }

  // Handle piece drop
  function handlePieceDrop(sourceSquare, targetSquare, piece) {
    const pieceColor = piece[0]; // "wP" -> "w"

    if (chessGame.turn() !== pieceColor) {
      // Store as premove
      premovesRef.current.push({ sourceSquare, targetSquare, piece });
      setPremoves([...premovesRef.current]);
      return true;
    }

    try {
      chessGame.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
      setFen(chessGame.fen());
      setTimeout(makeRandomMove, 500);
      return true;
    } catch {
      return false;
    }
  }

  // Clear premoves on right click
  function handleSquareRightClick() {
    premovesRef.current = [];
    setPremoves([]);
    setShowAnimations(false);
    setTimeout(() => setShowAnimations(true), 50);
  }

  // Only allow white pieces to be dragged
  function canDragPiece(piece) {
    return piece[0] === "w";
  }

  // Premove highlighting
  const squareStyles = {};
  premoves.forEach((p) => {
    squareStyles[p.sourceSquare] = { backgroundColor: "rgba(255,0,0,0.2)" };
    squareStyles[p.targetSquare] = { backgroundColor: "rgba(255,0,0,0.2)" };
  });

  return (
    <div className="w-full min-h-screen mt-[60px] p-4">
      <div className="w-full max-w-[450px] mx-auto">
        <Chessboard
          options={{
            id: "chessboard",
            boardOrientation: "white",
            position: fen,
            onPieceDrop: handlePieceDrop, // <-- now correct signature
            onSquareRightClick: handleSquareRightClick,
           
            showAnimations,
            squareStyles,
          }}
        />
      </div>
    </div>
  );
}
