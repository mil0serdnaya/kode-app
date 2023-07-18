'use client';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';
import { IUserProps } from '../lib/interfaces';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = (props: IUserProps) => {
  const users = props.users;

  return (
    <section>
      <Tabs />
      <StyledUsersContainer>
        {users.map((user) => {
          return (
            <User key={user.id} 
                  firstName={user.firstName}
                  lastName={user.lastName}
                  userTag={user.userTag}
                  department={user.department}/>
          )
        })}
      </StyledUsersContainer>
    </section>
  );
}