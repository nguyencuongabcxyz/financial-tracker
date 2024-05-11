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
        "flex items-center hover:bg-zinc-300 hover:rounded-md p-3 gap-2 text-zinc-500 font-medium":
          true,
        [activeClassNames]: active,
      })}
    >
      {icon}
      <p>{title}</p>
    </Link>
  );
};

export const activeClassNames =
  "bg-zinc-200 rounded-md p-3 gap-2 text-zinc-950 font-semibold";

export default NavBarItem;
