'use client';
import { useState, useEffect, useMemo } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";
import { CriticalError } from "./components/CriticalError";
import { UsersType } from './lib/types';
import { SORT_ALPHABETICALLY } from './lib/constants';
import { fetchUsers } from './lib/services/userService';
import { sortUsers } from './lib/utils';

export default function Page() {
  const [users, setUsers] = useState<UsersType>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState(SORT_ALPHABETICALLY);
  const sortedUsers = useMemo(() => sortUsers(users,sortBy), [users, sortBy]);

  const setUsersData = async () => {
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
    } catch (error) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setUsersData();
  }, []);

  return (
    <StyledContainer>
      <TopBar 
        filterText={filterText}
        sortBy={sortBy}
        onFilterTextChange={setFilterText}
        onSortByChange={setSortBy}
      />

      {!error && <Users users={sortedUsers} isLoading={loading}/>}

      {error && <CriticalError />}
    </StyledContainer>
  );
}

