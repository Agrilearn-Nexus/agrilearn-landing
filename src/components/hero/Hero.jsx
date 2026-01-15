import { IoIosArrowRoundForward } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
    return (
        <div className="w-11/12 md:w-10/12 min-h-[85vh] mx-auto flex flex-col items-center justify-center text-white gap-8 md:gap-10 py-10 md:py-0">

            <div className="px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 w-fit flex items-center gap-2 text-sm md:text-base">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                Transforming Agriculture Through Education
            </div>

            <h1 className="text-2xl md:text-6xl lg:text-7xl text-center font-serif leading-tight">
                Empowering Education, <br className="hidden md:block" />
                <span className="text-[#E8BA30]">Research</span> &{" "}
                <span className="text-[#E8BA30]">Agriculture</span>
            </h1>

            <p className="text-md md:text-2xl lg:text-3xl w-full md:w-3/4 lg:w-2/3 text-center text-gray-200">
                Transforming agriculture through knowledge, innovation, and training for
                a sustainable future.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <button className="text-lg md:text-xl font-semibold py-3 px-8 bg-[#E8BA30] rounded-xl text-black flex items-center justify-center gap-2 hover:bg-[#d4a825] transition-colors">
                    Explore Our Programs
                    <IoIosArrowRoundForward size={"1.8rem"} />
                </button>
                <button className="text-lg md:text-xl font-semibold py-3 px-8 border-2 border-white rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <CiPlay1 />
                    Watch Our Story
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-8 md:mt-4">
                {[
                    { total: "10K+", work: "Farmers Trained" },
                    { total: "500+", work: "Workshops" },
                    { total: "50+", work: "Research Papers" },
                    { total: "25+", work: "Partner Inst." },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/30 bg-black/40 backdrop-blur-md hover:border-[#E8BA30] transition-colors"
                    >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E8BA30]">
                            {item.total}
                        </h1>
                        <p className="text-sm md:text-base text-gray-300 text-center">
                            {item.work}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;