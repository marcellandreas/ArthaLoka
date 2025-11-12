import { FaSquarePlus } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { TbBrandBlogger, TbHome } from "react-icons/tb";
import { IoLibraryOutline } from "react-icons/io5";
import { PiEnvelopeDuotone } from "react-icons/pi";
import type { NavItemAdmin, NavItemUser } from "../../interface/navigation";

export const navItemsAdmin: NavItemAdmin[] = [
  { path: "/admin", label: "Add Item", icon: <FaSquarePlus /> },
  { path: "/admin/list", label: "List", icon: <FaListAlt /> },
  { path: "/admin/orders", label: "Orders", icon: <MdFactCheck /> },
];

export const navItemUser: NavItemUser[] = [
  { to: "/", label: "Home", icon: <TbHome /> },
  { to: "/shop", label: "Shop", icon: <IoLibraryOutline /> },
  { to: "/blog", label: "Blog", icon: <TbBrandBlogger /> },
  {
    to: "mailto:marcellandreas.123@gmail.com",
    label: "Contact",
    icon: <PiEnvelopeDuotone />,
  },
];
