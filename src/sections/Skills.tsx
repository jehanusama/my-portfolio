"use client";

import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { skillsData } from "@/data/mockData";
import { Monitor, Server, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative z-10 bg-[#0c0917] border-t border-violet-900/30">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-14">
          <Reveal>
            <p className="text-fuchsia-400 font-semibold text-sm tracking-wide mb-4 uppercase">My Stack</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rose-50">
              Technical Arsenal
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2} width="100%">
          <BentoGrid className="mt-12">
            <BentoGridItem
              title="Frontend Development"
              description="Building responsive, accessible, and highly interactive user interfaces."
              icon={<Monitor className="w-5 h-5 text-fuchsia-400" />}
              header={
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#16112a] border border-violet-800/50 rounded-full text-sm text-violet-300/80">
                      {skill.name}
                    </span>
                  ))}
                </div>
              }
              className="md:col-span-2 min-h-[14rem]"
            />
            <BentoGridItem
              title="UI / UX Design"
              description="User research, interaction design, and high-fidelity prototyping."
              icon={<Server className="w-5 h-5 text-fuchsia-400" />}
              header={
                <div className="flex flex-wrap gap-2">
                  {skillsData.uiux.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#16112a] border border-violet-800/50 rounded-full text-sm text-violet-300/80">
                      {skill.name}
                    </span>
                  ))}
                </div>
              }
              className="min-h-[14rem]"
            />
            <BentoGridItem
              title="Tools & Platforms"
              description="Development workflow, CI/CD, and cloud deployment."
              icon={<Wrench className="w-5 h-5 text-fuchsia-400" />}
              header={
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#16112a] border border-violet-800/50 rounded-full text-sm text-violet-300/80">
                      {skill.name}
                    </span>
                  ))}
                </div>
              }
              className="md:col-span-3 min-h-[12rem]"
            />
          </BentoGrid>
        </Reveal>
      </div>
    </section>
  );
};
