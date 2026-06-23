import { Github, Linkedin, Twitter } from "@/components/Icons";

export const Footer = () => {
  return (
    <footer className="border-t border-violet-900/30 py-10 bg-[#0c0917] relative z-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-rose-50">
                Jehan<span className="text-fuchsia-400">Usama</span>
              </span>
            </div>
            <div className="hidden md:block w-px h-5 bg-violet-800/50" />
            <div className="text-violet-300/50 text-sm">
              Front-End Developer
            </div>
          </div>

          <div className="flex items-center gap-6 text-violet-400/40">
            <a href="https://github.com/jehanusama" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jehan-usama" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-violet-700/60 text-xs">
          © {new Date().getFullYear()} Jehan Usama. Designed and built with passion.
        </div>
      </div>
    </footer>
  );
};
