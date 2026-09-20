export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  client: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  year: string;
  accentColor: string;
  secondaryColor: string;
  features: string[];
  desktopPreview: {
    headline: string;
    subheadline: string;
    heroStat: string;
    badge: string;
    theme: 'dark' | 'light' | 'neon';
  };
}

export interface Founder {
  name: string;
  role: string;
  title: string;
  avatarBio: string;
  quote: string;
  specialties: string[];
  tools: string[];
  experienceYears: string;
  badge: string;
}

export interface EstimatorState {
  projectType: 'landing' | 'brand' | 'ecommerce' | 'webapp';
  animationLevel: 'clean' | 'immersive' | 'cutting-edge';
  timeline: 'standard' | 'express';
  addons: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  highlight: string;
  metric: string;
  rating: number;
}
