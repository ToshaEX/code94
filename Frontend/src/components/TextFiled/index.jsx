import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin: 1.5rem 0;
`;
const Label = styled.span`
  color: #162427;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
`;
const Input = styled.input`
  background-color: #f7f7f7;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 400px;
  height: 45px;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: rgba(22, 36, 39, 0.5);
`;

const TextFiled = ({ label, name, formik }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input name={name} onChange={formik.handleChange} value={formik.values[name]} />
    </Container>
  );
};

export default TextFiled;
