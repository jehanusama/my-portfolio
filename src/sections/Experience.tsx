import { experienceData } from "@/data/mockData";
import { Reveal } from "@/components/Reveal";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative z-10 bg-[#0f0b18] border-t border-violet-900/30">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-14">
          <Reveal>
            <p className="text-fuchsia-400 font-semibold text-sm tracking-wide mb-4 uppercase">Career</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rose-50">
              Experience
            </h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mt-8 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-700/30 to-transparent" />

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <div key={item.id} className="relative pl-12 md:pl-24">
                <Reveal delay={index * 0.1}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-4 top-1.5 w-8 h-8 rounded-full bg-[#0f0b18] border border-violet-700/50 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                  </div>

                  <div className="p-6 md:p-8 rounded-2xl bg-[#16112a] border border-violet-900/40 group hover:border-fuchsia-500/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-rose-50 group-hover:text-fuchsia-300 transition-colors">
                          {item.role}
                        </h3>
                        <div className="text-base text-violet-300/60 font-medium flex items-center gap-2 mt-1">
                          <Briefcase className="w-4 h-4" />
                          {item.company}
                        </div>
                      </div>
                      <div className="inline-flex items-center rounded-full border border-violet-800/50 bg-[#0f0b18] px-4 py-1.5 text-sm font-medium text-violet-300/70 w-fit">
                        {item.duration}
                      </div>
                    </div>
                    <p className="text-violet-200/50 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
