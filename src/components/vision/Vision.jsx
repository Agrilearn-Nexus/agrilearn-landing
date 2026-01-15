import React from "react";
import { LuQuote } from "react-icons/lu";
import visionBG from "../../assets/vision-background.jpg";

const Vision = () => {
  return (
      <div
          id="vision"
          className="bg-center bg-cover bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${visionBG})` }}
      >
        <div className="w-full flex flex-col gap-6 md:gap-8 items-center bg-black/75 py-16 md:py-24 px-4">

          <h3 className="text-[#E0B732] text-sm md:text-lg font-bold tracking-widest uppercase">
            Our Vision
          </h3>

          <div className="text-[#E0B732]">
            <LuQuote className="text-4xl md:text-6xl" />
          </div>

          <p className="text-2xl md:text-4xl lg:text-5xl text-white font-serif w-11/12 md:w-3/4 lg:w-2/3 text-center font-medium leading-tight md:leading-snug">
            To become a leading platform transforming agriculture through
            education, research, and innovation while empowering communities for a{" "}
            <span className="text-[#E0B732]">sustainable future</span>.
          </p>

          <div className="flex items-center gap-3 mt-4 md:mt-6">
            <div className="w-16 md:w-24 h-px bg-gray-400/50"></div>
            <div className="w-2 h-2 md:w-3.5 md:h-3.5 rounded-full bg-[#E0B732] shadow-[0_0_10px_#E0B732]"></div>
            <div className="w-16 md:w-24 h-px bg-gray-400/50"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-16 lg:gap-32 mt-8 md:mt-10">
            {["Innovation", "Sustainability", "Empowerment"].map((word, index) => (
                <p
                    key={index}
                    className="font-serif text-base md:text-xl text-white/90 tracking-wide uppercase border-b-2 border-transparent hover:border-[#E0B732] transition-all cursor-default"
                >
                  {word}
                </p>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Vision;