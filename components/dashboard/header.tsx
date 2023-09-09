import React from "react";
import Icon from "@chakra-ui/icon";
import { Stack, Text } from "@chakra-ui/layout";
import PageHeader from "components/page-header";
import { IoIosArrowDown } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";

const Header = () => {
  return (
    <PageHeader>
      <PageHeader.Title>Dashboard</PageHeader.Title>
      <PageHeader.Description>
        Whole data about your business here
      </PageHeader.Description>
    </PageHeader>
  );
};

export default Header;
