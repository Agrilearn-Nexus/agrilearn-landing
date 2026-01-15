import React from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import heroBackground from "./assets/hero-agriculture.jpg";
import ServicesSection from "./components/servicesSection/ServicesSection";
import ObjectiveSection from "./components/objectives/objectiveSection/ObjectiveSection";
import Vision from "./components/vision/Vision";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";

const App = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">

            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40 flex flex-col">
                    <Navbar/>

                    <div className="flex-grow flex items-center justify-center">
                        <Hero/>
                    </div>
                </div>
            </div>

            <main className="w-full">
                <ServicesSection/>
                <ObjectiveSection/>
                <Vision/>
            </main>

            <footer className="w-full">
                <Footer/>
                <Copyright/>
            </footer>
        </div>
    );
};

export default App;