import { ModuleType, SectionData } from './types';

export const SOCIAL_LINKS = [
  { name: 'IG', url: 'https://www.instagram.com/joy_9_ouo_?igsh=MWhoYnNwZjJiMW1obg%3D%3D&utm_source=qr' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@joy_chinese_?_r=1&_t=ZS-93MljP1mLMv' },
  { name: 'RedBook', url: 'https://xhslink.com/m/8N4cB24Oylt' }, 
];

export const TRAJECTORY = [
  'NANNING',
  'NANJING',
  'SHANGHAI',
  'CASABLANCA'
];

export const HERO_INTRO_EN = "Life is flow. Embrace the uncertainty and let the logic lead.";
export const HERO_INTRO_CN = "人生不设限，万物皆流动";

export const MODULES: Record<ModuleType, SectionData> = {
  [ModuleType.INQUIRY]: {
    title: 'THE INQUIRY LAB',
    concept: 'Academic Archives',
    conceptCN: '学术档案与逻辑重构',
    items: [
      {
        id: 'hsk-01',
        title: 'Visual Logic: HSK Level 1 Review System',
        subtitle: 'Web Development / UI Design',
        description: '旨在通过可视化语法逻辑，重新定义初学者的词汇习得路径。系统将复杂的抽象规则转化为可感知的视觉模块，有效降低了日语及英语母语者的认知负荷，实现了从“死记硬背”到“逻辑推演”的跨越。',
        tags: ['UX Research', 'Linguistics', 'React'],
        annotation: "Design thinking applied to language: Code is just a tool; logic is the bridge."
      },
      {
        id: 'phonetic-02',
        title: 'Acoustic Comparative Study: Tone Correction',
        subtitle: 'Applied Linguistics',
        description: '针对日籍学习者声调感知的盲区，利用声学实验手段（Praat）采集并对比音高曲线。建立了一套基于频率差异的纠音模型，为跨语言语音教学提供了实证数据支持。',
        tags: ['Data Analysis', 'Phonetics'],
        annotation: "Capturing the invisible waves of language."
      },
      {
        id: 'edu-archive',
        title: 'Career Trajectory & Institutional Policy',
        subtitle: 'Education Research',
        description: '深入分析本科阶段学生生涯发展的内在逻辑。通过对现有评价体系的归档与批判性复盘，探索教育政策在个体执行层面的落差。',
        tags: ['Sociology', 'Policy Analysis'],
        annotation: "Reading between the lines of student archives."
      }
    ]
  },
  [ModuleType.STRATEGY]: {
    title: 'STRATEGY & ACTION',
    concept: 'Field Execution',
    conceptCN: '实地执行与组织变革',
    items: [
      {
        id: '24-solar',
        title: 'Visual Series: The 24 Solar Terms',
        subtitle: 'Executive Producer',
        description: '主导“二十四节气”系列影像制作。将传统哲学的时间观念转译为现代视觉语言，负责全链条的创意指导、分镜设计与跨部门统筹执行。',
        tags: ['Art Direction', 'Project Mgmt'],
        imageUrl: 'https://picsum.photos/1000/600?grayscale&sig=1',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-cloudy-sky-2753/1080p.mp4',
        annotation: "Reinterpreting ancient rhythms for the digital age."
      },
      {
        id: 'org-reform',
        title: 'Student Governance Restructuring',
        subtitle: 'Strategic Leadership',
        description: '重塑学生组织评价体系。引入“校社联动”闭环管理模型，优化资源配置路径，使社团活动与外部社会需求实现深度对接与价值共生。',
        tags: ['Reform', 'Management'],
        imageUrl: 'https://picsum.photos/1000/600?grayscale&sig=2',
        annotation: "Structural order creates intellectual freedom."
      }
    ]
  },
  [ModuleType.SENSORY]: {
    title: 'SENSORY CURATING',
    concept: 'Cultural Interaction',
    conceptCN: '感官交互与跨域转译',
    items: [
      {
        id: 'tai-chi-africa',
        title: 'Embodied Language: Tai Chi in Casablanca',
        subtitle: 'Cultural Ambassador',
        description: '在摩洛哥卡萨布兰卡教授太极。利用肢体语言作为跨文化沟通的核心媒介，在北非的土地上构建一种非语言的文化交互场域。',
        tags: ['Cross-culture', 'Physicality'],
        imageUrl: 'https://picsum.photos/800/1000?grayscale&sig=3',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-person-practicing-tai-chi-5367/1080p.mp4',
        annotation: "Breathing with the Atlantic wind: physical movement is the ultimate universal translator."
      },
      {
        id: 'light-posture',
        title: 'Visual Direction: Portraiture & Light',
        subtitle: 'Photography Direction',
        description: '探索光影对情绪的重塑能力。通过指导模特的姿态与光线布局，捕捉观察者与被观察者之间的微妙张力与叙事可能。',
        tags: ['Visual Art', 'Direction'],
        imageUrl: 'https://picsum.photos/800/1200?grayscale&sig=4',
        annotation: "The camera is an extension of the mind's eye."
      }
    ]
  },
  [ModuleType.VISUAL]: {
    title: 'GEOGRAPHIC MEMORY',
    concept: 'Visual Archive',
    conceptCN: '地理记忆与影像坐标',
    items: [
      {
        id: 'nn-01',
        title: 'Nanning / 南宁',
        subtitle: '22.8170° N, 108.3665° E',
        description: '起源之地。四季常青的湿润与记忆的最初锚点。',
        tags: ['Root', 'Evergreen'],
        imageUrl: 'https://picsum.photos/1200/800?grayscale&sig=10',
        annotation: "Humidity is the texture of home."
      },
      {
        id: 'nj-02',
        title: 'Nanjing / 南京',
        subtitle: '32.0603° N, 118.7969° E',
        description: '梧桐覆盖下的厚重史观与学术理想的生发。',
        tags: ['History', 'Intellect'],
        imageUrl: 'https://picsum.photos/1200/800?grayscale&sig=11',
        annotation: "The gold of sycamore leaves in late autumn."
      },
      {
        id: 'sh-03',
        title: 'Shanghai / 上海',
        subtitle: '31.2304° N, 121.4737° E',
        description: '极致的加速、密度与信息过载带来的逻辑磨炼。',
        tags: ['Acceleration', 'Urban'],
        imageUrl: 'https://picsum.photos/1200/800?grayscale&sig=12',
        annotation: "Navigating the vertical complexity."
      },
      {
        id: 'casa-04',
        title: 'Casablanca / 卡萨布兰卡',
        subtitle: '33.5731° N, 7.5898° W',
        description: '大西洋沿岸的蓝白色调。一种跨越经纬的感官重置。',
        tags: ['Ocean', 'Africa'],
        imageUrl: 'https://picsum.photos/1200/800?grayscale&sig=13',
        annotation: "Where the desert meets the sea."
      }
    ]
  }
};