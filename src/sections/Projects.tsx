"use client";
import { projectsData } from "@/data/mockData";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { Github } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 bg-[#0c0917] border-t border-violet-900/30">
      <div className="container mx-auto px-6 md:px-20">
        
        <div className="mb-16 md:mb-24">
           <Reveal>
             <h2 className="text-4xl md:text-5xl font-extrabold text-rose-50 tracking-tight">
               Featured Projects
             </h2>
           </Reveal>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Reveal delay={0.1}>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-2xl overflow-hidden bg-[#16112a] border border-violet-900/40 group shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                       <div className="text-center text-violet-700">
                         <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                         <p className="font-medium text-sm">Project Preview</p>
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-[#0c0917]/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <Reveal delay={0.2}>
                  <div className="text-fuchsia-400 text-sm font-bold uppercase tracking-wide mb-3">
                    {String(index + 1).padStart(2, '0')} &mdash; {project.category}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-rose-50 mb-4 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-violet-200/60 text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-violet-300/80 px-3 py-1 bg-[#16112a] rounded-full border border-violet-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="flex items-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 shadow-md shadow-violet-500/20 hover:-translate-y-0.5 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" /> View Site
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full text-sm font-semibold text-violet-300 border border-violet-600/40 hover:border-violet-400 hover:bg-violet-500/10 hover:-translate-y-0.5 transition-all duration-300">
                      <Github className="w-4 h-4" /> Source
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
