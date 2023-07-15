'use client';
import { styled } from 'styled-components';
import Image from 'next/image';
import CrossIcon from '../../img/cross.svg';

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(5, 5, 16, 0.16);
`;

const StyledSortingBlock = styled.div`
  width: 373px;
  border-radius: 20px;
  padding: 0 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: #fff;
`;

const StyledSortingBlockTop = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 24px 0 16px 0;
`;

const StyledSortingBlockHeader = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  display: block;
  margin: 0 auto;
`;

const StyledSortingBlockBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #F7F7F8;
`;

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const StyledRadio = styled.input`
  appearance: none;

  &:checked + label::before {
    border-width: 8px;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  position: relative;
  padding-left: 36px;

  &::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: 2px solid #6534FF;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: border-width 200ms ease;
  }
`;

export const Sorting = () => {
  return (
    <StyledOverlay>
      <StyledSortingBlock>
        <StyledSortingBlockTop>
          <StyledSortingBlockHeader>Sorting</StyledSortingBlockHeader>
          <StyledSortingBlockBtn>
            <Image
              src={CrossIcon}
              alt="Sort icon"
            />
          </StyledSortingBlockBtn>
        </StyledSortingBlockTop>
        <form>
          <StyledFormRow>
            <StyledRadio type="radio" id="alphabetically" name="sort"/>
            <StyledLabel htmlFor="alphabetically"> Alphabetically </StyledLabel>
          </StyledFormRow>
          <StyledFormRow>
            <StyledRadio type="radio" id="birthday" name="sort"/>
            <StyledLabel htmlFor="birthday"> By birthday </StyledLabel>
          </StyledFormRow>
        </form>
      </StyledSortingBlock>
    </StyledOverlay>
  );
}