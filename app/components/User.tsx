'use client';
import { styled } from 'styled-components';

const StyledUser = styled.div`
  
`;

const StyledUserImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #979797;
`;

const StyledUserInfo = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #979797;
`;

export const User = () => {
  return (
    <StyledUser>
      <StyledUserImage></StyledUserImage>
    </StyledUser>
  );
}