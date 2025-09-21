import { Helmet } from "react-helmet";
import { Gamepad2, BookOpen, Users, Calculator, FileUp, Search } from "lucide-react";
import AdSenseAd from "./Adsense";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-[60px]">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Our Services - Zenith Webzone Games</title>
        <meta
          name="description"
          content="Explore our board gaming services and online tools that make gaming and productivity easier. Play, learn, and use digital solutions all in one place."
        />
        <meta
          name="keywords"
          content="Board Games, Online Games, Gaming Services, Tools Website, Productivity Tools"
        />
      </Helmet>

      {/* ✅ Page Header */}
      <header className="bg-blue-600 text-white py-16 text-center ">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our Services
        </h1>
        <div className="w-24 h-1 bg-indigo-300 mx-auto my-5 rounded"></div>
        <p className="mt-3 text-lg max-w-3xl mx-auto opacity-90">
          Discover our range of board gaming experiences and online tools designed
          to make your life more fun and productive.
        </p>
      </header>

      <main className="max-w-7xl mx-auto p-8 space-y-20">
        {/* 🎲 Board Gaming Services */}
        <section>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
             Gaming Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md border border-gray-200">
              <Gamepad2 className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Board Games</h3>
              <p className="text-gray-600">
                Play a wide range of board games online with friends and family
                anytime, anywhere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border border-gray-200">
              <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Game Tutorials</h3>
              <p className="text-gray-600">
                Learn how to play your favorite board games with step-by-step
                tutorials and guides.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border border-gray-200">
              <Users className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Tournaments</h3>
              <p className="text-gray-600">
                Join tournaments and compete with players worldwide to showcase
                your skills.
              </p>
            </div>
          </div>
        </section>

        <div className=" my-15 w-full ">
          <AdSenseAd height={250}/>
        </div>

        {/* 🔧 Tools Website Services */}
        <section className="bg-gray-100 rounded-md p-10">
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-10">
            Tools & Productivity Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md border border-gray-200">
              <Calculator className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Calculators</h3>
              <p className="text-gray-600">
                Access multiple calculators for finance, health, and gaming score
                tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border-gray-200">
              <FileUp className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">File Conversion Tools</h3>
              <p className="text-gray-600">
                Convert files like images, PDFs, and documents instantly with
                one-click solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border border-gray-200">
              <Search className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO & Web Tools</h3>
              <p className="text-gray-600">
                Boost your website performance using our SEO and online utility
                tools.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ✅ Call to Action */}
      <div className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 opacity-90">
          Explore our games and tools to make your free time fun and your work
          easier. Start your journey with us now!
        </p>
        <a
          href="https://game.zenithwebzone.com/contact"
          className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
