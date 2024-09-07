"use client";
import React from "react";

import ExperienceOverview from "../ExperienceOverview";
import SectionContainer from "../SectionContainer";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");
  return (
    <SectionContainer id="experience" name="experience" headerText={t("Experience")} useHeaderStyle>
      <ExperienceOverview />
    </SectionContainer>
  );
}
