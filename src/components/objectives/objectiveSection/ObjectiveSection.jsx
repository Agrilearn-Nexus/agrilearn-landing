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
    <div id="objective" className="bg-[#ECF4EE] mt-10">
      <div className="flex flex-col items-center py-16 w-11/12 mx-auto gap-6">
        <h3 className="text-md text-[#2E6041]">OUR PURPOSE</h3>
        <h1 className="font-serif text-4xl font-semibold">
          Our Main Objective
        </h1>
        <p className="text-xl w-1/2 text-center text-[#2E6041]">
          Driving meaningful change in agriculture through focused initiatives
          and collaborative efforts.
        </p>
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto gap-6">
        {mainObjectives.map((item, index) => (
          <ObjectiveCard value={item} />
        ))}
      </div>
    </div>
  );
};

export default ObjectiveSection;
