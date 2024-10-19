'use client';
import { styled } from 'styled-components';
import { capitalize } from '../../../lib/utils';

const StyledUser = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledUserImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #FBEAF9;
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

export const User = ({
  firstName,
  lastName,
  userTag,
  position
}:{
  firstName: string;
  lastName: string;
  userTag: string;
  position: string;
}) => {
  return (
    <StyledUser>
      <StyledUserImage>img api is 💀</StyledUserImage>
      <div>
        <div>
          <StyledUserName>{firstName} {lastName}</StyledUserName>
          <StyledUserTag>{userTag}</StyledUserTag>
        </div>
        <StyledUserDepartment>{capitalize(position)}</StyledUserDepartment>
      </div>
    </StyledUser>
  );
}