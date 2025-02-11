import React, { useState } from 'react';
import { Grid, Tabs, Tab, Box, TextField } from '@mui/material';
import { Formula } from '../types';
import FormulaCard from './FormulaCard';
// import { levels, grades, subjects } from '../data/formulas/index';
import { levels } from '../data/formulas/levels';
import { grades } from '../data/formulas/grades';
import { subjects } from '../data/formulas/subjects';
import { LEVEL_IDS, GRADE_IDS, SUBJECT_IDS } from '../data/formulas/constants';
import { searchFormulas } from '../data/formulas/utils';

interface FormulaListProps {
  formulas: Formula[];
}

const FormulaList: React.FC<FormulaListProps> = ({ formulas }) => {
  const [level, setLevel] = useState(LEVEL_IDS.ALL);
  const [grade, setGrade] = useState(GRADE_IDS.ALL);
  const [subject, setSubject] = useState(SUBJECT_IDS.ALL);
  const [searchText, setSearchText] = useState('');

  // 根据当前学段筛选年级
  const filteredGrades =
    level === LEVEL_IDS.ALL ? grades : grades.filter((g) => g.level === level);

  // 根据当前学段筛选科目
  const filteredSubjects =
    level === LEVEL_IDS.ALL
      ? subjects
      : subjects.filter((s) => s.level.includes(level));

  // 筛选公式
  const filteredFormulas = formulas.filter((formula) => {
    if (level === LEVEL_IDS.ALL) {
      return true; // 显示所有公式
    }
    const gradeObj = grades.find((g) => g.id === formula.grade);
    const levelMatch = gradeObj?.level === level;
    const gradeMatch = grade === GRADE_IDS.ALL || formula.grade === grade;
    const subjectMatch =
      subject === SUBJECT_IDS.ALL || formula.subject === subject;
    return levelMatch && gradeMatch && subjectMatch;
  });

  // 搜索过滤
  const searchedFormulas = searchFormulas(filteredFormulas, searchText);

  return (
    <Box>
      {/* 搜索框 */}
      <TextField
        fullWidth
        variant='outlined'
        placeholder='搜索公式名称、描述、标签...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ mb: 2 }}
      />

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
        {searchedFormulas.map((formula) => (
          <Grid item xs={12} sm={6} md={4} key={formula.id}>
            <FormulaCard formula={formula} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FormulaList;
