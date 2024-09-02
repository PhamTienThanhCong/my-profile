import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Tech = ({ tech, techMr }) => (
  <Flex justify={"center"} ma>
    {tech.map((item, index) => (
      <Text key={`${item}-${index}`} as="kbd" mr={techMr} mx={1.5}>
        {item}
      </Text>
    ))}
  </Flex>
);

export default Tech;
