export interface SiteImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Site {
  id: string;
  name: string;
  x: number;
  y: number;
  narrative: string;
  trial: {
    summary: string;
    charges: string;
    defence: string;
    verdict: string;
  };
  testimony: string[];
  questions: string[];
  images?: SiteImage[];
}
