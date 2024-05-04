"use client";

import React, { createContext } from "react";
import { usePathname } from "next/navigation";
import { NavBarItem, navItems } from "../components/NavBar/NavBar";

interface Props {
  children: React.ReactNode;
}

const CurrentNavItemProvider: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();
  const currentNavItem = navItems.find((item) => item.href === pathName);
  if (!currentNavItem) return null;

  return (
    <CurrentNavItemContext.Provider value={currentNavItem}>
      {children}
    </CurrentNavItemContext.Provider>
  );
};

export const CurrentNavItemContext = createContext<NavBarItem>(
  {} as NavBarItem
);

export default CurrentNavItemProvider;
