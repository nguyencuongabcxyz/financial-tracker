"use client";

import React from "react";
import NavBarItem from "./NavBarItem";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";
import { GoHome, GoGoal } from "react-icons/go";
import { GrGrow } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";

export const navItems: NavBarItem[] = [
  { title: "Home", href: "/", icon: <GoHome size={20} /> },
  { title: "Transactions", href: "/transactions", icon: <BiBook size={20} /> },
  { title: "Investment", href: "/investment", icon: <GrGrow size={20} /> },
  { title: "Goals", href: "/goals", icon: <GoGoal size={20} /> },
  {
    title: "Budget",
    href: "/budget",
    icon: <LuWallet size={20} />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <IoSettingsOutline size={20} />,
  },
  { title: "Help", href: "/help", icon: <FiHelpCircle size={20} /> },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-5 flex flex-col gap-1">
      {navItems.map(({ title, href, icon }) => (
        <div key={title}>
          <NavBarItem
            title={title}
            href={href}
            icon={icon}
            active={pathname === href}
          />
        </div>
      ))}
    </nav>
  );
};

export interface NavBarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export default NavBar;
