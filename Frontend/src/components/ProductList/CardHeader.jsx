import React from "react";
import styled from "styled-components";

const CardHeaderConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const HeaderLabel = styled.div`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;

  color: #001eb9;
`;
const CardHeader = () => {
  return (
    <CardHeaderConatiner>
      <HeaderLabel>SKU</HeaderLabel>
      <HeaderLabel>IMAGE</HeaderLabel>
      <HeaderLabel>PRODUCT NAME</HeaderLabel>
      <HeaderLabel>PRICE</HeaderLabel>
    </CardHeaderConatiner>
  );
};

export default CardHeader;
