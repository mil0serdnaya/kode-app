'use client';
import { useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { CriticalError } from './CriticalError';
import { UsersProps } from '../lib/types';
import { filterUsersByDepartment, renderUserPlaceholders } from '../lib/utils';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = ({
  users,
  isLoading,
  isError,
  onRetry
} : UsersProps
) => {
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const filteredUsers = useMemo(() => filterUsersByDepartment(users, departmentFilter), [users, departmentFilter]);

  if (isLoading) {
    return (
      <section>
        <Tabs onDepartmentChange={setDepartmentFilter} />
        <StyledUsersContainer>{renderUserPlaceholders(8)}</StyledUsersContainer>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <Tabs onDepartmentChange={setDepartmentFilter} />
        <StyledUsersContainer>
          <CriticalError onRetry={onRetry} />
        </StyledUsersContainer>
      </section>
    );
  }
  
  return (
    <section>
      <Tabs onDepartmentChange={setDepartmentFilter}/>
      <StyledUsersContainer>
        {filteredUsers.map(user => (
            <User
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              userTag={user.userTag}
              department={user.department}
            />
          ))}
      </StyledUsersContainer>
    </section>
  );
}