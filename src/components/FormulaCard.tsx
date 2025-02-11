import React, { useState } from 'react';
import { Card, Tag, Typography } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { Formula } from '../types';
import FormulaDialog from './FormulaDialog';
import {
  getSubjectDisplayName,
  getGradeDisplayName,
} from '../data/formulas/utils';
import type { GradeId } from '../data/formulas/types';

const { Paragraph } = Typography;

interface FormulaCardProps {
  formula: Formula;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  isDragging?: boolean;
}

const FormulaCard: React.FC<FormulaCardProps> = ({
  formula,
  isFavorite,
  onToggleFavorite,
  isDragging,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(formula.id);
  };

  return (
    <>
      <Card
        title={formula.name}
        hoverable
        onClick={() => setDialogOpen(true)}
        style={{
          height: '100%',
          opacity: isDragging ? 0.5 : 1,
        }}
        extra={
          <div onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
            {isFavorite ? (
              <StarFilled style={{ color: '#fadb14' }} />
            ) : (
              <StarOutlined />
            )}
          </div>
        }
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
