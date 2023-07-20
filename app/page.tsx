'use client';
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

  const sortUsers = (users: UserPropsType) => {
    let usersAlphabetically = users.sort((a: UserType, b: UserType) => a.firstName.localeCompare(b.firstName));
    let usersByBirthday = users.sort((a: UserType, b: UserType) => Date.parse(b.birthday) - Date.parse(a.birthday));

    if (sortBy === 'birthday') {
      setUsers(usersByBirthday);
      console.log(users, 'bd')
      return
    }
    setUsers(usersAlphabetically);
    console.log(users, 'al')
  }

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
      setUsers(usersDataAlphabetically);
    } catch(err) {
        setError(true);
        setUsers([]);
    } finally {
        setLoading(false);
    } 
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
      <Users users={users} sortBy={sortBy}/>
    </StyledContainer>
  );
}