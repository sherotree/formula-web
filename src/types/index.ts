export interface Formula {
  id: string;
  name: string;
  latex: string;
  description: string;
  subject: string;
  grade: string;
  textbook?: string;
  tags: string[];
  explanation?: {
    steps?: string[];
    image?: string;
    notes?: string;
  };
}

export interface Subject {
  id: string;
  name: string;
  grades: string[];
}

export interface Grade {
  id: string;
  name: string;
  subjects: string[];
}
