import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Landing from "@/components/sections/Landing";
import MoreProjects from "@/components/sections/MoreProjects";
import Projects from "@/components/sections/Projects";
import styles from "@/styles/Home.module.css";
import META_DATA from "./metaData";
import { APP_URL } from "@/constants/AppConfig";
import { getTranslations } from "next-intl/server";
// import { useTranslations } from "next-intl";
// export const metadata = {
//   title: `${META_DATA.TITLE}`,
//   description: META_DATA.DESCRIPTION,
//   applicationName: META_DATA.APPLICATION_NAME,
//   keywords: META_DATA.KEYWORDS,
//   robots: META_DATA.ROBOTS,
//   openGraph: {
//     title: META_DATA.TITLE,
//     description: META_DATA.DESCRIPTION,
//     images: META_DATA.IMAGE,
//     type: "website",
//     url: APP_URL + META_DATA.URL
//   }
// };

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    applicationName: t("applicationName"),
    keywords: [
      t("keywords_1"),
      t("keywords_2"),
      t("keywords_3"),
      t("keywords_4"),
      t("keywords_5"),
      t("keywords_6"),
      t("keywords_7"),
      t("keywords_8"),
      t("keywords_9"),
      t("keywords_10")
    ],
    robots: META_DATA.ROBOTS,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: META_DATA.IMAGE,
      type: "website",
      url: APP_URL + META_DATA.URL
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: META_DATA.IMAGE
    }
  };
}

const HomePage = () => {
  // const t = useTranslations("HomePage");
  return (
    <div className={styles.container}>
      <Landing />
      <About />
      <Experience />
      <Projects />
      {/* <MoreProjects /> */}
      <Contact />
    </div>
  );
};

export default HomePage;
