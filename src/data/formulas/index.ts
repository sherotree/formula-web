import { mathFormulas } from './math';
import { chemistryFormulas } from './chemistry';
import { physicsFormulas } from './physics';
import type { Formula } from '../../types';

export const formulas: Formula[] = [
  ...mathFormulas,
  ...chemistryFormulas,
  ...physicsFormulas,
];

export * from './constants';
export * from './types';
export * from './math';
export * from './physics';
export * from './chemistry';
export * from './subjects';
export * from './grades';
export * from './levels';

// 辅助函数
export const getFormulasBySubject = (subject: string) =>
  formulas.filter((f) => f.subject === subject);

export const getFormulasByGrade = (grade: string) =>
  formulas.filter((f) => f.grade === grade);

export const getFormulasByTag = (tag: string) =>
  formulas.filter((f) => f.tags.includes(tag));

export const getFormulaById = (id: string) => formulas.find((f) => f.id === id);
