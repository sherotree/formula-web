import React, { useState } from 'react';
import { Grid, Tabs, Tab, Box } from '@mui/material';
import { Formula } from '../types';
import FormulaCard from './FormulaCard';
import { subjects, grades } from '../data/formulas';

interface FormulaListProps {
  formulas: Formula[];
}

const FormulaList: React.FC<FormulaListProps> = ({ formulas }) => {
  const [subject, setSubject] = useState('all');
  const [grade, setGrade] = useState('all');

  const filteredFormulas = formulas.filter(
    (formula) =>
      (subject === 'all' || formula.subject === subject) &&
      (grade === 'all' || formula.grade === grade)
  );

  return (
    <Box>
      <Tabs
        value={subject}
        onChange={(_, value) => setSubject(value)}
        sx={{ mb: 2 }}
      >
        <Tab label='全部' value='all' />
        {subjects.map((s) => (
          <Tab key={s.id} label={s.name} value={s.name} />
        ))}
      </Tabs>
      <Tabs
        value={grade}
        onChange={(_, value) => setGrade(value)}
        sx={{ mb: 3 }}
      >
        <Tab label='全部' value='all' />
        {grades.map((g) => (
          <Tab key={g.id} label={g.name} value={g.name} />
        ))}
      </Tabs>
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
