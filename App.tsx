
import React, { useEffect, useState } from 'react';
import { MODULES, SOCIAL_LINKS, TRAJECTORY, HERO_INTRO_EN, HERO_INTRO_CN } from './constants';
import { Section } from './components/Section';
import { Navigation } from './components/Navigation';
import { ModuleType } from './types';
import { ArrowDown, ShieldAlert, Globe } from 'lucide-react';

const App: React.FC = () => {
  // Initialize as true to ensure content is visible even if useEffect delays
  const [isLoaded, setIsLoaded] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-paper-white min-h-screen text-ink-black animate-fade-in">
      <Navigation />
      
      {/* Editorial Header */}
      <header className="fixed top-0 left-0 right-0 h-20 md:h-24 flex justify-between items-center px-6 md:px-12 z-[60] mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto flex items-baseline gap-4">
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tighter">WEI JIEZHUO</span>
          <span className="hidden md:block text-[8px] font-mono tracking-widest opacity-40 uppercase">Digital Liquid Archive v2.5</span>
        </div>
        <div className="flex items-center gap-8 pointer-events-auto">
           <div className="hidden lg:flex items-center gap-4 text-[9px] font-mono tracking-widest">
              <span className="text-terracotta">●</span>
              <span>EST. 2003</span>
              <span className="opacity-30">/</span>
              <span>UTC+8:00</span>
           </div>
           <span className="text-xs font-mono tabular-nums">{currentTime}</span>
        </div>
      </header>

      {/* Advanced Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        
        {/* Liquid Background Logic */}
        <div 
          className="absolute inset-0 -z-10 pointer-events-none opacity-40 transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${(mousePos.x - window.innerWidth/2) * 0.02}px, ${(mousePos.y - window.innerHeight/2) * 0.02}px)` 
          }}
        >
          <div className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] bg-[#F8F3F0] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] bg-[#F0F4F8] rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-12">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-extreme text-terracotta font-semibold">
                <Globe size={12} className="animate-spin-slow" /> Current Trajectory
              </span>
              <div className="flex items-center gap-4">
                {TRAJECTORY.map((city, idx) => (
                  <React.Fragment key={city}>
                    <span className="text-[11px] font-mono font-medium text-gray-500 hover:text-ink-black transition-colors">
                      {city}
                    </span>
                    {idx < TRAJECTORY.length - 1 && <span className="w-6 h-px bg-gray-200"></span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-12 -left-8 text-[12vw] font-serif italic text-gray-50 opacity-[0.03] select-none pointer-events-none leading-none">
                Archives
              </div>
              <h1 className="font-serif text-[18vw] md:text-[13vw] leading-[0.8] tracking-tighter">
                JOY<br />
                <span className="text-terracotta italic relative inline-block group">
                  WEI<span className="inline-block transition-transform duration-1000 group-hover:translate-x-4">JIEZHUO</span>
                </span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="max-w-xs space-y-6">
                <div className="h-px w-12 bg-terracotta"></div>
                <p className="font-serif text-xl italic text-ink-black leading-relaxed">
                  {HERO_INTRO_EN}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-loose">
                  Specializing in: Data-driven language acquisition & Sensory curation.
                </p>
              </div>
              
              <div className="max-w-xs flex flex-col justify-end pb-2">
                <h3 className="text-3xl md:text-4xl font-serif tracking-[0.25em] text-ink-black leading-tight">
                  {HERO_INTRO_CN}
                </h3>
                <div className="mt-8 flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest text-gray-300 mb-1">Role</span>
                    <span className="text-[10px] font-mono text-terracotta">PIONEER / STRATEGIST</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest text-gray-300 mb-1">Status</span>
                    <span className="text-[10px] font-mono text-ink-black">IN FLOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Indicator */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-12 pb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
             <div className="writing-vertical text-[9px] uppercase tracking-[0.5em] text-gray-300">
               SCROLL TO EXPLORE ARCHIVE_01
             </div>
             <div className="h-24 w-px bg-gradient-to-b from-gray-100 to-terracotta/40"></div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-24 flex items-center gap-6 animate-bounce opacity-40">
           <ArrowDown size={14} strokeWidth={1.5} />
           <span className="text-[9px] uppercase tracking-[0.4em] font-mono">Entry Point</span>
        </div>

        <div className="hidden lg:flex flex-col absolute bottom-32 right-12 gap-12">
           {SOCIAL_LINKS.map(link => (
             <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="writing-vertical text-[10px] uppercase tracking-widest text-gray-400 hover:text-terracotta hover:-translate-y-2 transition-all duration-500 interactive"
             >
               {link.name}
             </a>
           ))}
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.02)]">
        {Object.values(ModuleType).map((type, index) => (
          <div id={`section-${index}`} key={type}>
            <Section data={MODULES[type]} index={index} />
          </div>
        ))}
      </main>

      <footer className="py-32 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="max-w-6xl mx-auto space-y-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h2 className="font-serif text-5xl md:text-7xl italic text-white leading-tight">
                Let's curate the <br/><span className="text-terracotta">unknown.</span>
              </h2>
              <div className="flex gap-12">
                  {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.3em] text-gray-500 hover:text-terracotta transition-colors uppercase font-mono interactive">
                      {link.name}
                    </a>
                  ))}
              </div>
            </div>

            <div className="flex flex-col justify-between items-end text-right gap-12">
              <p className="font-serif text-lg text-gray-400 italic max-w-sm">
                "Digital liquidity is not just about tools, but the fluidity of intellectual boundaries."
              </p>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 space-y-6 max-w-sm text-left">
                <div className="flex items-center gap-3 text-terracotta">
                  <ShieldAlert size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Compliance Notice</span>
                </div>
                <div className="space-y-4">
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    This platform serves as a high-fidelity personal archive and academic laboratory. 
                    No commercial data is harvested; all content is curated for educational synthesis.
                  </p>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-light italic">
                    免责：本网站仅限个人档案与学术逻辑实验，不涉及商业变现。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10">
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.6em]">
                JOY WEI JIEZHUO
              </p>
              <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em]">
                ARCHIVE SYSTEM © 2024 / SERIAL NO. JW-009
              </p>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex flex-col items-center gap-4 interactive"
            >
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-terracotta transition-colors">
                <ArrowDown size={16} className="rotate-180 text-white/40 group-hover:text-terracotta" />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-white/20 group-hover:text-white">Back to top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
