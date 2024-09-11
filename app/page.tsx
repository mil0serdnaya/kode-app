'use client';
import { useState, useEffect, useMemo } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";
import { UserPropsType } from './lib/types';
import { SORT_ALPHABETICALLY } from './lib/constants';
import { fetchUsers } from './lib/services/userService';
import { sortUsers } from './lib/utils';

export default function Page() {
  const [users, setUsers] = useState<UserPropsType>([]);
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
      {!loading && !error && sortedUsers.length > 0 && <Users users={sortedUsers} />}
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка загрузки данных</p>}
    </StyledContainer>
  );
}

