import { Hero } from "@/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/sections/About").then((mod) => mod.About));
const Skills = dynamic(() => import("@/sections/Skills").then((mod) => mod.Skills));
const Projects = dynamic(() => import("@/sections/Projects").then((mod) => mod.Projects));
const Experience = dynamic(() => import("@/sections/Experience").then((mod) => mod.Experience));
const Education = dynamic(() => import("@/sections/Education").then((mod) => mod.Education));
const Contact = dynamic(() => import("@/sections/Contact").then((mod) => mod.Contact));
import { Footer } from "@/components/Footer";

import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <PageTransition>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </PageTransition>
    </main>
  );
}
