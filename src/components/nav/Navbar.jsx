import { NavLink } from "react-router-dom";
import logo from "../../assets/companyLogo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-8 text-white">
      <div className="flex gap-2 items-center">
        <img src={logo} className="w-10 rounded-full"/>
        <h2 className="text-2xl font-serif">AgriLearn Nexus</h2>
      </div>
      <div className="flex gap-8 w-1/3 items-center">
        <div className="flex gap-6">
          {["Home", "Events", "Services", "About", "Contact"].map(
            (item, index) => (
              <NavLink className={`text-[15px] font-semibold`}>{item}</NavLink>
            )
          )}
        </div>
        <div>
          <button
            className={`text-[16px] font-medium px-3 py-1 border-2 rounded-xl`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
