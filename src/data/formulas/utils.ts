import type { Formula } from '../../types';
import type { GradeId, SubjectId, Tag } from './types';
import { grades } from './grades';
import { subjects } from './subjects';
import { GRADE_IDS } from './constants';
import { SUBJECT_IDS } from './constants';

// 科目中文名映射
const SUBJECT_NAMES = {
  [SUBJECT_IDS.MATH]: '数学',
  [SUBJECT_IDS.PHYSICS]: '物理',
  [SUBJECT_IDS.CHEMISTRY]: '化学',
  [SUBJECT_IDS.ALL]: '全部',
} as const;

// 年级中文名映射
const GRADE_NAMES = {
  [GRADE_IDS.ALL]: '全部',
  [GRADE_IDS.P1]: '一年级',
  [GRADE_IDS.P2]: '二年级',
  [GRADE_IDS.P3]: '三年级',
  [GRADE_IDS.P4]: '四年级',
  [GRADE_IDS.P5]: '五年级',
  [GRADE_IDS.P6]: '六年级',
  [GRADE_IDS.J1]: '初一',
  [GRADE_IDS.J2]: '初二',
  [GRADE_IDS.J3]: '初三',
  [GRADE_IDS.S1]: '高一',
  [GRADE_IDS.S2]: '高二',
  [GRADE_IDS.S3]: '高三',
} as const;

export const isGradeInLevel = (gradeId: GradeId, levelId: string): boolean => {
  const grade = grades.find((g) => g.id === gradeId);
  return grade?.level === levelId;
};

export const getSubjectName = (subjectId: SubjectId): string => {
  const subject = subjects.find((s) => s.id === subjectId);
  return subject?.name || '';
};

export const getSubjectDisplayName = (subjectId: SubjectId): string => {
  return SUBJECT_NAMES[subjectId] || subjectId;
};

export const getGradeDisplayName = (gradeId: GradeId): string => {
  return GRADE_NAMES[gradeId] || gradeId;
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
