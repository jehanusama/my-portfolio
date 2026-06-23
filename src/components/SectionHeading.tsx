import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center text-center">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-neutral-400 max-w-2xl text-lg mt-4">{subtitle}</p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mt-8 opacity-80" />
      </Reveal>
    </div>
  );
};
