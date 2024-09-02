import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
  VStack,
  HStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import Fade from "react-reveal/Fade";

import { extraProjects } from "../data/projects";
import { colors } from "../theme";
import Tech from "./Tech";
import LinkIconBar from "@/layouts/LinkIconBar";

const DisplayBar = ({ showGridView, setShowGridView }) => (
  <Stack mt={4} direction="row" spacing="12px" justifyContent="center" mb={10} float="right">
    <Tooltip label="Grid View">
      <IconButton
        aria-label="Display Grid View"
        icon={<BsGridFill />}
        isActive={showGridView}
        onClick={() => setShowGridView(true)}
      />
    </Tooltip>
    <Tooltip label="List View">
      <IconButton
        aria-label="Display List View"
        icon={<FaListUl />}
        isActive={!showGridView}
        onClick={() => setShowGridView(false)}
      />
    </Tooltip>
  </Stack>
);

const ProjectCard = ({ name, description, links, tech }) => {
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <Box
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      textAlign="start"
      m="24px"
      p={4}
      w={{ base: "80%", md: "25%" }}
    >
      <HStack justify="space-between">
        <Icon as={HiCode} boxSize="3em" color={secondary} />
        <LinkIconBar links={links} />
      </HStack>
      <Heading as="h1" size="md" mt={4}>
        {name}
      </Heading>
      <Text fontSize="md" mt={2}>
        {description}
      </Text>
      <Flex justify="center" mt={4}>
        <Tech tech={tech} />
      </Flex>
    </Box>
  );
};

const ProjectRow = ({ name, type, description, tech, links }) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{type}</Td>
    <Td>{description}</Td>
    <Td>
      <VStack align="start">
        <Tech tech={tech} techMr={2} />
      </VStack>
    </Td>
    <Td>
      <LinkIconBar links={links} />
    </Td>
  </Tr>
);

const ProjectTable = ({ projs }) => (
  <Fade>
    <Box
      style={{ overflowX: "auto" }}
      w={"100%"}
      px={{
        base: "0",
        sm: "5%",
        md: "10%"
      }}
    >
      <Table size="md" w="100%">
        <Thead>
          <Tr>
            <Th w="10%">Name</Th>
            <Th w="10%">Type</Th>
            <Th w="25%">Description</Th>
            <Th w="20%">Technologies</Th>
            <Th w="15%">Links</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projs.map((project) => (
            <ProjectRow key={project.name} {...project} />
          ))}
        </Tbody>
      </Table>
    </Box>
  </Fade>
);

export default function MoreProjectsGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGridView, setShowGridView] = useState(true);

  const projects = isExpanded ? extraProjects : extraProjects.slice(0, 3);

  return (
    <>
      <Flex justifyContent="flex-end" pl="15%" pr="15%" w="100vw">
        <DisplayBar showGridView={showGridView} setShowGridView={setShowGridView} />
      </Flex>
      <Flex justifyContent="center" w="100vw">
        <Flex spacing={6} w="100%" justify={"center"} flexWrap={"wrap"}>
          {showGridView ? (
            projects.map((project) => <ProjectCard key={project.name} {...project} />)
          ) : (
            <ProjectTable projs={projects} />
          )}
        </Flex>
      </Flex>
      <Flex justifyContent="center" w="100vw">
        <Button
          mt={6}
          leftIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {`Show ${isExpanded ? "Less" : "More"}`}
        </Button>
      </Flex>
    </>
  );
}
