import React from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { PiEnvelopeDuotone } from "react-icons/pi";
import { TbBrandBlogger, TbHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";

type NavbarProps = {
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  containerStyles: string;
};

const Navbar = ({ setMenuOpened, containerStyles }: NavbarProps) => {
  const navItem = [
    { to: "/", label: "Home", icon: <TbHome /> },
    { to: "/shop", label: "Shop", icon: <IoLibraryOutline /> },
    { to: "/blog", label: "Blog", icon: <TbBrandBlogger /> },
    {
      to: "mailto:marcellandreas.123@gmail.com",
      label: "Contact",
      icon: <PiEnvelopeDuotone />,
    },
  ];
  return (
    <nav className={containerStyles}>
      {navItem.map(({ to, label, icon }) => (
        <div key={label}>
          <NavLink
            onClick={() => setMenuOpened(false)}
            to={to}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white ring-1 ring-slate-900/10" : ""
              } flexCenter gap-x-2 px-3 py-1.5 rounded-full`
            }
          >
            <span className=" text-xl">{icon}</span>
            <span className=" medium-16">{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
