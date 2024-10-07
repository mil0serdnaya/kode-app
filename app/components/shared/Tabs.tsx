'use client';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Tab, TabsProps } from '../../../lib/types';
import { departmentMap } from '../../../lib/constants';

const TABS: Tab[] = [
  { id: 1, department: 'all' },
  { id: 2, department: 'design' },
  { id: 3, department: 'analytics' },
  { id: 4, department: 'management' },
  { id: 5, department: 'ios' },
  { id: 6, department: 'android' },
  { id: 7, department: 'support' },
  { id: 8, department: 'frontend' },
  { id: 9, department: 'back_office' },
  { id: 10, department: 'pr' },
  { id: 11, department: 'qa' },
  { id: 12, department: 'hr' },
  { id: 13, department: 'backend' }
];

const StyledTabs = styled.div`
  padding: 0 16px;
  display: flex;
  border-bottom: 1px solid #C3C3C6;
`;

const StyledTab = styled.div<{ $isActive: boolean }>`
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $isActive }) => ($isActive ? '#050510' : '#97979B')};
  cursor: pointer;
  border-bottom: 2px solid ${({ $isActive }) => ($isActive ? '#6534FF' : 'transparent')};
  transition: all 0.2s;

  &:hover {
    color: #050510;
  }
`;

export const Tabs = ({ onDepartmentChange }: TabsProps) => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleClick = (id: number, department: string) => {
    setActiveId(id);
    onDepartmentChange(department);
  };

  return (
    <StyledTabs>
      {TABS.map(({ id, department }) => (
        <StyledTab
          key={id}
          $isActive={activeId === id}
          onClick={() => handleClick(id, department)}
        >
          {departmentMap[department] || department}
        </StyledTab>
      ))}
    </StyledTabs>
  );
};
