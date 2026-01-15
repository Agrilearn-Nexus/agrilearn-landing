import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
const ServiceCard = ({ value }) => {
  return (
    <div className="w-[31%] overflow-hidden flex flex-col gap-5 p-8 bg-[#F9F9F5] rounded-xl relative">
        <div className="w-[10vw] absolute -right-17.5 -top-17.5 h-[10vw] bg-[#F3F3EC] rounded-full"></div>
      <div className="bg-[#396F4D] w-fit rounded-xl text-white p-4">
        {value.icon}
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-serif">{value.title}</h1>
        <p className="w-10/12 text-lg">{value.description}</p>
        <div className="flex gap-2 items-center">
          <button className="text-md text-[#2E6041]">Learn More</button>
          <IoIosArrowRoundForward size={"1.5rem"} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
