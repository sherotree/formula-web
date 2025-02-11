import { SUBJECT_IDS, LEVEL_IDS, GRADE_IDS, TAGS } from './constants';

export type SubjectId = (typeof SUBJECT_IDS)[keyof typeof SUBJECT_IDS];
export type LevelId = (typeof LEVEL_IDS)[keyof typeof LEVEL_IDS];
export type GradeId = (typeof GRADE_IDS)[keyof typeof GRADE_IDS];
export type Tag = (typeof TAGS)[keyof typeof TAGS];

export interface Formula {
  id: string;
  name: string;
  latex: string;
  description: string;
  subject: SubjectId;
  grade: GradeId;
  tags: Tag[];
  explanation?: {
    steps: string[];
    image?: string;
    notes?: string;
  };
}

export interface Subject {
  id: SubjectId;
  name: string;
  grades: GradeId[];
  level: LevelId[];
}

export interface Grade {
  id: GradeId;
  name: string;
  displayName: string;
  level: LevelId;
  order: number;
}

export interface Level {
  id: LevelId;
  name: string;
  order: number;
}
