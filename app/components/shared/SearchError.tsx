'use client';
import { styled } from 'styled-components';
import Image from 'next/image';
import Search from '../../../public/images/search.png';

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

export const SearchError = () => {
  return (
    <StyledErrorContainer>
      <StyledErrorContent>
        <Image
          src={Search}
          alt="Magnifying glass image"
          height={56}
          width={56}
          placeholder="blur"
        />
        <StyledErrorTextBlock>
          <StyledErrorTitle>We didn&apos;t find anyone</StyledErrorTitle>
          <StyledErrorSubtitle>Try to adjust the request</StyledErrorSubtitle>
        </StyledErrorTextBlock>
      </StyledErrorContent>
    </StyledErrorContainer>
  );
}