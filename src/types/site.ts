export interface Site {
  id: string;
  name: string;
  x: number;
  y: number;
  narrative: string;
  trial: {
    summary: string;
    charges: string;
    verdict: string;
  };
  testimony: string[];
  questions: string[];
}
