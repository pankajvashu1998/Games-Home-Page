import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import AdSenseAd from "./Adsense";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-[55px]">
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Contact Us - Zenith Games</title>
        <meta
          name="description"
          content="Reach out to Zenith Games for customer support, game feedback, partnership opportunities, or general inquiries. We're here to help you with all your gaming needs."
        />
        <meta
          name="keywords"
          content="contact Zenith Games, game support, customer service, gaming feedback, partnership inquiries, game development company, online gaming support, Zenith Games contact information, gaming help desk Zenith Games, about Zenith Games, online gaming company, free games platform, multiplayer games, casual games, gaming mission, gaming vision"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://game.zenithwebzone.com/contact"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - Zenith Games | Customer Support & Inquiries" />
        <meta
          property="og:description"
          content="Get in touch with Zenith Games for support, feedback, or partnership opportunities. Our team is ready to assist you with all gaming-related inquiries."
        />
        <meta
          property="og:url"
          content="https://game.zenithwebzone.com/contact"
        />
        <meta property="og:site_name" content="Zenith Games" />
       

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Zenith Games" />
        <meta
          name="twitter:description"
          content="Have questions or feedback? Contact Zenith Games today for prompt assistance with all your gaming needs."
        />
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="relative text-center py-16 bg-blue-600 text-white">
       
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">Get In Touch With Us</h1>
           <div className="w-24 h-1 bg-indigo-300 mx-auto my-5 rounded"></div>
          <p className="text-xl mb-6">
            We're here to answer your questions and listen to your feedback
          </p>
         
        </div>
      </section>

      {/* ✅ Breadcrumb Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
          <a href="https://game.zenithwebzone.com/" className="hover:text-indigo-600">Home</a> &gt; <span>Contact Us</span>
        </div>
      </div>

      {/* ✅ Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">We'd Love to Hear From You</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Zenith Games, we value your feedback, questions, and suggestions. Whether you need technical support, 
            have ideas for new games, or want to discuss partnership opportunities, our team is ready to assist you. 
            Reach out to us through any of the channels below, and we'll respond as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="bg-white rounded-md border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            </div>
            <p className="text-gray-600 ">Email</p>
            <p className="text-indigo-600 font-medium hover:underline">
              pk85764798@gmail.com
            </p>
             <p className="text-gray-600 mt-2">Mobile</p>
            <p className="text-indigo-600 font-medium hover:underline">
             +917654470477
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 ">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
            </div>
            <p className="text-gray-600 mb-2">Visit our office</p>
            <p className="text-gray-800">Zenith Webzone, Sarai Vaishali Bihar - 844125</p>
          </div>

          <div className="bg-white rounded-md border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <FaClock className="text-pink-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
            </div>
            <p className="text-gray-600 mb-2">We're available</p>
            <p className="text-gray-800">Monday - Saturday: 9AM - 6PM IST</p>
          </div>
        </div>

        <div>
          <AdSenseAd height={250}/>
        </div>

        {/* Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
              Send Us a Message
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message Subject"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center cursor-pointer"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-white border border-gray-200 rounded-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
              Other Ways to Reach Us
            </h2>
            
           
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <p className="text-gray-600 mb-4">
                Follow us on social media to stay updated with our latest games, updates, and community events.
              </p>
              <div className="flex space-x-4">
                
                <a href="https://www.linkedin.com/in/pankajkumar1234/" className="bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Response Time</h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters 
                related to account issues or technical problems, please include "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </section>

      
       
      </div>
    </div>
  );
};

export default ContactPage;