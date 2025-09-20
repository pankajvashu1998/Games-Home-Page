import AdSenseAd from "./Adsense";
import { gamesType } from "./assets/gameType";
import { Outlet, useNavigate } from "react-router-dom";
import FAQSection from "./FAQ";
import { Helmet } from "react-helmet";

function Home() {
  const navigate = useNavigate();

  const handleURL = (url) => {
    if (url) {
      navigate(url);
    } else {
      alert("This game is coming soon! Please try another one.");
    }
  };

  // Schema markup for SEO
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: gamesType.map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Game",
        name: game.title,
        description: game.description,
        url: window.location.origin + game.url,
        image: game.image,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Free Online Games - Play Now | Board Games, Puzzles & More
        </title>
        <meta
          name="description"
          content="Play free online games including board games, puzzles, strategy games and more. No downloads required. Fun for all ages!"
        />
        <meta
          name="keywords"
          content="free online games, board games, puzzle games, strategy games, family games, no download games"
        />
        <script type="application/ld+json">{JSON.stringify(gameSchema)}</script>
      </Helmet>

      <div className="mt-[60px] w-full pb-8 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
        {/* Hero Section */}
        <section className="w-full p-4 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 py-12 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              All Your Favorite Games in One Place
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
              Play classic board games online or offline. Fun, simple, and
              engaging for all ages — from strategy to family favorites.
            </p>
            <div className="mt-6">
              <button
                onClick={() =>
                  document
                    .getElementById("games-grid")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white cursor-pointer text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Games
              </button>
            </div>
          </div>
        </section>

        {/* Games Grid Section */}
        <section
          className="w-full max-w-7xl mx-auto py-12 px-4"
          id="games-grid"
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Popular Game Categories
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Discover our collection of free games. No downloads or registration
            required!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gamesType.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={value.image}
                    alt={`${value.title} game`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 h-12 ">
                    {value.description}
                  </p>
                  <div>
                    <button
                      onClick={() => handleURL(value.url)}
                      className="w-full cursor-pointer py-3 mt-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AdSense Ad Unit */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <AdSenseAd height={250} />
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <FAQSection />
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to Start Playing?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of players enjoying our free games collection. No
            downloads, no registration, just instant fun!
          </p>
          <button
            onClick={() =>
              document
                .getElementById("games-grid")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Browse All Games
          </button>
        </section>
      </div>
    </>
  );
}

export default Home;
