'use client';
import { useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { UserLoading } from './UserLoading';
import { UsersType } from '../lib/types';
import { filterUsersByDepartment } from '../lib/utils'

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

const renderLoadingState = () => (
  Array.from({length: 8}).map((el, index) => <UserLoading key={index} />)
)

export const Users = ({
  users,
  isLoading
}: {
  users: UsersType;
  isLoading: boolean
}) => {
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const filteredUsers = useMemo(() => filterUsersByDepartment(users, departmentFilter), [users, departmentFilter]);

  return (
    <section>
      <Tabs onDepartmentChange={setDepartmentFilter}/>
      <StyledUsersContainer>
        { isLoading && renderLoadingState() }

        { filteredUsers.length > 0 && !isLoading ? (
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
          !isLoading && <p>No users to display</p>
        )}
      </StyledUsersContainer>
    </section>
  );
}