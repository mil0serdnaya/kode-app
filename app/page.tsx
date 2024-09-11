'use client';
import axios from 'axios';
import { useState, useEffect, useMemo } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";
import { UserPropsType, UserType } from './lib/types';
import { SORT_ALPHABETICALLY, SORT_BY_BIRTHDAY } from './lib/constants';

export default function Page() {
  const [users, setUsers] = useState<UserPropsType>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState(SORT_ALPHABETICALLY);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all');
      setUsers(response.data.items);
    } catch (error) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  const sortUsers = (users: UserPropsType): UserPropsType => {
    if (![SORT_BY_BIRTHDAY, SORT_ALPHABETICALLY].includes(sortBy)) {
      return users;
    }
  
    const sorted = [...users];
  
    return sorted.sort((a: UserType, b: UserType) => 
      sortBy === SORT_BY_BIRTHDAY
        ? Date.parse(b.birthday) - Date.parse(a.birthday)
        : a.firstName.localeCompare(b.firstName)
    );
  };
  

  useEffect(() => {
    fetchUsersData();
  }, []);

  const sortedUsers = useMemo(() => sortUsers(users), [users, sortBy]);

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

