'use client';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { UserPropsType, UserType } from '../lib/types';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = ({
  users,
  sortBy
}: {
  users: UserPropsType;
  sortBy: string;
}) => {
  const usersAlphabetically = users.sort((a: UserType, b: UserType) => a.firstName.localeCompare(b.firstName));

  return (
    <section>
      <Tabs />
      <StyledUsersContainer>
        {usersAlphabetically.map((user: UserType) => {
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