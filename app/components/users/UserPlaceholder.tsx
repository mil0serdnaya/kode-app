'use client';
import { styled } from 'styled-components';

const StyledUserPlaceholder = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledUserPlaceholderImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
`;

const StyledUserPlaceholderName = styled.div`
  width: 144px;
  height: 16px;
  border-radius: 10px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
`;

const StyledUserPlaceholderDepartment = styled.div`
  width: 80px;
  height: 12px;
  border-radius: 10px;
  margin-top: 5px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
`;

export const UserPlaceholder = () => {
  return (
    <StyledUserPlaceholder>
      <StyledUserPlaceholderImage />
      <div>
        <StyledUserPlaceholderName />
        <StyledUserPlaceholderDepartment />
      </div>
    </StyledUserPlaceholder>
  );
}