import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Landing from "@/components/sections/Landing";
import MoreProjects from "@/components/sections/MoreProjects";
import Projects from "@/components/sections/Projects";
import styles from "@/styles/Home.module.css";
// export const metadata = {
//   title: `${APP_NAME} | ${META_DATA.TITLE}`,
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
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <MoreProjects />
      <Contact />
    </div>
  );
};

export default HomePage;
