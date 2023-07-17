'use client';
import { styled } from 'styled-components';
import { ITabs } from '../lib/interfaces';

const TABS: ITabs[] = [
  {
    id: 1,
    name: 'All',
    isActive: true
  },
  {
    id: 2,
    name: 'Designers',
    isActive: false
  },
  {
    id: 3,
    name: 'Analysts',
    isActive: false
  },
  {
    id: 4,
    name: 'Managers',
    isActive: false
  },
  {
    id: 5,
    name: 'iOS',
    isActive: false
  },
  {
    id: 6,
    name: 'Android',
    isActive: false
  },
]

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
  return (
    <StyledTabs>
      {TABS.map((tab) => {
        return (
          <StyledTab key={tab.id} className={tab.isActive ? 'active' : ''}>
            {tab.name}
          </StyledTab>
        )
      })}
    </StyledTabs>
  );
}