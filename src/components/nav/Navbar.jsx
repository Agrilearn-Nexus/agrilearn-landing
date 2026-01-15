import { NavLink } from "react-router-dom";
import logo from "../../assets/companyLogo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-8 text-white">
      <NavLink to={"/"} className="flex gap-2 items-center">
        <img src={logo} className="w-10 rounded-full" />
        <h2 className="text-2xl font-serif">AgriLearn Nexus</h2>
      </NavLink>
      <div className="flex gap-8 w-[41%] items-center">
        <div className="flex gap-6">
          {["home", "services", "objective", "vision", "contact"].map(
            (item, index) => (
              <a
                href={`#${item}`}
                className={`capitalize text-[20px] font-semibold`}
              >
                {item}
              </a>
            )
          )}
        </div>
        <div>
          <button
            className={`text-[20px] text-nowrap font-medium px-3 py-1 border-2 rounded-xl`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
