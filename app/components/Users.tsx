'use client';
import { styled } from 'styled-components';
import { Tabs } from './Tabs';
import { User } from './User';

const StyledUsersContainer = styled.div`
  padding: 16px;
`;

export const Users = () => {
  return (
    <section>
      <Tabs />
      <StyledUsersContainer>
        <User />
      </StyledUsersContainer>
    </section>
  );
}