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
  grades: string[]; // 适用的年级
  level: string[]; // 适用的学段
}

export interface Grade {
  id: string;
  name: string;
  displayName: string; // 显示名称，如"一年级"
  level: string; // 所属学段，如"小学"
  order: number; // 用于排序
}
