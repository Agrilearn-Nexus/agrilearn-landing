import React from "react";

const ObjectiveCard = ({ value }) => {
    return (
        <div className="w-full flex flex-col gap-4 md:gap-5 p-6 md:p-8 items-center rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-default border border-transparent hover:border-gray-100">

            <div className="bg-[#396F4D] w-fit rounded-full text-white p-4 md:p-5 shadow-lg mb-2">
                <div className="scale-75 md:scale-100">
                    {value.icon}
                </div>
            </div>

            <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-900 text-center">
                {value.title}
            </h1>

            <p className="w-full text-sm md:text-base text-center text-gray-600 leading-relaxed">
                {value.description}
            </p>
        </div>
    );
};

export default ObjectiveCard;