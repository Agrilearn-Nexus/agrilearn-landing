import React from "react";
import { LuQuote } from "react-icons/lu";
import visionBG from "../../assets/vision-background.jpg";
const Vision = () => {
  return (
    <div
      id="vision"
      className="bg-center"
      style={{ backgroundImage: `url(${visionBG})` }}
    >
      <div className="w-full flex flex-col gap-8 items-center bg-black/70 py-16 ">
        <h3 className="text-[#E0B732] text-lg">OUR VISION</h3>
        <h3 className="text-[#E0B732] text-6xl">
          <LuQuote size={"2.4rem"} />
        </h3>
        <p className="text-5xl text-white font-serif w-[64%] text-center font-medium">
          To become a leading platform transforming agriculture through
          education, research, and innovation while empowering communities for a{" "}
          <span className="text-[#E0B732]">sustainable future</span>.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-25 h-px bg-gray-50"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#E0B732]"></div>
          <div className="w-25 h-px bg-gray-50"></div>
        </div>
        <div className="flex gap-64 mt-10">
          <p className="font-serif text-lg text-white">Innovation</p>
          <p className="font-serif text-lg text-white">Sustainability</p>
          <p className="font-serif text-lg text-white"> Empowerment</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
