import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ value }) => {
    return (
        <div className="group w-full flex flex-col gap-5 p-6 md:p-8 bg-[#F9F9F5] rounded-xl relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-[#396F4D]/10">

            <div className="absolute -right-10 -top-10 w-24 h-24 md:w-32 md:h-32 bg-[#F3F3EC] rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="relative z-10 bg-[#396F4D] w-fit rounded-xl text-white p-4 shadow-md">
                {value.icon}
            </div>

            <div className="relative z-10 flex flex-col gap-4 md:gap-6 flex-grow">
                <h1 className="text-xl md:text-2xl font-serif font-semibold text-gray-900">
                    {value.title}
                </h1>

                <p className="w-full text-base md:text-lg text-gray-600 leading-relaxed">
                    {value.description}
                </p>

                <div className="mt-auto flex gap-2 items-center cursor-pointer group/btn">
                    <button className="text-md font-medium text-[#2E6041] group-hover/btn:underline">
                        Learn More
                    </button>
                    <IoIosArrowRoundForward
                        size={"1.5rem"}
                        className="text-[#2E6041] transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;