'use client';
import { styled } from 'styled-components';

const StyledUser = styled.div`
  padding: 6px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledUserImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #979797;
`;

const StyledUserName = styled.span`
  font-size: 16px;
  color: #050510;
  font-weight: 500;
  line-height: 20px;
  padding-right: 5px;
`;

const StyledUserTag = styled.span`
  font-size: 14px;
  color: #97979B;
  font-weight: 500;
  line-height: 18px; 
`;

const StyledUserDepartment = styled.span`
  display: block;
  font-size: 13px;
  color: #55555C;
  font-weight: 400;
  line-height: 16px;
  margin-top: 3px;
`;

export const User = () => {
  return (
    <StyledUser>
      <StyledUserImage></StyledUserImage>
      <div>
        <div>
          <StyledUserName>Алексей Миногаров</StyledUserName>
          <StyledUserTag>ml</StyledUserTag>
        </div>
        <StyledUserDepartment>Analyst</StyledUserDepartment>
      </div>
    </StyledUser>
  );
}