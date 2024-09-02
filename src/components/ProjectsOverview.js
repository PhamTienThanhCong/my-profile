import { Box, Flex, Heading, Image, Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";

import projects from "@/data/projects";
import { colors } from "@/theme";
import Tech from "./Tech";
import LinkIconBar from "@/layouts/LinkIconBar";

const Card = ({ name, subtitle, description, links }) => {
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

  return (
    <Box
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      mt={0}
      m="auto"
      mb={3}
      w="75%"
      textAlign="start"
    >
      <Heading as="h1" size="lg" m={2} p={2} pt={6}>
        {name}
      </Heading>
      <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={6}>
        {subtitle}
      </Text>
      <Text m={2} p={2} pb={6}>
        {description}
      </Text>
      <LinkIconBar links={links} float="right" mt={0} mr={4} mb={4} />
    </Box>
  );
};

const ProjectContent = ({ alternate, name, subtitle, description, pic, tech, links }) => {
  if (alternate) {
    return (
      <>
        <Card name={name} subtitle={subtitle} description={description} links={links} />
        <VStack spacing={4} align="center">
          <Tech tech={tech} />
        </VStack>
      </>
    );
  }
  return (
    <Image
      m="auto"
      w="85%"
      p="auto"
      src={pic}
      alt={`${name} picture`}
      className="image"
      onClick={() => {
        window.open(links[0].url);
      }}
    />
  );
};

const Project = ({ index, shouldAlternate, ...props }) => (
  <Fade>
    <Flex direction="row" justify="center" align="center" height="70vh">
      <VStack w="50%" align="center" justify="center">
        <ProjectContent alternate={shouldAlternate ? index % 2 === 0 : false} {...props} />
      </VStack>
      <VStack w="50%" align="center" justify="center">
        <ProjectContent alternate={shouldAlternate ? index % 2 === 1 : true} {...props} />
      </VStack>
    </Flex>
  </Fade>
);

export default function ProjectsOverview() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  return (
    <Flex pt={12} direction="column" align="center" justify="center">
      {projects.map((project, index) => (
        <Project key={project.name} index={index} shouldAlternate={shouldAlternate} {...project} />
      ))}
    </Flex>
  );
}
