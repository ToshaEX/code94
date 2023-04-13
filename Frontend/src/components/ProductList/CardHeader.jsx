import React from 'react';
import styled from 'styled-components';

const CardHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const HeaderLabel = styled.div`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  margin-bottom: 2rem;

  color: #001eb9;
`;
const CardHeader = () => {
  return (
    <CardHeaderContainer>
      <HeaderLabel>SKU</HeaderLabel>
      <HeaderLabel>IMAGE</HeaderLabel>
      <HeaderLabel>PRODUCT NAME</HeaderLabel>
      <HeaderLabel>PRICE</HeaderLabel>
    </CardHeaderContainer>
  );
};

export default CardHeader;
