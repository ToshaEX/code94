import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 45px;
  gap: 10px;

  width: 249px;
  height: 56px;
  background: #001eb9;

  box-shadow: 4px 4px 30px rgba(93, 169, 185, 0.2);
  border-radius: 10px;
`;

const Label = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;

  color: #f7f7f7;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PrimaryButton = ({ label, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Label>{label}</Label>
    </Button>
  );
};

export default PrimaryButton;
