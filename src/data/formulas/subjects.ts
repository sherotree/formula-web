import { SUBJECT_IDS, LEVEL_IDS, GRADE_IDS } from './constants';
import type { Subject } from './types';

export const subjects: Subject[] = [
  {
    id: SUBJECT_IDS.MATH,
    name: '数学',
    grades: [
      GRADE_IDS.P1,
      GRADE_IDS.P2,
      GRADE_IDS.P3,
      GRADE_IDS.P4,
      GRADE_IDS.P5,
      GRADE_IDS.P6,
      GRADE_IDS.J1,
      GRADE_IDS.J2,
      GRADE_IDS.J3,
      GRADE_IDS.S1,
      GRADE_IDS.S2,
      GRADE_IDS.S3,
    ],
    level: [LEVEL_IDS.PRIMARY, LEVEL_IDS.JUNIOR, LEVEL_IDS.SENIOR],
  },
  {
    id: SUBJECT_IDS.PHYSICS,
    name: '物理',
    grades: [
      GRADE_IDS.J1,
      GRADE_IDS.J2,
      GRADE_IDS.J3,
      GRADE_IDS.S1,
      GRADE_IDS.S2,
      GRADE_IDS.S3,
    ],
    level: [LEVEL_IDS.JUNIOR, LEVEL_IDS.SENIOR],
  },
  {
    id: SUBJECT_IDS.CHEMISTRY,
    name: '化学',
    grades: [
      GRADE_IDS.J2,
      GRADE_IDS.J3,
      GRADE_IDS.S1,
      GRADE_IDS.S2,
      GRADE_IDS.S3,
    ],
    level: [LEVEL_IDS.JUNIOR, LEVEL_IDS.SENIOR],
  },
];
