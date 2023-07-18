'use client';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { UserPropsType } from '../lib/types';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = (props: UserPropsType) => {
  const users = props.users;
  console.log(users)

  return (
    <section>
      <Tabs />
      <StyledUsersContainer>
        {users.map((user) => {
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