'use client';
import { useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { Tabs } from '../shared/Tabs';
import { User } from './User';
import { CriticalError } from '../shared/errors/CriticalError';
import { SearchError } from '../shared/errors/SearchError';
import { UsersProps } from '../../../lib/types';
import { filterUsersByDepartment, renderUserPlaceholders } from '../../../lib/utils';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = ({
  users,
  isLoading,
  isError,
  onRetry,
  searchError
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

  if (searchError) {
    return (
      <section>
        <Tabs onDepartmentChange={setDepartmentFilter} />
        <StyledUsersContainer>
          <SearchError />
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
              position={user.position}
            />
          ))}
      </StyledUsersContainer>
    </section>
  );
}