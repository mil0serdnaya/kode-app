'use client';
import axios from 'axios';
import { useState, useEffect } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";
import { UserPropsType, UserType } from './lib/types';

export default function Page() {
  const [users, setUsers] = useState<UserPropsType>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState('alphabetically');

  const fetchUsersData = async () => {
      axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all')
      .then(function (response) {
        setUsers(response.data.items);
        sortUsersAlphabetically(response.data.items);
      })
      .catch(function (error) {
        setError(true);
        setUsers([]);
      });
  }

  const sortUsersAlphabetically = (users: UserPropsType) => {
    users.sort((a: UserType, b: UserType) => a.firstName.localeCompare(b.firstName));
  }

  const sortUsers = (users: UserPropsType) => {
    let sortedUsers;

    if (sortBy === 'birthday') {
      sortedUsers = users.sort((a: UserType, b: UserType) => Date.parse(b.birthday) - Date.parse(a.birthday));
      users = sortedUsers;
      return
    }
    sortedUsers = users.sort((a: UserType, b: UserType) => a.firstName.localeCompare(b.firstName));
    users = sortedUsers;
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  useEffect(() => {
    sortUsers(users);
  }, [sortBy]);

  return(
    <StyledContainer>
      <TopBar 
        filterText={filterText}
        sortBy={sortBy}
        onFilterTextChange={setFilterText}
        onSortByChange={setSortBy}
       />
      {users.length > 0 && <Users users={users}/>}
    </StyledContainer>
  );
}