import {
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Select,
  Text,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
  Box,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";

import jobs from "../data/jobs";
import { colors } from "../theme";

const ExperienceSelect = ({ expIndex, setIndex }) => (
  <Select value={expIndex} onChange={(e) => setIndex(e.target.value)}>
    {jobs.map((job, index) => (
      <option key={`${job.workplace}-select-option`} value={index}>
        {job.workplace}
      </option>
    ))}
  </Select>
);

const ExperienceButtons = ({ expIndex, setIndex }) => (
  <VStack spacing={4} width="100%">
    {jobs.map((job, index) => (
      <Button key={`${job.workplace}-btn`} isActive={expIndex === index} width="100%" onClick={() => setIndex(index)}>
        {job.workplace}
      </Button>
    ))}
  </VStack>
);

const ExperienceDetails = ({ index }) => {
  const job = jobs[index];
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <VStack spacing={4} align="start">
      <Box>
        <Heading as="h1" size="md">
          {job.position} @{" "}
          <Link href={job.url} isExternal color={secondary}>
            {job.workplace}
          </Link>
        </Heading>
      </Box>
      <Box>
        {job.duration.map((duration) => (
          <Text key={duration} mt={2}>
            {duration}
          </Text>
        ))}
      </Box>
      <Box>
        <UnorderedList mt={2}>
          {job.description.map((desc) => (
            <ListItem key={desc}>{desc}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );
};

export default function ExperienceOverview() {
  const [index, setIndex] = useState(0);
  const showSelect = useBreakpointValue({
    base: false,
    lg: true
  });
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <Flex
      direction="row"
      justifyContent="center"
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      p={2}
      margin="24px"
      marginTop="3vh"
      flexDirection={showSelect ? "row" : "column"}
      width="75vw"
    >
      <VStack spacing={6} align="center" width={showSelect ? "20%" : "100%"} mt="24px" mb="24px" mr="3vw">
        {showSelect ? (
          <ExperienceButtons expIndex={index} setIndex={setIndex} />
        ) : (
          <ExperienceSelect expIndex={index} setIndex={setIndex} />
        )}
      </VStack>
      <Box width={showSelect ? "70%" : "100%"} mt="24px" mb="24px" ml="12px">
        <ExperienceDetails index={index} />
      </Box>
    </Flex>
  );
}
