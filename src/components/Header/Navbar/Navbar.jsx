import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
           <nav className="flex flex-col md:flex-row justify-between items-center py-6 shadow-md px-6">
            <Logo></Logo>
            <ul className="flex gap-10">
                <li>
                <NavLink
         to="/"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
           }
          >
          Home
        </NavLink>
                </li>
                <li>
                <NavLink
         to="/donation"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
           }
          >
          Donation
        </NavLink>
                </li>
                <li>
                <NavLink
         to="/statistics"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
           }
          >
          Statistics
        </NavLink>
                </li>
            </ul>
           </nav>
        </div>
    );
};

export default Navbar;