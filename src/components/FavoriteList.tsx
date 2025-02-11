import React from 'react';
import { Tabs, Row, Col, Empty } from 'antd';
import { Formula } from '../types';
import FormulaCard from './FormulaCard';
import { SUBJECT_IDS } from '../data/formulas/constants';
import { getSubjectDisplayName } from '../data/formulas/utils';
import { SubjectId } from '../data/formulas/types';

interface FavoriteListProps {
  formulas: Formula[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({
  formulas,
  favorites,
  onToggleFavorite,
}) => {
  // 获取收藏的公式
  const favoriteFormulas = formulas.filter((f) => favorites.includes(f.id));

  // 按科目分组
  const formulasBySubject = Object.values(SUBJECT_IDS).reduce(
    (acc, subjectId) => {
      if (subjectId === SUBJECT_IDS.ALL) return acc;
      acc[subjectId as SubjectId] = favoriteFormulas.filter(
        (f) => f.subject === subjectId
      );
      return acc;
    },
    {} as Record<SubjectId, Formula[]>
  );

  const items = Object.entries(formulasBySubject).map(
    ([subjectId, formulas]) => ({
      key: subjectId,
      label: getSubjectDisplayName(subjectId as SubjectId),
      children:
        formulas.length > 0 ? (
          <Row gutter={[16, 16]}>
            {formulas.map((formula) => (
              <Col xs={24} sm={12} md={8} key={formula.id}>
                <FormulaCard
                  formula={formula}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description='暂无收藏公式' />
        ),
    })
  );

  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};

export default FavoriteList;
