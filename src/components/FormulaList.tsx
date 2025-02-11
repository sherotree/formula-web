import React, { useState } from 'react';
import { Grid, Tabs, Tab, Box } from '@mui/material';
import { Formula } from '../types';
import FormulaCard from './FormulaCard';
import { levels, grades, subjects } from '../data/formulas';

interface FormulaListProps {
  formulas: Formula[];
}

const FormulaList: React.FC<FormulaListProps> = ({ formulas }) => {
  const [level, setLevel] = useState('primary');
  const [grade, setGrade] = useState('all');
  const [subject, setSubject] = useState('all');

  // 根据当前学段筛选年级
  const filteredGrades = grades.filter((g) => g.level === level);

  // 根据当前学段筛选科目
  const filteredSubjects = subjects.filter((s) => s.level.includes(level));

  // 筛选公式
  const filteredFormulas = formulas.filter((formula) => {
    const gradeObj = grades.find((g) => g.id === formula.grade);
    const levelMatch = gradeObj?.level === level;
    const gradeMatch = grade === 'all' || formula.grade === grade;
    const subjectMatch = subject === 'all' || formula.subject === subject;
    return levelMatch && gradeMatch && subjectMatch;
  });

  return (
    <Box>
      {/* 学段选择 */}
      <Tabs
        value={level}
        onChange={(_, value) => {
          setLevel(value);
          setGrade('all');
          setSubject('all');
        }}
        sx={{ mb: 2 }}
      >
        {levels.map((l) => (
          <Tab key={l.id} label={l.name} value={l.id} />
        ))}
      </Tabs>

      {/* 年级选择 */}
      <Tabs
        value={grade}
        onChange={(_, value) => setGrade(value)}
        sx={{ mb: 2 }}
      >
        <Tab label='全部' value='all' />
        {filteredGrades.map((g) => (
          <Tab key={g.id} label={g.displayName} value={g.id} />
        ))}
      </Tabs>

      {/* 科目选择 */}
      <Tabs
        value={subject}
        onChange={(_, value) => setSubject(value)}
        sx={{ mb: 3 }}
      >
        <Tab label='全部' value='all' />
        {filteredSubjects.map((s) => (
          <Tab key={s.id} label={s.name} value={s.id} />
        ))}
      </Tabs>

      {/* 公式列表 */}
      <Grid container spacing={3}>
        {filteredFormulas.map((formula) => (
          <Grid item xs={12} sm={6} md={4} key={formula.id}>
            <FormulaCard formula={formula} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FormulaList;
