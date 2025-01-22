import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Footer from "@/components/layout/footer";
import { ReactLenis } from "lenis/react";

export default async function Home() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </ReactLenis>
  );
}
