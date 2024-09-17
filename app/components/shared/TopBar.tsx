'use client';
import { useState } from "react";
import { styled } from 'styled-components';
import Image from 'next/image';
import SortIcon from '../../../public/icons/sort.svg';
import SearchIcon from '../../../public/icons/search.svg';
import { Sorting } from './Sorting';

const StyledHeader = styled.header`
  padding: 16px;
`;

const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #050510;
  padding: 0 0 20px 8px;
`;

const StyledSearchWrapper = styled.div`
  position: relative;
`;

const StyledSearchInput = styled.input`
  padding: 8px 12px 8px 44px;
  width: 100%;
  max-width: 100%;
  background-color: #F7F7F8;
  border-radius: 16px;
  font-size: 15px;
  line-height: 24px;
  color: #050510;

  ::placeholder {
    font-weight: 500;
    color: #C3C3C6;
  }
`;

const StyledSortBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
`;

const StyledSearchIcon = styled(Image)`
  position: absolute;
  top: 8px;
  left: 12px;
`;

export const TopBar = ({
  filterText,
  sortBy,
  onFilterTextChange,
  onSortByChange
}:{
  filterText: string;
  sortBy: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  onSortByChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isSortVisivle, setSortVisible] = useState(false);

  return (
    <StyledHeader>
      <StyledH1>Search</StyledH1>
      <StyledSearchWrapper>
        <StyledSearchIcon
          src={SearchIcon}
          alt="Search icon"
        />
        <StyledSearchInput 
          type="text" 
          value={filterText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilterTextChange(e.target.value)}
          placeholder="Search by name, tag, email..."/>
        <StyledSortBtn onClick={() => setSortVisible(!isSortVisivle)}>
          <Image
            src={SortIcon}
            alt="Sort icon"
          />
        </StyledSortBtn>
      </StyledSearchWrapper>
      {isSortVisivle && 
        <Sorting 
          onSortVisibleChange={setSortVisible} 
          onSortByChange={onSortByChange}
          sortBy={sortBy}
        />}
    </StyledHeader>
  );
}