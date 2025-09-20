import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import pankajImage from "../public/pankaj.webp";
import sandhyaImage from "../public/sandhya.webp";
import nibhaImage from "../public/nibh.webp";

// Icons
import {
  ShieldCheckIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon,
  UsersIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  EyeIcon,
  LockClosedIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  PlayIcon,
  EnvelopeIcon,
  LightBulbIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  // Core features data
  const features = [
    {
      icon: <PuzzlePieceIcon className="h-6 w-6 text-indigo-600" />,
      title: "Free Online Games",
      description: "Classic and modern board games without downloads",
    },
    {
      icon: <UsersIcon className="h-6 w-6 text-indigo-600" />,
      title: "Multiplayer & Local Play",
      description: "Real-time matches with friends or pass-and-play mode",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6 text-indigo-600" />,
      title: "Mobile Friendly",
      description: "Responsive design for phones and tablets",
    },
    {
      icon: <ArrowsRightLeftIcon className="h-6 w-6 text-indigo-600" />,
      title: "Fair Matchmaking",
      description: "Skill-based pairing for competitive fairness",
    },
    {
      icon: <EyeIcon className="h-6 w-6 text-indigo-600" />,
      title: "Accessibility",
      description: "Keyboard navigation and screen-reader support",
    },
    {
      icon: <LockClosedIcon className="h-6 w-6 text-indigo-600" />,
      title: "Privacy First",
      description: "Minimum data collection approach",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      image: pankajImage,
      name: "Pankaj Kumar — Founder & Lead",
      role: "Game architecture and backend",
    },
    {
      image: sandhyaImage,
      name: "Sandhya Kumari — Community Manager",
      role: "User support and tournaments",
    },
    {
      image: nibhaImage,
      name: "Nibha Kumari — Product & UX",
      role: "UI/UX and accessibility design",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "Is Zenith Games free?",
      answer:
        "Yes—most games are free. Some special features may be paid (clearly indicated).",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "Account lets you save progress, but many games are playable in guest mode.",
    },
    {
      question: "Do you host tournaments?",
      answer:
        "Yes—we plan to launch regular tournaments and leaderboards soon.",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us - Zenith Games</title>
        <meta
          name="description"
          content="Learn more about Zenith Games, our mission, vision, and passion for creating fun and engaging online games. Discover who we are and why players love our platform."
        />
        <meta
          name="keywords"
          content="Zenith Games, about Zenith Games, online gaming company, free games platform, multiplayer games, casual games, gaming mission, gaming vision"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://game.zenithwebzone.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - Zenith Games" />
        <meta
          property="og:description"
          content="Discover the story behind Zenith Games. Learn about our mission to deliver fun, interactive, and free online games for everyone."
        />
        <meta
          property="og:url"
          content="https://game.zenithwebzone.com/about"
        />
        <meta property="og:site_name" content="Zenith Games" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zenith Games" />
        <meta
          name="twitter:description"
          content="Get to know Zenith Games. Our mission is to create fun, engaging, and free games that connect people worldwide."
        />
      </Helmet>
      <div className="relative min-h-screen text-gray-900 overflow-hidden">
        <div className="relative z-10">
          <header className="mt-[60px] bg-blue-600 text-white py-12 text-center p-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Us
            </h1>
            <div className="w-20 h-1 bg-indigo-300 mx-auto mb-4"></div>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Your premier destination for online board games, puzzles, and
              multiplayer challenges.
            </p>
          </header>
          {/* ✅ Breadcrumb Navigation */}
          <div className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
              <a
                href="https://game.zenithwebzone.com/"
                className="hover:text-indigo-600"
              >
                Home
              </a>{" "}
              &gt; <span>About Us</span>
            </div>
          </div>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 ">
            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-md  border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <RocketLaunchIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Provide high-quality, fair, and accessible board gaming
                  experiences to people worldwide.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Safe & ad-free gameplay</span>
                  </li>
                  <li className="flex items-start">
                    <RocketLaunchIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Fast loading experience</span>
                  </li>
                  <li className="flex items-start">
                    <UsersIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Inclusive game design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-md  border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <LightBulbIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-700">
                  Become a trusted name in board gaming where creativity,
                  fairness, and community come together.
                </p>
                <div className="mt-4 flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Future plans: tournaments, custom games, learning resources
                  </span>
                </div>
              </div>
            </div>

            {/* Adsense */}
            <div className=" my-20 w-full h-[260px] bg-blue-100"></div>

            {/* Core Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                What We Offer
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/20"
                  >
                    <div className="flex items-center mb-3">
                      {feature.icon}
                      <h3 className="font-semibold ml-2">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Adsense */}
            <div className=" my-20 w-full h-[260px] bg-blue-100"></div>

            {/* Story */}
            <section className="bg-white/80 backdrop-blur-sm p-6 rounded-md border border-gray-200 mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <PuzzlePieceIcon className="h-5 w-5 text-indigo-600 mr-2" />
                Our Story
              </h2>
              <p className="text-gray-700 mb-3">
                We created game.webzonelcom to solve a problem: many board game
                portals were heavy on mobile or had confusing interfaces.
              </p>
              <p className="text-gray-700">
                Our platform offers a lightweight, fast-loading, and
                user-friendly experience where players can start games directly
                without friction.
              </p>
            </section>

            {/* Team */}
            <section className="bg-white/80 backdrop-blur-sm p-6 rounded-md border border-gray-200 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 py-8 text-center">
                Our Team
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center my-4">
                    <div className="w-40 h-40 shadow border border-gray-200 bg-blue-200 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-3">
                      <img
                        src={member.image}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white/80 backdrop-blur-sm p-6 rounded-md border border-gray-200 mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <QuestionMarkCircleIcon className="h-5 w-5 text-indigo-600 mr-2" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-gray-200 rounded-lg p-4 bg-white/70 hover:shadow-md transition duration-200"
                  >
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800">
                      {faq.question}
                      <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-2 pl-1">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-3">Ready to play?</h3>
              <p className="text-indigo-100 mb-6">
                Choose your favorite board game and start a match now
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://game.zenithwebzone.com/"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <PlayIcon className="h-4 w-4 mr-1.5" />
                  Play Now
                </a>
                <a
                  href="https://game.zenithwebzone.com/contact"
                  className="inline-flex items-center px-5 py-2.5 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-1.5" />
                  Contact Us
                </a>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
