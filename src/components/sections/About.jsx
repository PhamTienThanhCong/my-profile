"use client";

import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React from "react";

import { colors } from "@/theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w={{ base: "100%", md: "75%" }} spacing="12px" pt="5%">
      <Text>
        Hi, I'm Jarrod! I studied computer science at the University of Toronto, and I'm currently working at{" "}
        <Link href="https://www.getdbt.com/" isExternal>
          dbt Labs
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Software Engineer</strong> on the{" "}
        <Link href="https://www.getdbt.com/product/dbt-explorer" isExternal>
          Metadata team
        </Link>
        . Prior to that, I've worked at{" "}
        <Link href="https://www.sailpoint.com/" isExternal>
          SailPoint
        </Link>
        ,{" "}
        <Link href="https://www.citigroup.com/citi/" isExternal>
          Citigroup
        </Link>
        , and {"  "}
        <Link href="https://citylitics.com/" isExternal>
          Citylitics
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Software Developer</strong>.
      </Text>
      <Text>
        I enjoy creating scalable & elegant web/mobile applications that have a real world impact. I'm always learning
        new technologies, either through{" "}
        <Link href="https://devpost.com/jcserv" isExternal>
          hackathons
        </Link>{" "}
        or self-study - and recently became an{" "}
        <strong style={{ color: secondary }}>
          <Link href="https://www.credly.com/badges/517ae2cf-990f-4e3f-acf7-c7dc692c67a0/public_url" isExternal>
            AWS Certified Developer
          </Link>
        </strong>
        .
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/profile/me.jpg"
      alt="Phạm Công"
      w={"100%"}
      maxW={"450px"}
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("http://linkedin.com/in/jarrod-servilla");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <SectionContainer id="about" name="about" headerMt="-5%" headerText="About Me" useHeaderStyle>
      <SimpleGrid pl="10%" pt="5%" pr="10%" spacing={12} columns={[1, null, 2]} justifyContent="center">
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
