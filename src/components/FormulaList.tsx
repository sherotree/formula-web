import React, { useState } from 'react';
import { Input, Tabs, Row, Col } from 'antd';
import { Formula } from '../types';
import FormulaCard from './FormulaCard';
// import { levels, grades, subjects } from '../data/formulas/index';
import { levels } from '../data/formulas/levels';
import { grades } from '../data/formulas/grades';
import { subjects } from '../data/formulas/subjects';
import { LEVEL_IDS, GRADE_IDS, SUBJECT_IDS } from '../data/formulas/constants';
import { searchFormulas } from '../data/formulas/utils';

const { Search } = Input;

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
      // 在全部学段时，只按年级和科目筛选
      const gradeMatch = grade === GRADE_IDS.ALL || formula.grade === grade;
      const subjectMatch =
        subject === SUBJECT_IDS.ALL || formula.subject === subject;
      return gradeMatch && subjectMatch;
    }

    // 在特定学段时的筛选逻辑
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
    <div>
      <Search
        placeholder='搜索公式名称、描述、标签...'
        allowClear
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
      />

      <Tabs
        activeKey={level}
        onChange={(value) => {
          setLevel(value as any);
          setGrade(GRADE_IDS.ALL);
          setSubject(SUBJECT_IDS.ALL);
        }}
        items={levels.map((l) => ({ key: l.id, label: l.name }))}
      />

      <Tabs
        activeKey={grade}
        onChange={(value) => setGrade(value as any)}
        items={[
          { key: GRADE_IDS.ALL, label: '全部' },
          ...filteredGrades.map((g) => ({
            key: g.id,
            label: g.displayName,
          })),
        ]}
      />

      <Tabs
        activeKey={subject}
        onChange={(value) => setSubject(value as any)}
        style={{ marginBottom: 24 }}
        items={[
          { key: SUBJECT_IDS.ALL, label: '全部' },
          ...filteredSubjects.map((s) => ({
            key: s.id,
            label: s.name,
          })),
        ]}
      />

      <Row gutter={[16, 16]}>
        {searchedFormulas.map((formula) => (
          <Col xs={24} sm={12} md={8} key={formula.id}>
            <FormulaCard formula={formula} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FormulaList;
