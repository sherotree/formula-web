import { Grade } from '../../types';
import { LEVEL_IDS } from './constants';

export const grades: Grade[] = [
  // 小学
  {
    id: 'p1',
    name: 'grade1',
    displayName: '一年级',
    level: LEVEL_IDS.PRIMARY,
    order: 1,
  },
  {
    id: 'p2',
    name: 'grade2',
    displayName: '二年级',
    level: LEVEL_IDS.PRIMARY,
    order: 2,
  },
  {
    id: 'p3',
    name: 'grade3',
    displayName: '三年级',
    level: LEVEL_IDS.PRIMARY,
    order: 3,
  },
  {
    id: 'p4',
    name: 'grade4',
    displayName: '四年级',
    level: LEVEL_IDS.PRIMARY,
    order: 4,
  },
  {
    id: 'p5',
    name: 'grade5',
    displayName: '五年级',
    level: LEVEL_IDS.PRIMARY,
    order: 5,
  },
  {
    id: 'p6',
    name: 'grade6',
    displayName: '六年级',
    level: LEVEL_IDS.PRIMARY,
    order: 6,
  },
  // 初中
  {
    id: 'j1',
    name: 'junior1',
    displayName: '初一',
    level: LEVEL_IDS.JUNIOR,
    order: 7,
  },
  {
    id: 'j2',
    name: 'junior2',
    displayName: '初二',
    level: LEVEL_IDS.JUNIOR,
    order: 8,
  },
  {
    id: 'j3',
    name: 'junior3',
    displayName: '初三',
    level: LEVEL_IDS.JUNIOR,
    order: 9,
  },
  // 高中
  {
    id: 's1',
    name: 'senior1',
    displayName: '高一',
    level: LEVEL_IDS.SENIOR,
    order: 10,
  },
  {
    id: 's2',
    name: 'senior2',
    displayName: '高二',
    level: LEVEL_IDS.SENIOR,
    order: 11,
  },
  {
    id: 's3',
    name: 'senior3',
    displayName: '高三',
    level: LEVEL_IDS.SENIOR,
    order: 12,
  },
];
