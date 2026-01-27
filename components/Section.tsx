import React, { useState, useRef, useEffect } from 'react';
import { SectionData, ProjectItem } from '../types';
import { Plus, Minus, ArrowLeft, ArrowRight, CornerDownRight, Play, ExternalLink } from 'lucide-react';

interface SectionProps {
  data: SectionData;
  index: number;
}

// 1. Academic Card (Inquiry Lab)
const TextProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <div className="group relative border-l border-gray-100 pl-8 py-10 hover:border-terracotta transition-all duration-500">
    <div className="absolute left-[-5px] top-12 w-2.5 h-2.5 rounded-full bg-white border border-gray-200 group-hover:bg-terracotta group-hover:border-terracotta transition-all"></div>
    
    <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
      <div>
        <h3 className="font-serif text-2xl md:text-3xl text-ink-black group-hover:text-terracotta transition-colors tracking-tight">
          {item.title}
        </h3>
        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">
          REF: {item.id.toUpperCase()} // {item.subtitle}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map(tag => (
          <span key={tag} className="text-[9px] uppercase tracking-widest text-gray-400 border border-gray-100 px-2 py-0.5 font-sans">
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    <div className="md:max-w-3xl">
      <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light text-justify font-serif">
        {item.description}
      </p>
      {item.annotation && (
        <div className="mt-6 flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
           <CornerDownRight size={14} className="text-terracotta mt-1 shrink-0" />
           <p className="text-xs italic text-gray-500 font-serif leading-relaxed">
             {item.annotation}
           </p>
        </div>
      )}
    </div>
  </div>
);

// 2. Media Card (Strategy & Sensory)
const MediaProjectCard: React.FC<{ item: ProjectItem; className?: string }> = ({ item, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div className={`group relative flex flex-col h-full bg-white transition-all duration-700 ${className}`}>
      <div className="relative overflow-hidden w-full aspect-[16/10] bg-gray-50 border border-gray-100">
        {item.imageUrl && (
          <img 
            src={item.imageUrl} 
            alt={item.title}
            className={`object-cover w-full h-full transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 ${item.videoUrl ? 'group-hover:opacity-0' : ''}`}
            loading="lazy"
          />
        )}
        
        {item.videoUrl && (
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted
            loop
            playsInline
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => {
                videoRef.current?.pause();
                if (videoRef.current) videoRef.current.currentTime = 0;
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}

        {item.videoUrl && (
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white border border-white/20 group-hover:opacity-0 transition-opacity">
            <Play size={10} fill="currentColor" />
          </div>
        )}
        
        {/* Subtle Index Overlay */}
        <div className="absolute top-4 left-4 text-[9px] font-mono text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
           [ {item.id} ]
        </div>
      </div>
      
      <div className="pt-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-4 bg-terracotta"></span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
                {item.subtitle}
            </span>
        </div>
        <h3 className="font-serif text-xl text-ink-black mb-3 group-hover:text-terracotta transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-light mb-4 flex-grow">
          {item.description}
        </p>
        <div className="flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[9px] text-gray-300 border-b border-gray-100">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Photo Deck (Geographic Memory)
const PhotoDeck: React.FC<{ items: ProjectItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="w-full relative py-12 md:py-24 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Info Section */}
        <div className="lg:col-span-4 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="space-y-1">
                <span className="text-[10px] font-mono text-terracotta tracking-widest uppercase block">
                  Archive No. {currentIndex + 1}
                </span>
                <h3 className="font-serif text-4xl text-ink-black italic leading-tight">
                  {items[currentIndex].title}
                </h3>
            </div>
            
            <p className="text-gray-500 font-serif text-sm leading-relaxed border-l-2 border-gray-100 pl-6 italic">
              "{items[currentIndex].description}"
            </p>
            
            <div className="flex flex-col gap-1">
               <span className="text-[10px] font-mono text-gray-400 uppercase">Location Metadata</span>
               <span className="text-xs font-mono text-ink-black tracking-tight">{items[currentIndex].subtitle}</span>
            </div>

            <div className="flex items-center gap-6 pt-8">
               <button onClick={prev} className="p-3 border border-gray-200 rounded-full hover:border-terracotta hover:text-terracotta transition-all">
                  <ArrowLeft size={16} />
               </button>
               <div className="text-[10px] font-mono tracking-widest text-gray-300">
                 {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
               </div>
               <button onClick={next} className="p-3 border border-gray-200 rounded-full hover:border-terracotta hover:text-terracotta transition-all">
                  <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </div>

        {/* Right: Large Image Wrapper */}
        <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden shadow-2xl" onClick={() => next()}>
                <img 
                    key={currentIndex}
                    src={items[currentIndex].imageUrl} 
                    alt={items[currentIndex].title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out animate-fade-in grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-ink-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] tracking-widest uppercase border border-white/30 px-4 py-2 backdrop-blur-sm">
                      Next Capture
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open first section by default
  const contentRef = useRef<HTMLDivElement>(null);

  const isInquiry = data.title.includes('INQUIRY');
  const isVisual = data.title.includes('MEMORY');
  const isDefault = !isInquiry && !isVisual;

  return (
    <section className="border-b border-gray-100 last:border-0 relative">
      {/* Header */}
      <div 
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-baseline gap-6">
           <span className="text-[10px] font-mono text-gray-300 font-bold tracking-widest leading-none">
             0{index + 1}
           </span>
           <div className="space-y-2">
             <h2 className="font-serif text-4xl md:text-6xl text-ink-black tracking-tighter group-hover:text-terracotta transition-colors duration-500">
                {data.title}
             </h2>
             <div className="flex items-center gap-3">
               <p className="text-[10px] uppercase tracking-extreme text-gray-400 font-sans">
                 {data.conceptCN}
               </p>
               <span className="h-px w-8 bg-gray-100"></span>
               <p className="text-[10px] italic font-serif text-gray-400">
                 {data.concept}
               </p>
             </div>
           </div>
        </div>
        
        <div className="flex items-center gap-12 self-end md:self-center">
            <div className="text-gray-200 group-hover:text-terracotta transition-all duration-500 transform scale-150">
              {isOpen ? <Minus size={16} strokeWidth={1} /> : <Plus size={16} strokeWidth={1} />}
            </div>
        </div>
      </div>

      {/* Expandable Body */}
      <div 
        ref={contentRef}
        style={{ 
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0 
        }}
        className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.2, 0, 0, 1)]"
      >
        <div className="pb-24">
          {/* LAYOUT LOGIC */}
          {isInquiry && (
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-4">
              {data.items.map(item => <TextProjectCard key={item.id} item={item} />)}
            </div>
          )}

          {isDefault && (
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {data.items.map((item, idx) => (
                 <MediaProjectCard 
                    key={item.id} 
                    item={item} 
                    className={idx % 3 === 0 ? 'md:col-span-2' : ''}
                 />
              ))}
            </div>
          )}

          {isVisual && <PhotoDeck items={data.items} />}
        </div>
      </div>
    </section>
  );
};