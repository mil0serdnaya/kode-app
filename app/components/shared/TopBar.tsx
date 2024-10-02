'use client';

import { useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import SortIcon from "../../../public/icons/sort.svg";
import SearchIcon from "../../../public/icons/search.svg";
import { Sorting } from "./Sorting";
import { TopBarProps } from "../../../lib/types";

const StyledHeader = styled.header`
  padding: 16px;
`;

const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #050510;
  padding-bottom: 20px;
`;

const StyledSearchWrapper = styled.div`
  position: relative;
`;

const StyledSearchInput = styled.input`
  padding: 8px 12px 8px 44px;
  width: 100%;
  background-color: #f7f7f8;
  border-radius: 16px;
  font-size: 15px;
  line-height: 24px;
  color: #050510;

  ::placeholder {
    font-weight: 500;
    color: #c3c3c6;
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

export const TopBar: React.FC<TopBarProps> = ({
  filterText,
  sortBy,
  onFilterTextChange,
  onSortByChange,
}) => {
  const [isSortVisible, setSortVisible] = useState(false);

  return (
    <StyledHeader>
      <StyledH1>Search</StyledH1>
      <StyledSearchWrapper>
        <StyledSearchIcon src={SearchIcon} alt="Search icon" />
        <StyledSearchInput
          type="text"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          placeholder="Search by name, tag, email..."
        />
        <StyledSortBtn onClick={() => setSortVisible((prev) => !prev)}>
          <Image src={SortIcon} alt="Sort icon" />
        </StyledSortBtn>
      </StyledSearchWrapper>
      {isSortVisible && (
        <Sorting
          onSortVisibleChange={setSortVisible}
          onSortByChange={onSortByChange}
          sortBy={sortBy}
        />
      )}
    </StyledHeader>
  );
};
