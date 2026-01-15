import {GraduationCap, Mic2, Projector, Tractor, Trophy, UserCog,} from "lucide-react";
import ServiceCard from "../serviceCard.jsx/ServiceCard";

const ServicesSection = () => {
    const services = [
        {
            icon: <Mic2 size={32}/>,
            title: "Conference",
            description:
                "National and international gatherings connecting scientific researchers, industry professionals, and farmers to discuss agricultural innovations.",
        },
        {
            icon: <GraduationCap size={32}/>,
            title: "Trainings",
            description:
                "Specialized skill-development programs designed for students and professionals to master modern agricultural practices and technologies.",
        },
        {
            icon: <Projector size={32}/>,
            title: "Workshops",
            description:
                "Hands-on interactive sessions focusing on practical implementations, from organic farming techniques to digital tools.",
        },
        {
            icon: <UserCog size={32}/>,
            title: "FDP Program",
            description:
                "Faculty Development Programs aimed at upgrading the teaching methodologies and research capabilities of academic staff.",
        },
        {
            icon: <Tractor size={32}/>,
            title: "Agri Fair & Expo",
            description:
                "Large-scale exhibitions showcasing the latest farm machinery, hybrid seeds, and agri-tech solutions to the farming community.",
        },
        {
            icon: <Trophy size={32}/>,
            title: "Award Conclave",
            description:
                "Prestigious events dedicated to recognizing and honoring excellence among innovative farmers, scientists, and agri-startups.",
        },
    ];

    return (
        <section className="bg-white pb-10 md:pb-16">
            <div
                id="services"
                className="flex flex-col items-center py-10 md:py-16 w-11/12 mx-auto gap-4 md:gap-6"
            >
                <h3 className="text-sm md:text-base font-bold tracking-widest text-[#2E6041] uppercase">
                    What We Offer
                </h3>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900">
                    Services – What We Do
                </h1>

                <p className="text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 text-center text-[#2E6041]/80 leading-relaxed">
                    Comprehensive services designed to transform agriculture through
                    education, research, and community engagement.
                </p>
            </div>

            <div
                className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                {services.map((item, index) => (
                    <ServiceCard key={index} value={item}/>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;