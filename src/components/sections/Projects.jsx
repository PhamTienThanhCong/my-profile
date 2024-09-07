"use client";
import React from "react";

import ProjectsOverview from "../ProjectsOverview";
import SectionContainer from "../SectionContainer";
import { useTranslations } from "next-intl";

export default function MoreProjects() {
  const t = useTranslations("Projects");
  return (
    <SectionContainer id="projects" name="projects" headerText={t("Featured Projects")} useHeaderStyle>
      <ProjectsOverview />
    </SectionContainer>
  );
}
