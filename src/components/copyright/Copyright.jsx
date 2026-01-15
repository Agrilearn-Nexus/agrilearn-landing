import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
    return (
        <div className="w-full px-4 md:px-16 py-6 bg-[#16261E] border-t border-gray-700 text-[#B7B8AD] text-sm md:text-base">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-center md:text-left order-2 md:order-1">
                    © {new Date().getFullYear()} AgriLearn Nexus. All rights reserved.
                </p>

                <p className="text-center text-xs text-gray-500 order-3 md:order-2">
                    (Few section and more eligent site will upload soon)
                </p>

                <div className="flex gap-6 md:gap-8 order-1 md:order-3">
                    <Link
                        to={"/"}
                        className="text-[#B7B8AD] hover:text-[#E0B732] transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to={"/"}
                        className="text-[#B7B8AD] hover:text-[#E0B732] transition-colors"
                    >
                        Terms of Service
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Copyright;