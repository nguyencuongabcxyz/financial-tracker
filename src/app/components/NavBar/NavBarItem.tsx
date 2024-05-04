import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface NavBarItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  title,
  href,
  icon,
  active = false,
}) => {
  return (
    <Link
      href={href}
      className={classNames({
        "flex items-center hover:bg-slate-200 hover:rounded-md p-3 gap-2 text-zinc-500":
          true,
        "bg-slate-200 rounded-md p-3 gap-2 text-zinc-950": active,
      })}
    >
      {icon}
      <p>{title}</p>
    </Link>
  );
};

export default NavBarItem;
