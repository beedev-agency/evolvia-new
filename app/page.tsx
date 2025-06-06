import { useMemo } from "react";
import { readFile } from "fs/promises";
import path from "path";

import { useAnimation } from "@/hooks/useAnimation";

export default async function Home() {
  const { itemVariations } = useAnimation();

  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await readFile(filePath, "utf-8");
  const projects = JSON.parse(jsonData).data.projects;

  // const titleContent = useMemo(
  //   () => (
  //     <>
  //       <motion.span variants={itemVariations}>Choose </motion.span>
  //       <motion.span variants={itemVariations}>Your</motion.span>
  //       <motion.span variants={itemVariations}>Growth</motion.span>
  //     </>
  //   ),
  //   []
  // );
  return (
    <>
      {/* <Hero
        description="We are a dynamic development agency buzzing with creativity, transforming your digital dreams into reality."
        titleContent={titleContent}
      /> */}
      {/* <Projects projects={projects} isHome /> */}
      {/* <AboutUs />
      <Contact /> */}
    </>
  );
}
