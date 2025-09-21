import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
const UserName = ({
  setNameModal,
  setPlayer2name,
  setPlayer1name,
  backToMenu,
}) => {
  const [players, setPlayers] = useState({
    player1: "",
    player2: "",
  });

  const [errors, setErrors] = useState({
    player1: "",
    player2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayers((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!players.player1.trim()) {
      newErrors.player1 = "Player 1 name is required";
    }

    if (!players.player2.trim()) {
      newErrors.player2 = "Player 2 name is required";
    }

    if (
      players.player1.trim() &&
      players.player2.trim() &&
      players.player1.toLowerCase() === players.player2.toLowerCase()
    ) {
      newErrors.player2 = "Player names must be different";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate a small delay for a smooth animation
      setTimeout(() => {
        // onStartGame(players.player1.trim(), players.player2.trim());
        setIsSubmitting(false);
        setPlayer1name(players.player1);
        setPlayer2name(players.player2);
        setNameModal(false);
      }, 500);
    }
  };

  return (
    <div className="w-full  bubbleBackground fixed top-0 left-0 ">
      <div className="w-full pt-14 min-h-screen bg-indigo-900/90 flex justify-center items-center p-4">
        <div
          className="w-full max-w-md bg-white mx-auto rounded-xl shadow-2xl  overflow-hidden 
      transform transition-all duration-300 hover:shadow-xl relative animate__animated animate__bounceIn"
        >
          <span
            onClick={backToMenu}
            className="p-2 hover:text-gray-600 text-2xl absolute right-1 top-1 cursor-pointer"
          >
            <IoClose />
          </span>
          <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white rounded-lg p-8">
              <div className="text-center mb-5">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                  Enter Players' Names
                </h1>
                <p className="text-gray-600">Who's playing today?</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Player 1 Input */}
                <div className="mb-3">
                  <label
                    htmlFor="player1"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Player 1 (X)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="player1"
                      name="player1"
                      value={players.player1}
                      onChange={handleChange}
                      placeholder="Enter name for X"
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ${
                        errors.player1 ? "border-red-500" : "border-purple-300"
                      }`}
                    />
                    {errors.player1 && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.player1}
                      </p>
                    )}
                  </div>
                </div>

                {/* VS Separator */}
                <div className="flex items-center my-3">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <div className="px-3 text-gray-500 font-semibold">VS</div>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Player 2 Input */}
                <div className="mb-5">
                  <label
                    htmlFor="player2"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Player 2 (O)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="player2"
                      name="player2"
                      value={players.player2}
                      onChange={handleChange}
                      placeholder="Enter name for O"
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 ${
                        errors.player2 ? "border-red-500" : "border-purple-300"
                      }`}
                    />
                    {errors.player2 && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.player2}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 cursor-pointer rounded-lg text-white font-semibold transition duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-1"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      STARTING GAME...
                    </span>
                  ) : (
                    "START GAME"
                  )}
                </button>
              </form>

              {/* Decorative elements */}
              <div className="mt-5 flex justify-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">X</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">O</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
