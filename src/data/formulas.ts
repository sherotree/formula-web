import { Formula, Subject, Grade } from '../types';

export const formulas: Formula[] = [
  // 几何图形
  {
    id: '1',
    name: '长方形周长',
    latex: 'C = 2(l + w)',
    description: '长方形的周长等于长加宽再乘以2，其中C是周长，l是长，w是宽',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
    explanation: {
      steps: [
        '1. 找出长方形的长(l)和宽(w)',
        '2. 将长和宽相加：l + w',
        '3. 将和乘以2：2(l + w)',
        '4. 得到的结果就是周长(C)',
      ],
      image: '/images/rectangle-perimeter.png',
      notes: '记住：长方形的四个角都是直角，对边平行且相等',
    },
  },
  {
    id: '2',
    name: '长方形面积',
    latex: 'S = l × w',
    description: '长方形的面积等于长乘以宽，其中S是面积，l是长，w是宽',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
    explanation: {
      steps: [
        '1. 确定长方形的长(l)和宽(w)',
        '2. 将长和宽相乘：l × w',
        '3. 得到的结果就是面积(S)',
      ],
      image: '/images/rectangle-area.png',
      notes: '面积的单位是平方单位，如平方厘米(cm²)、平方米(m²)',
    },
  },
  {
    id: '3',
    name: '正方形周长',
    latex: 'C = 4a',
    description: '正方形的周长等于边长的4倍，其中C是周长，a是边长',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
    explanation: {
      steps: [
        '1. 找出正方形的边长(a)',
        '2. 因为正方形有4条相等的边，所以将边长乘以4',
        '3. 得到的结果就是周长(C)',
      ],
      image: '/images/square-perimeter.png',
      notes: '正方形是特殊的长方形，四条边都相等',
    },
  },
  {
    id: '4',
    name: '正方形面积',
    latex: 'S = a²',
    description: '正方形的面积等于边长的平方，其中S是面积，a是边长',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
    explanation: {
      steps: [
        '1. 确定正方形的边长(a)',
        '2. 将边长乘以自己：a × a = a²',
        '3. 得到的结果就是面积(S)',
      ],
      image: '/images/square-area.png',
      notes: '正方形的面积可以看作是长和宽相等的长方形面积',
    },
  },
  {
    id: '5',
    name: '三角形面积',
    latex: 'S = (b × h) ÷ 2',
    description: '三角形的面积等于底乘以高除以2，其中S是面积，b是底边长，h是高',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
    explanation: {
      steps: [
        '1. 找出三角形的底边长(b)和高(h)',
        '2. 将底边长和高相乘：b × h',
        '3. 将乘积除以2：(b × h) ÷ 2',
        '4. 得到的结果就是面积(S)',
      ],
      image: '/images/triangle-area.png',
      notes: '三角形的高必须是从顶点到底边的垂直距离',
    },
  },
  {
    id: '6',
    name: '圆的周长',
    latex: 'C = πd = 2πr',
    description:
      '圆的周长等于直径乘以π，或者半径乘以2π，其中C是周长，d是直径，r是半径',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
  },
  {
    id: '7',
    name: '圆的面积',
    latex: 'S = πr²',
    description: '圆的面积等于π乘以半径的平方，其中S是面积，r是半径',
    subject: '数学',
    grade: '小学',
    tags: ['几何'],
  },

  // 速度、时间、路程
  {
    id: '8',
    name: '速度公式',
    latex: 'v = s ÷ t',
    description: '速度等于路程除以时间，其中v是速度，s是路程，t是时间',
    subject: '数学',
    grade: '小学',
    tags: ['速度', '时间', '路程'],
  },
  {
    id: '9',
    name: '路程公式',
    latex: 's = v × t',
    description: '路程等于速度乘以时间，其中s是路程，v是速度，t是时间',
    subject: '数学',
    grade: '小学',
    tags: ['速度', '时间', '路程'],
  },
  {
    id: '10',
    name: '时间公式',
    latex: 't = s ÷ v',
    description: '时间等于路程除以速度，其中t是时间，s是路程，v是速度',
    subject: '数学',
    grade: '小学',
    tags: ['速度', '时间', '路程'],
  },

  // 容积和体积
  {
    id: '11',
    name: '长方体体积',
    latex: 'V = l × w × h',
    description:
      '长方体的体积等于长乘以宽乘以高，其中V是体积，l是长，w是宽，h是高',
    subject: '数学',
    grade: '小学',
    tags: ['容积', '体积'],
  },
  {
    id: '12',
    name: '正方体体积',
    latex: 'V = a³',
    description: '正方体的体积等于边长的立方，其中V是体积，a是边长',
    subject: '数学',
    grade: '小学',
    tags: ['容积', '体积'],
  },

  // 分数运算
  {
    id: '13',
    name: '分数乘法',
    latex: '\\frac{a}{b} × \\frac{c}{d} = \\frac{a×c}{b×d}',
    description: '分数相乘，分子相乘作为新分子，分母相乘作为新分母',
    subject: '数学',
    grade: '小学',
    tags: ['分数运算'],
  },
  {
    id: '14',
    name: '分数除法',
    latex: '\\frac{a}{b} ÷ \\frac{c}{d} = \\frac{a}{b} × \\frac{d}{c}',
    description: '分数除法等于第一个分数乘以第二个分数的倒数',
    subject: '数学',
    grade: '小学',
    tags: ['分数运算'],
  },

  // 百分数
  {
    id: '15',
    name: '百分数换算',
    latex: '\\frac{a}{b} = \\frac{a}{b} × 100\\%',
    description: '分数转化为百分数，等于分数乘以100%',
    subject: '数学',
    grade: '小学',
    tags: ['百分数'],
  },
  {
    id: '16',
    name: '勾股定理',
    latex: 'a^2 + b^2 = c^2',
    description: '直角三角形斜边的平方等于两直角边平方和',
    subject: '数学',
    grade: '初中',
    tags: ['几何', '三角形'],
  },
  {
    id: '17',
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
    grades: ['初中', '高中', '小学'],
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
  {
    id: '3',
    name: '小学',
    subjects: ['数学'],
  },
];
