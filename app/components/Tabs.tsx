'use client';
import { useState } from 'react';
import { styled } from 'styled-components';
import { TabsType } from '../lib/types';

const TABS: TabsType[] = [
  {
    id: 1,
    name: 'All',
    department: 'all',
    isActive: true
  },
  {
    id: 2,
    name: 'Designers',
    department: 'designers',
    isActive: false
  },
  {
    id: 3,
    name: 'Analytics',
    department: 'analytics',
    isActive: false
  },
  {
    id: 4,
    name: 'Management',
    department: 'management',
    isActive: false
  },
  {
    id: 5,
    name: 'iOS',
    department: 'ios',
    isActive: false
  },
  {
    id: 6,
    name: 'Android',
    department: 'android',
    isActive: false
  },
  {
    id: 7,
    name: 'Support',
    department: 'support',
    isActive: false
  },
  {
    id: 8,
    name: 'Frontend',
    department: 'frontend',
    isActive: false
  },
  {
    id: 9,
    name: 'Back-office',
    department: 'back_office',
    isActive: false
  },
  {
    id: 10,
    name: 'PR',
    department: 'pr',
    isActive: false
  },
  {
    id: 11,
    name: 'QA',
    department: 'qa',
    isActive: false
  },
  {
    id: 12,
    name: 'HR',
    department: 'hr',
    isActive: false
  },
  {
    id: 13,
    name: 'Backend',
    department: 'backend',
    isActive: false
  },
  
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

export const Tabs = () => {
  const [activeId, setActive] = useState(1); 

  return (
    <StyledTabs>
      {TABS.map((tab) => {
        return (
          <StyledTab 
            key={tab.id} 
            className={activeId === tab.id ? 'active' : ''}
            onClick={()=> {
              setActive(tab.id)
            }}
            >
            {tab.name}
          </StyledTab>
        )
      })}
    </StyledTabs>
  );
}