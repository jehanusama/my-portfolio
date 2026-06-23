import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-[0_0_30px_rgba(217,70,239,0.08)] transition duration-300 bg-[#16112a] p-6 border border-violet-900/40 hover:border-fuchsia-500/40 justify-between flex flex-col overflow-hidden relative",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
      {header && <div className="mb-4 z-10">{header}</div>}
      <div className="group-hover/bento:-translate-y-1 transition duration-300 z-10 flex flex-col flex-1">
        {icon && <div className="mb-4 text-fuchsia-400">{icon}</div>}
        <div className="font-sans font-bold text-rose-50 text-base mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-violet-200/50 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
