'use client';
import { styled } from 'styled-components';
import Image from 'next/image';
import { ErrorProps } from '../../../../lib/types';

const StyledErrorContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const StyledErrorContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const StyledErrorTextBlock = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const StyledErrorTitle = styled.h1`
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  margin-bottom: 10px;
`;

const StyledErrorSubtitle = styled.p`
  color: #97979B;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;

const StyledErrorLink = styled.button`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #6534FF;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Error: React.FC<ErrorProps> = ({
  imageSrc, 
  altText, 
  title, 
  subtitle, 
  onRetry, 
  retryText
}) => (
  <StyledErrorContainer>
    <StyledErrorContent>
      <Image
        src={imageSrc}
        alt={altText}
        height={56}
        width={56}
      />
      <StyledErrorTextBlock>
        <StyledErrorTitle>{title}</StyledErrorTitle>
        <StyledErrorSubtitle>{subtitle}</StyledErrorSubtitle>
        {onRetry && retryText && (
          <StyledErrorLink onClick={onRetry}>{retryText}</StyledErrorLink>
        )}
      </StyledErrorTextBlock>
    </StyledErrorContent>
  </StyledErrorContainer>
);