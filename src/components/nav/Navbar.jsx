import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/companyLogo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ["home", "services", "objective", "vision", "contact"];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative z-50">
            <div className="flex justify-between items-center p-4 md:p-8 text-white">

                <NavLink to={"/"} className="flex gap-2 items-center z-50">
                    <img src={logo} className="w-10 rounded-full" alt="AgriLearn Nexus Logo" />
                    <h2 className="text-xl md:text-2xl font-serif">AgriLearn Nexus</h2>
                </NavLink>

                <div className="hidden md:flex gap-8 items-center">
                    <div className="flex gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="capitalize text-[18px] lg:text-[20px] font-semibold hover:text-gray-300 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div>
                        <button
                            className="text-[18px] lg:text-[20px] text-nowrap font-medium px-4 py-1 border-2 rounded-xl hover:bg-white hover:text-black transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden text-white transition-all duration-300">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setIsOpen(false)}
                            className="capitalize text-2xl font-semibold hover:text-green-400"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        className="text-2xl font-medium px-6 py-2 border-2 rounded-xl mt-4"
                    >
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;