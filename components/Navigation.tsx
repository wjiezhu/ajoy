
import React, { useState, useEffect } from 'react';
import { ModuleType } from '../types';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string, index: number) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
    }
  };

  return (
    <nav className="fixed top-0 right-0 h-screen w-16 md:w-24 hidden md:flex flex-col justify-between items-center py-16 z-[70] pointer-events-none">
      <div className="pointer-events-auto cursor-pointer group interactive" onClick={scrollToTop}>
        <span className="writing-vertical text-[10px] tracking-[0.4em] uppercase text-ink-black/40 group-hover:text-terracotta transition-all">
          Index.Top
        </span>
      </div>
      
      <div className="flex flex-col gap-10 pointer-events-auto items-center">
         {Object.values(ModuleType).map((module, index) => (
           <button 
             key={module}
             onClick={() => scrollToSection(`section-${index}`, index)}
             className="group relative flex flex-row-reverse items-center interactive"
           >
             <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeSection === index ? 'bg-terracotta scale-150' : 'bg-ink-black opacity-10 group-hover:opacity-100'}`}></div>
             <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[9px] uppercase tracking-[0.3em] whitespace-nowrap text-terracotta font-bold translate-x-4 group-hover:translate-x-0">
                {module}
             </span>
           </button>
         ))}
      </div>

      <div className="pointer-events-auto">
        <span className="writing-vertical text-[9px] tracking-[0.5em] uppercase text-ink-black/20">
          LOG_2024
        </span>
      </div>
    </nav>
  );
};
