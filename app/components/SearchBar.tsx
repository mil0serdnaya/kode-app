'use client';
import { styled } from "styled-components";

const StyledHeader = styled.header`
  padding: 16px;
`;

const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #000;
  padding: 0 0 12px 8px;
`;

const StyledSearchInput = styled.input`
  padding: 8px 12px;
  width: 100%;
  max-width: 100%;
  background-color: #F7F7F8;
  border-radius: 16px;
`;

export const SearchBar = () => {
  return (
    <StyledHeader>
      <StyledH1>Search</StyledH1>
      <StyledSearchInput type="text" placeholder="Search by name, tag, email..."/>
    </StyledHeader>
  );
}