import React from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import heroBackground from "./assets/hero-agriculture.jpg";
import ServicesSection from "./components/servicesSection/ServicesSection";
import ObjectiveSection from "./components/objectives/objectiveSection/ObjectiveSection";
import Vision from "./components/vision/Vision";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";
import FloatingWhatsApp from "./components/floatingWhatsApp/FloatingWhatsApp.jsx";

const App = () => {
    return (
        <div className="w-full min-h-screen flex flex-col font-sans">
            <FloatingWhatsApp />

            <div className="relative w-full min-h-screen flex flex-col">

                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBackground}
                        alt="Agriculture Field"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 flex flex-col min-h-screen">
                    <Navbar />

                    <div className="flex-grow flex items-center justify-center py-12 md:py-0">
                        <Hero />
                    </div>
                </div>
            </div>

            <main className="w-full bg-white relative z-20">
                <ServicesSection />
                <ObjectiveSection />
                <Vision />
            </main>

            <footer className="w-full relative z-20">
                <Footer />
                <Copyright />
            </footer>
        </div>
    );
};

export default App;