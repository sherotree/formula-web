export const SUBJECT_IDS = {
  ALL: 'all',
  MATH: 'math',
  PHYSICS: 'physics',
  CHEMISTRY: 'chemistry',
} as const;

export const LEVEL_IDS = {
  PRIMARY: 'primary',
  JUNIOR: 'junior',
  SENIOR: 'senior',
} as const;

export const GRADE_IDS = {
  ALL: 'all',
  // 小学
  P1: 'p1',
  P2: 'p2',
  P3: 'p3',
  P4: 'p4',
  P5: 'p5',
  P6: 'p6',
  // 初中
  J1: 'j1',
  J2: 'j2',
  J3: 'j3',
  // 高中
  S1: 's1',
  S2: 's2',
  S3: 's3',
} as const;

export const TAGS = {
  // 数学标签
  GEOMETRY: '几何',
  ALGEBRA: '代数',
  STATISTICS: '统计',
  TRIGONOMETRY: '三角函数',
  CALCULUS: '微积分',

  // 物理标签
  MECHANICS: '力学',
  THERMODYNAMICS: '热学',
  ELECTROMAGNETISM: '电磁学',
  OPTICS: '光学',

  // 化学标签
  CHEMICAL_REACTION: '化学反应',
  GAS_PREPARATION: '气体制取',
  ACID_BASE: '酸碱反应',
  REDOX: '氧化还原',
  ORGANIC: '有机化学',
  ELECTROCHEMISTRY: '电化学',
  CHEMICAL_EQUILIBRIUM: '化学平衡',
} as const;
