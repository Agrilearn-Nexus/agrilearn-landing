import React from "react";
import ObjectiveCard from "../objectiveCard/ObjectiveCard";
import {
  Briefcase,
  Handshake,
  Microscope,
  HandHelping,
  GraduationCap,
  Users,
} from "lucide-react";

const ObjectiveSection = () => {
  const mainObjectives = [
    {
      icon: <Briefcase size={64} />,
      title: "Training Professionals",
      description:
          "We are providing both offline and online training to train professionals for the Industry, teaching them the latest techniques.",
    },
    {
      icon: <Handshake size={64} />,
      title: "Collaborating",
      description:
          "We are co-operating and collaborating with institutions having similar objectives to hold seminars, conferences and discussions.",
    },
    {
      icon: <Microscope size={64} />,
      title: "Promotion of Research",
      description:
          "AEEFWS is mainly engaged in the promotion of research in the field of Agricultural and Allied Science.",
    },
    {
      icon: <HandHelping size={64} />,
      title: "Providing Assistance",
      description:
          "We are actively helping research workers by providing financial and other help.",
    },
    {
      icon: <GraduationCap size={64} />,
      title: "Educating Young Minds",
      description:
          "We believe the first step of society in the right direction would come from educating and motivating young minds.",
    },
    {
      icon: <Users size={64} />,
      title: "Build Community",
      description:
          "Foster a network of agricultural professionals, researchers, and farmers working together.",
    },
  ];

  return (
      <section id="objective" className="bg-[#ECF4EE] mt-10 md:mt-20 py-10 md:py-20">

        <div className="flex flex-col items-center w-11/12 mx-auto gap-4 md:gap-6 mb-10 md:mb-16">
          <h3 className="text-sm md:text-base font-bold tracking-widest text-[#2E6041] uppercase">
            Our Purpose
          </h3>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-center text-gray-900">
            Our Main Objectives
          </h1>

          <p className="text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 text-center text-[#2E6041] leading-relaxed">
            Driving meaningful change in agriculture through focused initiatives
            and collaborative efforts.
          </p>
        </div>

        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mainObjectives.map((item, index) => (
              <ObjectiveCard key={index} value={item} />
          ))}
        </div>
      </section>
  );
};

export default ObjectiveSection;