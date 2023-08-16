'use client';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { UserPropsType, UserType } from '../lib/types';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = ({
  users
}: {
  users: UserPropsType;
}) => {
  const [departmentFilter, setDepartmentFilter] = useState('all');

  useEffect(() => {
   console.log('opa')
  }, [users]);

  return (
    <section>
      <Tabs onDepartmentChange={setDepartmentFilter}/>
      <StyledUsersContainer>
        {users &&
          users
          .filter((user: UserType) => {
            if(departmentFilter !== 'all'){
              return user.department === departmentFilter
            }
            return users;
          })
          .map((user: UserType) => {
          return (
            <User
              key={user.id} 
              firstName={user.firstName}
              lastName={user.lastName}
              userTag={user.userTag}
              department={user.department}
            />
          )
        })}
      </StyledUsersContainer>
    </section>
  );
}