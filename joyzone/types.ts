export enum ModuleType {
  INQUIRY = 'INQUIRY LAB',
  STRATEGY = 'STRATEGY & ACTION',
  SENSORY = 'SENSORY CURATING',
  VISUAL = 'GEOGRAPHIC MEMORY'
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  imageUrl?: string; 
  videoUrl?: string; // New: Support for video content
  annotation?: string; 
}

export interface SectionData {
  title: string;
  concept: string; 
  conceptCN: string; 
  items: ProjectItem[];
}