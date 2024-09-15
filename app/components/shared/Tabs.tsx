'use client';
import { useState } from 'react';
import { styled } from 'styled-components';
import { TabsType } from '../../../lib/types';

const TABS: TabsType[] = [
  {
    id: 1,
    name: 'All',
    department: 'all',
  },
  {
    id: 2,
    name: 'Designers',
    department: 'design',
  },
  {
    id: 3,
    name: 'Analytics',
    department: 'analytics',
  },
  {
    id: 4,
    name: 'Management',
    department: 'management',
  },
  {
    id: 5,
    name: 'iOS',
    department: 'ios',
  },
  {
    id: 6,
    name: 'Android',
    department: 'android',
  },
  {
    id: 7,
    name: 'Support',
    department: 'support',
  },
  {
    id: 8,
    name: 'Frontend',
    department: 'frontend',
  },
  {
    id: 9,
    name: 'Back-office',
    department: 'back_office',
  },
  {
    id: 10,
    name: 'PR',
    department: 'pr',
  },
  {
    id: 11,
    name: 'QA',
    department: 'qa',
  },
  {
    id: 12,
    name: 'HR',
    department: 'hr',
  },
  {
    id: 13,
    name: 'Backend',
    department: 'backend',
  }
];

const StyledTabs = styled.div`
  padding: 0 16px;
  display: flex;
  border-bottom: 1px solid #C3C3C6;
`;

const StyledTab = styled.div`
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: #97979B;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all .2s;

  &.active {
    border-bottom: 2px solid #6534FF;
    color: #050510;
  }
`;

export const Tabs = ({
  onDepartmentChange,
}:{
  onDepartmentChange: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [activeId, setActive] = useState(1);
  const handleClick = (id: number, department: string) => {
    setActive(id);
    onDepartmentChange(department);
  }

  return (
    <StyledTabs>
      {TABS.map((tab) => {
        return (
          <StyledTab 
            key={tab.id} 
            className={activeId === tab.id ? 'active' : ''}
            onClick={() => handleClick(tab.id, tab.department)}>
            {tab.name}
          </StyledTab>
        )
      })}
    </StyledTabs>
  );
}