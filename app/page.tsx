'use client';
import { useState, useEffect } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";
import { UserPropsType, UserType } from './lib/types';

export default function Page() {
  // const [users, setUsers] = useState<UserPropsType>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState('alphabetically');
  let users: UserPropsType = [];

  const fetchUsersData = async () => {
    try {
      const response = await fetch(
        `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`
      );
      if (!response.ok) {
        setLoading(false);
        setError(true);
      }
      let usersData = await response.json();
      let usersDataAlphabetically = usersData.items.sort((a: UserType, b: UserType) => a.firstName.localeCompare(b.firstName));
      users = usersDataAlphabetically;
    } catch(err) {
        setError(true);
        users = [];
    } finally {
        setLoading(false);
    } 
  }

  const sortUsers = (users: UserPropsType) => {
    let sortedUsers;

    if (sortBy === 'birthday') {
      sortedUsers = users.sort((a: UserType, b: UserType) => Date.parse(b.birthday) - Date.parse(a.birthday));
      users = sortedUsers;
      console.log(users, 'bd')
      return
    }
    sortedUsers = users.sort((a: UserType, b: UserType) => a.firstName.localeCompare(b.firstName));
    users = sortedUsers;
    console.log(users, 'al')
  }

  useEffect(() => {
    fetchUsersData();
  }, [loading]);

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
      <Users users={users}/>
    </StyledContainer>
  );
}