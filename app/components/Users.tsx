'use client';
import { useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { UserPropsType, UserType } from '../lib/types';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

const filterUsers = (users: UserPropsType, departmentFilter: string) => {
  return users.filter(user => 
    departmentFilter === 'all' || user.department === departmentFilter
  )
}

export const Users = ({
  users
}: {
  users: UserPropsType;
}) => {
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const filteredUsers = useMemo(() => filterUsers(users, departmentFilter), [users, departmentFilter]);

  return (
    <section>
      <Tabs onDepartmentChange={setDepartmentFilter}/>
      <StyledUsersContainer>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <User
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              userTag={user.userTag}
              department={user.department}
            />
          ))
        ) : (
          <p>No users to display</p>
        )}
      </StyledUsersContainer>
    </section>
  );
}