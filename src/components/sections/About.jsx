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
import { useTranslations } from "next-intl";

const Bio = ({ secondary }) => {
  const t = useTranslations("About");

  return (
    <GridItem>
      <VStack m="auto" w={{ base: "100%", md: "75%" }} spacing="12px" pt="5%">
        {/* Phần giới thiệu đầu tiên */}
        <Text>
          {t("introPart1")}{" "}
          <Link href="https://www.maxflowtech.com" isExternal>
            MaxFlow Tech
          </Link>{" "}
          {t("introPart2")} <strong style={{ color: secondary }}>{t("Job Title")}</strong>. {t("introPart3")}{" "}
          <Link href="https://www.ptd.com" isExternal>
            PTD
          </Link>
          .
        </Text>

        {/* Phần chi tiết tiếp theo */}
        <Text>
          {t("detailsPart1")}{" "}
          <Link href="https://www.hackathon.com" isExternal>
            hackathons
          </Link>{" "}
          {t("detailsPart2")}
        </Text>
      </VStack>
    </GridItem>
  );
};

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
  const t = useTranslations("About");
  return (
    <SectionContainer id="about" name="about" headerMt="-5%" headerText={t("About Me")} useHeaderStyle>
      <SimpleGrid pl="10%" pt="5%" pr="10%" spacing={12} columns={[1, null, 2]} justifyContent="center">
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
