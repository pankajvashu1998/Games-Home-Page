import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import TicTacToeGame from "./tic-tac-toe/components/Main.jsx";
import Home from "./Home.jsx";
import App from "./App.jsx";

import AboutMe from "./AboutMe.jsx";
import ServicesPage from "./Services.jsx";
import ContactPage from "./Contact.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/tic-tac-toe" element={<TicTacToeGame/>} />
          
        </Route>

        <Route path="/about" element = {<AboutMe/>}/>
        <Route path="/services" element = {<ServicesPage/>}/>
        <Route path="/contact" element = {<ContactPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
