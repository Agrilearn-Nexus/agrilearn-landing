import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="px-16 py-5 bg-[#16261E] flex justify-between text-[#B7B8AD]">
      <p className="">© {new Date().getFullYear()} AgriLearn Nexus. All rights reserved.</p>
      <div className="flex gap-8">
        <Link className="text-[#B7B8AD] hover:text-[#E0B732]">Privacy Policy</Link>
        <Link className="text-[#B7B8AD] hover:text-[#E0B732]">Terms of Service</Link>
      </div>
    </div>
  );
};

export default Copyright;
