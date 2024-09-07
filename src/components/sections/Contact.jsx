"use client";

import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

import SectionContainer from "../SectionContainer";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact Me");
  return (
    <SectionContainer id="contact" name="contact" headerText={t("Contact Me")} useHeaderStyle>
      <Flex justify="center" textAlign="center" pl={4} pr={4} flexDirection={"column"}>
        <Text fontSize="xl" m="auto" mt={6}>
          {t("Title 1")}
        </Text>
        <Text fontSize="xl" m="auto">
          {t("Title 2")}
        </Text>
        <Button as={Link} leftIcon={<EmailIcon />} href="mailto:congpham.work@gmail.com" m="auto" mt={6}>
          {t("Send Email")}
        </Button>
      </Flex>
    </SectionContainer>
  );
}
