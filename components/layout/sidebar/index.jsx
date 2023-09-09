import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiBasket } from "react-icons/bi";
import {
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineFolder,
} from "react-icons/hi";
import NavItem from "./nav-item";
import { FiPlus, FiPower, FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
import { NavContext } from "..";
import CollapsedItem from "./collapsed-item";

const Sidebar = () => {
  const router = useRouter();
  const { isOpen } = useContext(NavContext);
  const NavAction = isOpen ? CollapsedItem : NavItem;
  
  return (
    <Stack
      layerStyle="card"
      rounded="xl"
      w={isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
      display={["none", , "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
      whiteSpace="nowrap"
    >
      {routes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={router.pathname === props.href}
          {...props}
        />
      ))}
      {/* <NavAction name="Settings" icon={FiSettings} />
      <NavAction name="Logout" icon={FiPower} /> */}
    </Stack>
  );
};

export default Sidebar;

export const routes = [
  { name: "Dashboard", href: "/", icon: RiDashboardLine },
  { name: "WhatsApp", href: "/chat", icon: HiOutlineChat, count: 3 },
  { name: "Timings", href: "/CreateSlot", icon: HiOutlineCalendar },
  { name: "All Patients", href: "/allPatients", icon: HiOutlineFolder },
  { name: "Staff", href: "/staff", icon: BiBasket },
  { name: "Marketting", href: "/marketing", icon: BiBasket },
  { name: "Analytics", href: "/analytics", icon: BiBasket },
  { name: "Customise Form", href: "/customise-form", icon: BiBasket },
  { name: "Google Profile", href: "/staff", icon: BiBasket },
];

 