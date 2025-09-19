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
      "Online games are easy to access, don’t require downloads, and allow you to enjoy fun challenges with friends anytime, anywhere.",
  },
];

// ✅ Page Component
export default function WhyOurGamePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* ✅ Why Our Game Section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-3xl font-bold text-center mb-6">
          Why Play Our Games?
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          We believe games should be fun, free, and accessible to everyone.
          Here’s why thousands of players choose us for their daily dose of
          entertainment.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🎮 Free to Play</h3>
            <p className="text-gray-600">
              Enjoy unlimited access to our entire library without downloads,
              subscriptions, or hidden fees.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📱 Mobile Friendly</h3>
            <p className="text-gray-600">
              Play anytime, anywhere on mobile, tablet, or desktop with smooth
              performance and responsive design.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">👨‍👩‍👧‍👦 Family Safe</h3>
            <p className="text-gray-600">
              Fun for all ages! Safe, secure, and designed for both kids and
              adults to enjoy without worries.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section Below */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-gray-300 bg-white transition"
            >
              {/* Question Row with Collapse Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <IoChevronUp className="text-gray-600 text-xl" />
                ) : (
                  <IoChevronDown className="text-gray-600 text-xl" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
