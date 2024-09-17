'use client';
import { styled } from 'styled-components';
import Image from 'next/image';
import UFO from '../../../public/images/ufo.png';

const StyledCriticalErrorContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const StyledCriticalError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const StyledCriticalErrorTextBlock = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const StyledCriticalErrorTitle = styled.p`
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  margin-bottom: 10px;
`;

const StyledCriticalErrorSubtitle = styled.p`
  color: #97979B;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;

const StyledCriticalErrorLink= styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #6534FF;
  cursor: pointer;
`;

export const CriticalError = ({onRetry}: {onRetry: () => void}) => {
  return (
    <StyledCriticalErrorContainer>
      <StyledCriticalError>
        <Image
          src={UFO}
          alt="UFO image"
          height={56}
          width={56}
        />
        <StyledCriticalErrorTextBlock>
          <StyledCriticalErrorTitle>Some superintelligence has broken everything</StyledCriticalErrorTitle>
          <StyledCriticalErrorSubtitle>We will try to fix it quickly</StyledCriticalErrorSubtitle>
          <StyledCriticalErrorLink onClick={onRetry}>Try again</StyledCriticalErrorLink>
        </StyledCriticalErrorTextBlock>
      </StyledCriticalError>
    </StyledCriticalErrorContainer>
  );
}