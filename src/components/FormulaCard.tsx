import React, { useState } from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { Formula } from '../types';
import FormulaDialog from './FormulaDialog';

interface FormulaCardProps {
  formula: Formula;
}

const FormulaCard: React.FC<FormulaCardProps> = ({ formula }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          cursor: 'pointer',
          '&:hover': { boxShadow: 6 },
        }}
        onClick={() => setDialogOpen(true)}
      >
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {formula.name}
          </Typography>
          <Box sx={{ my: 2, textAlign: 'center' }}>
            <InlineMath math={formula.latex} />
          </Box>
          <Typography variant='body2' color='text.secondary' paragraph>
            {formula.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label={formula.subject} size='small' color='primary' />
            <Chip label={formula.grade} size='small' />
            {formula.tags.map((tag) => (
              <Chip key={tag} label={tag} size='small' variant='outlined' />
            ))}
          </Box>
        </CardContent>
      </Card>

      <FormulaDialog
        formula={formula}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default FormulaCard;
