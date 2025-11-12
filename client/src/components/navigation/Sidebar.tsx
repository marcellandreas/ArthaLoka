import { BiLogOut } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { navItemsAdmin } from "../constants/navItems";

const Sidebar = () => {
  const navItems = navItemsAdmin;

  return (
    <div className=" mx-auto max-w-[1440px] flex flex-col sm:flex-row">
      {/* sidebar */}
      <div className=" max-sm:flex-center max-sm:pb-3 bg-primary pb-3 m-2 sm:min-w-[20%] sm:min-h-[97vh] rounded-xl">
        <div className="flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-4 sm:pt-14">
          {/* logo */}
          <Link
            to={"/admin"}
            className="bold-20 md:bold-24 uppercase font-paci flex-col sm:pl-14"
          >
            ArthaLoka<span className=" text-secondary bold-28">.</span>
          </Link>
          <div className="flex sm:flex-col sm:gap-x-5 gap-y-8 sm:pt-10">
            {navItems.map((link) => (
              <NavLink
                to={link.path}
                key={link.label}
                end={link.path === "/admin"}
                className={({ isActive }) =>
                  isActive
                    ? "flexStart gap-x-2 p-5 lg:pl-12 medium-15 cursor-pointer h-10 text-secondary bg-white max-sm:border-b-4 sm:border-r-4 border-secondary"
                    : "flexStart p-5 gap-x-2 lg:pl-12 medium-15 cursor-pointer h-10 rounded-xl"
                }
              >
                {link.icon}
                <div className=" hidden sm:flex">{link.label}</div>
              </NavLink>
            ))}
            <div className="max-sm:ml-5 sm:mt-48">
              <button className="flexStart gap-x-2 lg:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl text-red-500">
                <BiLogOut className=" text-lg" />
                <div className=" hidden sm:flex">Logout</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
