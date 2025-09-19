import React from "react";
import TicTacToeFAQ from "./FAQ";
import { Gamepad2, Users, Trophy, MinusCircle } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-2 py-8 w-full">
      <div className="max-w-full flex justify-center items-center ">
        <div className="my-6"></div>
      </div>
      {/* About Tic Tac Toe */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          About TIC TAC TOE Game
        </h1>
        <div className="w-16 sm:w-24 h-1 rounded-full bg-indigo-700 mx-auto my-4"></div>

        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          Tic Tac Toe (also known as Noughts and Crosses or Xs and Os) is a
          classic two-player strategy game that is simple yet engaging. The game
          is played on a 3×3 grid, where players take turns marking a square
          with either an X or an O. The goal is to be the first player to align
          three of your marks either horizontally, vertically, or diagonally
        </p>

        <p className="mt-4 font-semibold text-slate-700 text-sm sm:text-base">
          Despite its simplicity, Tic Tac Toe is a great game for practicing
          strategic thinking, decision making, and planning ahead.
        </p>
      </div>

      {/* How to Play */}
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center pb-4">
          How to Play TIC TAC TOE
        </h1>
        <div className="w-16 sm:w-24 h-1 rounded-full bg-indigo-700 mx-auto mb-12"></div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          {/* Game Setup */}
          <div className="p-5 sm:p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 className="text-indigo-700 w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-700">
                Game Setup
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              The game board is a 3×3 grid (9 squares in total).
            </p>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Two players are required: one plays as
              <span className="font-bold">X</span> and the other as
              <span className="font-bold">O</span>.
            </p>
          </div>

          {/* Taking Turns */}
          <div className="p-5 sm:p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-indigo-700 w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-700">
                Taking Turns
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              Player X always goes first.
            </p>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Players alternate turns, placing their symbol in an empty square.
            </p>
          </div>

          {/* Winning the Game */}
          <div className="p-5 sm:p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="text-indigo-700 w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-700">
                Winning the Game
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              The first player to get three of their marks in a row (across,
              down, or diagonally) wins the game.
            </p>
          </div>

          {/* Draw Condition */}
          <div className="p-5 sm:p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="flex items-center gap-3 mb-3">
              <MinusCircle className="text-indigo-700 w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-700">
                Draw Condition
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              If all 9 squares are filled and no player has three in a row, the
              game ends in a draw (tie).
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto py-12 px-2 sm:px-0">
        <TicTacToeFAQ />
      </div>
    </div>
  );
};

export default About;
