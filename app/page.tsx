'use client';
import { useState } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";

export default function Page() {
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState('alphabetically');

  return(
    <StyledContainer>
      <TopBar />
      <Users />
    </StyledContainer>
  );
}