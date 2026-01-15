import {
  Mic2,
  GraduationCap,
  Projector,
  UserCog,
  Tractor,
  Trophy,
} from "lucide-react";
import ServiceCard from "../serviceCard.jsx/ServiceCard";
const ServicesSection = () => {
  const services = [
    {
      icon: <Mic2 />,
      title: "Conference",
      description:
        "National and international gatherings connecting scientific researchers, industry professionals, and farmers to discuss agricultural innovations.",
    },
    {
      icon: <GraduationCap />,
      title: "Trainings",
      description:
        "Specialized skill-development programs designed for students and professionals to master modern agricultural practices and technologies.",
    },
    {
      icon: <Projector />,
      title: "Workshops",
      description:
        "Hands-on interactive sessions focusing on practical implementations, from organic farming techniques to digital tools.",
    },
    {
      icon: <UserCog />,
      title: "FDP Program",
      description:
        "Faculty Development Programs aimed at upgrading the teaching methodologies and research capabilities of academic staff.",
    },
    {
      icon: <Tractor />,
      title: "Agri Fair & Expo",
      description:
        "Large-scale exhibitions showcasing the latest farm machinery, hybrid seeds, and agri-tech solutions to the farming community.",
    },
    {
      icon: <Trophy />,
      title: "Award Conclave",
      description:
        "Prestigious events dedicated to recognizing and honoring excellence among innovative farmers, scientists, and agri-startups.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center py-16 w-11/12 mx-auto gap-6">
        <h3 className="text-md">WHAT WE OFFER</h3>
        <h1 className="font-serif text-4xl font-semibold">
          Services – What We Do
        </h1>
        <p className="text-xl w-1/2 text-center text-[#2E6041]">
          Comprehensive services designed to transform agriculture through
          education, research, and community engagement.
        </p>
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto gap-6">
        {services.map((item, index) => (
          <ServiceCard value={item} />
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
