export interface Formula {
  id: string;
  name: string;
  latex: string;
  description: string;
  subject: 'math' | 'physics' | 'chemistry';
  grade: string;
  tags: string[];
  explanation?: {
    steps: string[];
    image?: string;
    notes?: string;
  };
}

export interface Subject {
  id: string;
  name: string;
  grades: string[];
  level: string[];
}

export interface Grade {
  id: string;
  name: string;
  displayName: string;
  level: string;
  order: number;
}
