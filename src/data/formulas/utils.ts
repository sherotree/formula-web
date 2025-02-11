import type { Formula } from '../../types';
import type { GradeId, SubjectId, Tag } from './types';
import { grades } from './grades';
import { subjects } from './subjects';

export const isGradeInLevel = (gradeId: GradeId, levelId: string): boolean => {
  const grade = grades.find((g) => g.id === gradeId);
  return grade?.level === levelId;
};

export const getSubjectName = (subjectId: SubjectId): string => {
  const subject = subjects.find((s) => s.id === subjectId);
  return subject?.name || '';
};

export const getGradeDisplayName = (gradeId: GradeId): string => {
  const grade = grades.find((g) => g.id === gradeId);
  return grade?.displayName || '';
};

export const groupFormulasByTag = (
  formulas: Formula[]
): Record<Tag, Formula[]> => {
  return formulas.reduce((acc, formula) => {
    formula.tags.forEach((tag) => {
      if (!acc[tag as Tag]) {
        acc[tag as Tag] = [];
      }
      acc[tag as Tag].push(formula);
    });
    return acc;
  }, {} as Record<Tag, Formula[]>);
};

export const groupFormulasByGrade = (
  formulas: Formula[]
): Record<GradeId, Formula[]> => {
  return formulas.reduce((acc, formula) => {
    if (!acc[formula.grade as GradeId]) {
      acc[formula.grade as GradeId] = [];
    }
    acc[formula.grade as GradeId].push(formula);
    return acc;
  }, {} as Record<GradeId, Formula[]>);
};

export const searchFormulas = (
  formulas: Formula[],
  searchText: string
): Formula[] => {
  if (!searchText.trim()) return formulas;

  const searchLower = searchText.toLowerCase();

  return formulas.filter((formula) => {
    // 搜索条件：名称、描述、标签、latex公式
    return (
      formula.name.toLowerCase().includes(searchLower) ||
      formula.description.toLowerCase().includes(searchLower) ||
      formula.latex.toLowerCase().includes(searchLower) ||
      formula.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
      formula.explanation?.notes?.toLowerCase().includes(searchLower) ||
      formula.explanation?.steps.some((step) =>
        step.toLowerCase().includes(searchLower)
      )
    );
  });
};
