import { Formula, Subject, Grade } from '../types';

export const formulas: Formula[] = [
  {
    id: '1',
    name: '勾股定理',
    latex: 'a^2 + b^2 = c^2',
    description: '直角三角形斜边的平方等于两直角边平方和',
    subject: '数学',
    grade: '初中',
    tags: ['几何', '三角形'],
  },
  {
    id: '2',
    name: '质能方程',
    latex: 'E = mc^2',
    description: '质量与能量的转换关系',
    subject: '物理',
    grade: '高中',
    tags: ['相对论', '能量'],
  },
];

export const subjects: Subject[] = [
  {
    id: '1',
    name: '数学',
    grades: ['初中', '高中'],
  },
  {
    id: '2',
    name: '物理',
    grades: ['初中', '高中'],
  },
];

export const grades: Grade[] = [
  {
    id: '1',
    name: '初中',
    subjects: ['数学', '物理'],
  },
  {
    id: '2',
    name: '高中',
    subjects: ['数学', '物理'],
  },
];
