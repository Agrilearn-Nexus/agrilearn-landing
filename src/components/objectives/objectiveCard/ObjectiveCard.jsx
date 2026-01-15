import React from "react";

const ObjectiveCard = ({ value }) => {
  return (
    <div className="w-[31%] overflow-hidden flex flex-col gap-5 p-8 items-center">
      <div className="bg-[#396F4D] w-fit rounded-full text-white p-4">
        {value.icon}
      </div>
      <h1 className="text-xl font-serif">{value.title}</h1>
      <p className="w-10/12 text-md text-center">{value.description}</p>
    </div>
  );
};

export default ObjectiveCard;
