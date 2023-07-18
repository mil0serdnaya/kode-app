'use client';
import { useState, useEffect } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState('alphabetically');

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`
      );
      if (!response.ok) {
        setLoading(false);
        setError(true);
      }
      let usersData = await response.json();
      setUsers(usersData.items);
    } catch(err) {
        setError(true);
        setUsers([]);
    } finally {
        setLoading(false);
    } 
  }

  useEffect(() => {
    fetchUserData();
  }, [loading]);

  return(
    <StyledContainer>
      {sortBy}
      <TopBar 
        filterText={filterText} 
        sortBy={sortBy}
        onFilterTextChange={setFilterText}
        onSortByChange={setSortBy}
       />
      {users && <Users users={users}/>}
    </StyledContainer>
  );
}