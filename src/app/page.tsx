import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Services } from "@/sections/Services";
import { Contact } from "@/sections/Contact";
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
        <Services />
        <Contact />
        <Footer />
      </PageTransition>
    </main>
  );
}
