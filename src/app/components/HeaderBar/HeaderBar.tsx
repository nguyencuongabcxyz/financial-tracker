"use client";

import React, { useContext } from "react";
import { Input } from "@nextui-org/react";
import { Badge, Button } from "@nextui-org/react";
import { MdOutlineNotifications } from "react-icons/md";
import { Avatar } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import { CurrentNavItemContext } from "@/app/providers/CurrentNavItemProvider";

const HeaderBar: React.FC = () => {
  const currentNavItem = useContext(CurrentNavItemContext);
  return (
    <div className="flex p-3 justify-between items-center">
      <h1 className="font-bold text-lg">{currentNavItem.title}</h1>
      <div className="flex gap-3">
        <Input
          startContent={<IoIosSearch />}
          placeholder="Search"
          isClearable
          size="sm"
        />
        <Badge content="99+" shape="circle" color="danger">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <MdOutlineNotifications size={24} />
          </Button>
        </Badge>
        <div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
