import React from 'react';
import { Modal, Typography, Divider, List, Tag } from 'antd';
import { InlineMath } from 'react-katex';
import { Formula } from '../types';
import {
  getSubjectDisplayName,
  getGradeDisplayName,
} from '../data/formulas/utils';
import type { GradeId } from '../data/formulas/types';

const { Title, Text, Paragraph } = Typography;

interface FormulaDialogProps {
  formula: Formula;
  open: boolean;
  onClose: () => void;
}

const FormulaDialog: React.FC<FormulaDialogProps> = ({
  formula,
  open,
  onClose,
}) => {
  return (
    <Modal
      title={formula.name}
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <InlineMath math={formula.latex} />
      </div>
      <Paragraph>{formula.description}</Paragraph>

      {formula.explanation && (
        <>
          <Divider />

          {formula.explanation.image && (
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img
                src={formula.explanation.image}
                alt={formula.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '300px',
                  borderRadius: '8px',
                }}
              />
            </div>
          )}

          {formula.explanation.steps && (
            <div style={{ margin: '16px 0' }}>
              <Title level={5}>解题步骤</Title>
              <List
                dataSource={formula.explanation.steps}
                renderItem={(step) => <List.Item>{step}</List.Item>}
              />
            </div>
          )}

          {formula.explanation.notes && (
            <div style={{ margin: '16px 0' }}>
              <Title level={5}>注意事项</Title>
              <Text type='secondary'>{formula.explanation.notes}</Text>
            </div>
          )}
        </>
      )}

      <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Tag color='blue'>{getSubjectDisplayName(formula.subject)}</Tag>
        <Tag>{getGradeDisplayName(formula.grade as GradeId)}</Tag>
        {formula.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Modal>
  );
};

export default FormulaDialog;
