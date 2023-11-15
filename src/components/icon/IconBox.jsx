import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props) {
  const { icon, ...rest } = props;

  return (
    <Flex
      {...rest}
      mr={"18px"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"50%"}
    >
      {icon}
    </Flex>
  );
}
