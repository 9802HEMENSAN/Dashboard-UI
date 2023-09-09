import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React, { PropsWithChildren, ReactNode } from "react";

// type PageHeader = {
//   Title: typeof Title;
//   Description: typeof Description;
//   Actions: typeof Actions;
// };
const PageHeader = ({ children } ) => {
  const getChild = (type ) =>
    React.Children.map(
      children,
      (child ) => child.type.name === type && child
    );
  return (
    <Flex w="full" direction="column">
      {getChild("Title")}
      <Stack direction={{ base: "column", xl: "row" }}>
        {getChild("Description")}
        {getChild("Actions")}
      </Stack>
    </Flex>
  );
};

const Title = ({ children } ) => {
  return (
    <Text textStyle="default" fontSize="2xl" fontWeight="semibold">
      {children}
    </Text>
  );
};

const Description = ({ children } ) => {
  return <Text mr="auto">{children}</Text>;
};

const Actions = ({ children } ) => {
  return <Flex ml="auto">{children}</Flex>;
};

PageHeader.Title = Title;
PageHeader.Description = Description;
PageHeader.Actions = Actions;
export default PageHeader;
