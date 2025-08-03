import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import UserMenu from "./user-menu";

const HeaderDashboard = () => {
  return (
    <header className="flex items-center top-0 p-4 border-b w-full justify-between">
      <SidebarTrigger />
      <UserMenu />
    </header>
  );
};

export default HeaderDashboard;
