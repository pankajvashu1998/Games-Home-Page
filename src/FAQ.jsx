import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// ✅ FAQ Data
const faqs = [
  {
    question: "What are online games?",
    answer:
      "Online games are digital games that you can play directly on your computer, tablet, or mobile phone without downloading. They include puzzles, strategy, arcade, and multiplayer experiences.",
  },
  {
    question: "Can I play games for free here?",
    answer:
      "Yes, all the games available on this website are completely free to play. No sign-up or payment is required, just open a game and start playing instantly.",
  },
  {
    question: "Do these games support multiplayer?",
    answer:
      "Yes, many games allow you to play with friends, family, or other players online. You can also enjoy single-player mode against the computer if you prefer.",
  },
  {
    question: "Are these games mobile-friendly?",
    answer:
      "Absolutely! All our games are designed to work smoothly on smartphones, tablets, and desktops for a seamless gaming experience.",
  },
  {
    question: "Do I need to create an account to play?",
    answer:
      "No account is needed to enjoy most of our games. Some multiplayer games may offer optional profiles to save scores or track progress.",
  },
  {
    question: "What types of games are most popular here?",
    answer:
      "Popular categories include puzzles, action, strategy, racing, and casual fun games that players of all ages can enjoy.",
  },
  {
    question: "Is it safe to play free online games?",
    answer:
      "Yes, playing here is completely safe. We do not require personal details or payments, and the games are purely for entertainment purposes.",
  },
  {
    question: "Can children also play these games?",
    answer:
      "Yes, kids can play safely. Many games are simple, fun, and educational, helping children improve memory, logic, and problem-solving skills.",
  },
  {
    question: "Do you add new games regularly?",
    answer:
      "Yes, we keep updating our website with new games and categories so that you always have fresh options to explore.",
  },
  {
    question: "Why should I play games online?",
    answer:
      "Online games are easy to access, don't require downloads, and allow you to enjoy fun challenges with friends anytime, anywhere.",
  },
];

// ✅ Page Component
export default function WhyOurGamePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12">
        <div className="w-full max-w-6xl mx-auto ">
          {/* ✅ Why Our Game Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-indigo-800">
              Why Play Our Free Online Games?
            </h1>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 text-lg">
              We believe games should be fun, free, and accessible to everyone.
              Here's why thousands of players choose us for their daily dose of
              entertainment.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl   transition-all duration-300 border border-indigo-100 flex flex-col">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                  Free to Play
                </h3>
                <p className="text-gray-600">
                  Enjoy unlimited access to our entire library without
                  downloads, subscriptions, or hidden fees.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl  border border-indigo-100 flex flex-col">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                  Mobile Friendly
                </h3>
                <p className="text-gray-600">
                  Play anytime, anywhere on mobile, tablet, or desktop with
                  smooth performance and responsive design.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl  border border-indigo-100 flex flex-col">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                  Family Safe
                </h3>
                <p className="text-gray-600">
                  Fun for all ages! Safe, secure, and designed for both kids and
                  adults to enjoy without worries.
                </p>
              </div>
            </div>
          </section>

          {/* ✅ Additional Features Section for AdSense */}
          <section className="mb-16 bg-white rounded-2xl  p-4 border border-indigo-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
              More Great Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    No Registration Required
                  </h3>
                  <p className="text-gray-600">
                    Start playing immediately without creating an account or
                    providing personal information.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    Regular New Content
                  </h3>
                  <p className="text-gray-600">
                    We add new games every week to keep your gaming experience
                    fresh and exciting.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    Educational Value
                  </h3>
                  <p className="text-gray-600">
                    Many games help develop problem-solving skills, strategic
                    thinking, and creativity.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    Global Community
                  </h3>
                  <p className="text-gray-600">
                    Join players from around the world in multiplayer games and
                    competitions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ✅ FAQ Section */}
          <section className="bg-white rounded-2xl   p-4 border border-indigo-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 text-lg">
              Find answers to common questions about our free online gaming
              platform.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-md"
                >
                  {/* Question Row with Collapse Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between cursor-pointer items-center w-full text-left  rounded-lg p-1"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-gray-800 text-lg">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <IoChevronUp className="text-indigo-600 text-xl flex-shrink-0" />
                    ) : (
                      <IoChevronDown className="text-indigo-600 text-xl flex-shrink-0" />
                    )}
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="mt-3 pl-1">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
