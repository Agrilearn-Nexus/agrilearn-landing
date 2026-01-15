import { IoIosArrowRoundForward } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
const Hero = () => {
  return (
    <div className="w-10/12 h-[80vh] mx-auto flex flex-col items-center text-white gap-10">
      <div className="px-3 py-1 rounded-full bg-black w-fit flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        Transforming Agriculture Through Education
      </div>
      <h1 className="text-7xl text-center font-serif">
        Empowering Education, <span className="text-[#E8BA30]">Research</span> &{" "}
        <span className="text-[#E8BA30]">Agriculture</span>
      </h1>
      <p className="text-3xl w-2/3 text-center">
        Transforming agriculture through knowledge, innovation, and training for
        a sustainable future.
      </p>
      <div className="flex gap-4">
        <button className="text-2xl font-semibold py-3 px-6 bg-[#E8BA30] rounded-xl text-black flex gap-2 cursor-pointer">
          Explore Our Programs
          <IoIosArrowRoundForward size={"2.2rem"} />
        </button>
        <button className="text-2xl font-semibold py-3 px-6 border-2 border-white rounded-xl flex gap-2 items-center cursor-pointer">
          <CiPlay1 />
          Watch Our Story
        </button>
      </div>
      <div className="flex justify-between  w-10/12">
        {[
          { total: "10K+", work: "Farmers Trained" },
          { total: "500+", work: "Workshops" },
          { total: "50+", work: "Research Papers" },
          { total: "25+", work: "Partner Institutions" },
        ].map((item, index) => (
          <div className="flex items-center justify-between gap-5 p-4 rounded-xl flex-col w-1/5 border-2 border-white bg-black/30 ">
            <h1 className="text-4xl font-bold text-[#E8BA30]">{item.total}</h1>
            <p className="text-md">{item.work}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
