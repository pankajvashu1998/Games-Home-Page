import AdSenseAd from "./Adsense";
import { gamesType } from "./assets/gameType";
import { Outlet, useNavigate } from "react-router-dom";
import FAQSection from "./FAQ";
function Home() {
  const navigate = useNavigate();
  const handleURL = (url) => {
    if (url) {
      navigate(url);
    } else {
      alert("URL does not match!");
    }
  };
  return (
    <>
      <div className="mt-[60px] w-full pb-8">
        <div className="text-center mb-8 w-full p-4  mx-auto bg-blue-200 py-8 flex justify-center items-center flex-col">
          <h1 className="text-3xl sm:text-5xl  font-bold text-red-600">
            All Your Favorite Games in One Place
          </h1>
          <h1 className="text-xl font-semibold text-blue-700">
            Play classic board games online or offline. Fun, simple, and
            engaging for all ages — from strategy to family favorites.
          </h1>
        </div>
        <div className="w-full max-w-7xl  mx-auto ">
          <div className="flex justify-center items-center flex-wrap gap-6">
            {gamesType.map((value, index) => (
              <div key={index} className="shadow-md rounded-2xl max-w-[270px]">
                <div className="overflow-hidden h-[150px] rounded-tl-2xl rounded-tr-2xl">
                  <img
                    src={value.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold text-gray-700 ">
                    {value.title}
                  </h1>
                  <p className="text-gray-700 py-1">{value.description}</p>
                  <div>
                    <button
                      onClick={() => handleURL(value.url)}
                      className="py-2.5 cursor-pointer hover:bg-amber-600 shadow-sm w-full bg-orange-500 text-white rounded mt-2"
                    >
                      Play Game
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <AdSenseAd height={250}/>
        </div>
       <FAQSection/>
      </div>
    </>
  );
}

export default Home;
