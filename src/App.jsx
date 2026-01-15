import React from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import heroBackground from "./assets/hero-agriculture.jpg";
const App = () => {
  return (
    <div className="bg-green-400 w-full h-screen">
      <div
        className="min-h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="min-h-screen bg-black/30">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
