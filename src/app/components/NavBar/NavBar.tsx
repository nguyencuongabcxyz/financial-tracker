"use client";

import React from "react";
import NavBarItem from "./NavBarItem";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";
import { GoHome, GoGoal } from "react-icons/go";
import { GrGrow } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";

export const navItems: NavBarItem[] = [
  { title: "Home", href: "/", icon: <GoHome /> },
  { title: "Transactions", href: "/transactions", icon: <BiBook /> },
  { title: "Investment", href: "/investment", icon: <GrGrow /> },
  { title: "Goals", href: "/goals", icon: <GoGoal /> },
  { title: "Wish List", href: "/wish-list", icon: <IoIosStarOutline /> },
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
