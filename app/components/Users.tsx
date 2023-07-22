'use client';
import { useEffect, useState } from 'react';
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
  // console.log(users, 'users')

  useEffect(() => {
    // console.log("Items changed!");
  }, [users]);

  return (
    <section>
      <Tabs />
      <StyledUsersContainer>
        {users.map((user: UserType) => {
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