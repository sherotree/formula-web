import React, { useState } from 'react';
import { Card, Tag, Typography } from 'antd';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { Formula } from '../types';
import FormulaDialog from './FormulaDialog';
import {
  getSubjectDisplayName,
  getGradeDisplayName,
} from '../data/formulas/utils';
import type { GradeId } from '../data/formulas/types';

const { Text, Paragraph } = Typography;

interface FormulaCardProps {
  formula: Formula;
}

const FormulaCard: React.FC<FormulaCardProps> = ({ formula }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card
        title={formula.name}
        hoverable
        onClick={() => setDialogOpen(true)}
        style={{ height: '100%' }}
      >
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <InlineMath math={formula.latex} />
        </div>
        <Paragraph>{formula.description}</Paragraph>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Tag color='blue'>{getSubjectDisplayName(formula.subject)}</Tag>
          <Tag>{getGradeDisplayName(formula.grade as GradeId)}</Tag>
          {formula.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
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
