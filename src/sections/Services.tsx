import { servicesData } from "@/data/mockData";
import { Reveal } from "@/components/Reveal";

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative z-10 bg-[#0f0b18] border-t border-violet-900/30">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-14">
          <Reveal>
            <p className="text-fuchsia-400 font-semibold text-sm tracking-wide mb-4 uppercase">What I Do</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rose-50">
              Expertise &amp; Services
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => {
            return (
              <Reveal key={service.id} delay={index * 0.1} width="100%">
                <div className="flex flex-col p-6 md:p-8 rounded-2xl bg-[#16112a] border border-violet-900/40 hover:border-fuchsia-500/50 hover:bg-[#1c1535] transition-all duration-300 h-full group">
                  <span className="text-3xl font-extrabold text-violet-800/60 group-hover:text-fuchsia-400 transition-colors duration-300 mb-6 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-rose-50 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-violet-200/50 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

