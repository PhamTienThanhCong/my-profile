"use client";

import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";

import links from "@/data/footerLinks";
import styles from "@/styles/sections/Landing.module.css";
import { colors } from "@/theme";
import SectionContainer from "../SectionContainer";
import LinkIconBar from "@/layouts/LinkIconBar";
import { useTranslations } from "next-intl";

export default function Landing() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  const t = useTranslations("Landing");

  const header = (
    <div className={styles.center}>
      <h1 className={styles.tagline} style={{ color: primary }}>
        {t("Hello")} {t("Name")},{" "}
      </h1>
      <h1 className={styles.tagline} style={{ color: primary }}>
        {" "}
        {t("a")} <strong style={{ color: secondary }}>{t("Title")}.</strong>
      </h1>
    </div>
  );

  return (
    <>
      <SectionContainer id="landing" name="landing" headerText={header}>
        <LinkIconBar links={links} />
        <Link activeClass="active" to="about" spy smooth offset={-70} duration={500}>
          <VStack>
            <Text as="strong" _hover={{ color: secondary }} className={styles.learn}>
              {t("Learn More")}
            </Text>
            <Jump forever duration={1500}>
              <BsChevronDown />
            </Jump>
          </VStack>
        </Link>
      </SectionContainer>
    </>
  );
}
