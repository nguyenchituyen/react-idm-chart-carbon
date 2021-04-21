import React from 'react';
import styled, { css } from 'styled-components';

const SelectPage = ({ activePage, pageLabel, setActivePage, totalPages }) => {
  const handlePreviousPage = () => {
    if (activePage > 0) setActivePage(activePage - 1);
  };

  const handleNextPage = () => {
    if (activePage < totalPages - 1) setActivePage(activePage + 1);
  };

  return (
    <ContainerStyled>
      <ArrowStyled onClick={handlePreviousPage}>
        <ButtonStyled direction="left" type="button" />
      </ArrowStyled>
      <NumberStyled>{pageLabel}</NumberStyled>
      <ArrowStyled onClick={handleNextPage}>
        <ButtonStyled direction="right" type="button" />
      </ArrowStyled>
    </ContainerStyled>
  );
};

export default SelectPage;

const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const ArrowStyled = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe3e6;
  width: 40px;
  justify-content: center;
  cursor: pointer;
`;

const ButtonStyled = styled.button`
  border: solid #76818a;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  background-color: transparent;
  outline: 0;
  cursor: pointer;

  ${(props) =>
    props.direction === 'left' &&
    css`
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    `}

  ${(props) =>
    props.direction === 'right' &&
    css`
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    `}
`;

const NumberStyled = styled.div`
  width: auto;
  border-top: solid 1px #dfe3e6;
  border-bottom: solid 1px #dfe3e6;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  text-align: left;
  color: #3d70b2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
