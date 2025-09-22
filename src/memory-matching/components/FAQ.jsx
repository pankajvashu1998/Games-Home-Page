import React from "react";
import AdSenseAd from "../../Adsense";

export default function GameInfo() {
  return (
   <div className="bg-white w-full p-4">
     <div className="max-w-4xl mx-auto  space-y-8">
       <div>
        <AdSenseAd height={140} />
      </div>
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">Memory Match Master</h1>
        <p className="text-xl opacity-90">The Ultimate Brain-Training Card Matching Game</p>
        <div className="mt-6 flex justify-center flex-col sm:flex-row items-center gap-4">
          <div className="bg-white text-blue-600 px-4 py-2 w-full rounded-full font-semibold">🧠 Memory Boost</div>
          <div className="bg-white text-green-600 px-4 py-2 w-full rounded-full font-semibold">🎯 Focus Training</div>
          <div className="bg-white text-purple-600 px-4 py-2 w-full rounded-full font-semibold">😊 Stress Relief</div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="bg-white shadow-xl rounded-2xl p-4 border-l-4 border-blue-500">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center">
          How to Play Memory Match
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 ">
              <li className="pb-2 border-b border-gray-100"><strong>Start the Game:</strong> The grid displays hidden cards face down</li>
              <li className="pb-2 border-b border-gray-100"><strong>First Selection:</strong> Click any card to reveal its image</li>
              <li className="pb-2 border-b border-gray-100"><strong>Second Selection:</strong> Click another card to find its match</li>
              <li className="pb-2 border-b border-gray-100"><strong>Match Success:</strong> If both cards match, they remain visible</li>
              <li className="pb-2 border-b border-gray-100"><strong>No Match:</strong> Cards flip back if they don't match</li>
              <li><strong>Victory:</strong> Complete all pairs to win the game!</li>
            </ol>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Pro Tips</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Focus on card positions rather than individual cards</li>
              <li>• Start from one corner and work systematically</li>
              <li>• Take mental notes of card locations</li>
              <li>• Use the timer to track your progress</li>
              <li>• Practice regularly to improve your speed</li>
            </ul>
          </div>
        </div>
      </section>

       <div>
        <AdSenseAd height={140} />
      </div>

      {/* Benefits Section */}
      <section className="bg-white shadow-xl rounded-2xl p-4 border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-6 text-green-600 flex items-center">
          Cognitive Benefits of Memory Matching Games
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">🧠 Memory Enhancement</h3>
            <ul className=" space-y-3 text-gray-700">
              <li><strong>Short-term Memory:</strong> Improves immediate recall ability</li>
              <li><strong>Long-term Memory:</strong> Strengthens memory retention</li>
              <li><strong>Spatial Memory:</strong> Enhances location-based memory skills</li>
              <li><strong>Visual Memory:</strong> Boosts ability to remember images and patterns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">🎯 Cognitive Skills Development</h3>
            <ul className=" space-y-3 text-gray-700">
              <li><strong>Concentration:</strong> Increases focus and attention span</li>
              <li><strong>Problem-solving:</strong> Enhances strategic thinking abilities</li>
              <li><strong>Decision-making:</strong> Improves quick thinking under pressure</li>
              <li><strong>Pattern Recognition:</strong> Develops visual processing skills</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-bold text-green-700 mb-3">🌟 Additional Benefits</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">😊</span>
              <p className="text-sm font-medium">Stress Relief</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">⚡</span>
              <p className="text-sm font-medium">Brain Exercise</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <p className="text-sm font-medium">Family Fun</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">📈</span>
              <p className="text-sm font-medium">Skill Progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-white shadow-xl rounded-2xl p-4 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-600 flex items-center">
          <span className="mr-3">👥</span> Perfect For All Ages
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <span className="text-4xl">👶</span>
            <h3 className="font-bold text-orange-700 mt-2">Kids (4-12 years)</h3>
            <p className="text-orange-800 text-sm mt-2">Develops early cognitive skills, improves concentration, and enhances memory formation</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <span className="text-4xl">🎓</span>
            <h3 className="font-bold text-blue-700 mt-2">Students (13-25 years)</h3>
            <p className="text-blue-800 text-sm mt-2">Boosts academic performance, improves study focus, and enhances learning retention</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <span className="text-4xl">💼</span>
            <h3 className="font-bold text-green-700 mt-2">Adults (25+ years)</h3>
            <p className="text-green-800 text-sm mt-2">Maintains mental sharpness, reduces stress, and prevents cognitive decline</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white shadow-xl rounded-2xl p-4 border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center">
          <span className="mr-3">❓</span> Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-700 text-lg">Q1: What is the minimum age to play this memory game?</p>
            <p className="text-purple-800 mt-2">Suitable for children aged 4+ and adults of all ages. The game helps develop cognitive skills in young children while maintaining mental sharpness in adults.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-700 text-lg">Q2: Can I play this memory matching game offline?</p>
            <p className="text-purple-800 mt-2"> Yes! Our game works perfectly offline when installed as a Progressive Web App (PWA) or when running locally on your device.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-700 text-lg">Q3: What are the main benefits of playing memory card games regularly?</p>
            <p className="text-purple-800 mt-2"> Regular play sharpens memory, improves focus and concentration, enhances problem-solving skills, reduces stress, and provides excellent brain exercise.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-700 text-lg">Q4: Is multiplayer mode available in this memory game?</p>
            <p className="text-purple-800 mt-2"> Currently, we offer single-player mode with various difficulty levels. Multiplayer functionality is planned for future updates.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-700 text-lg">Q5: How does this game help with brain training and cognitive development?</p>
            <p className="text-purple-800 mt-2"> Memory matching games stimulate neural pathways, improve neuroplasticity, enhance visual memory, and strengthen cognitive functions through repetitive pattern recognition exercises.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
    
    </div>
   </div>
  );
}