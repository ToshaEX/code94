import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  color: #162427;
  margin-bottom: 10px;
`;
const Description = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #162427;
  margin-bottom: 20px;

  opacity: 0.5;
`;
const TextContainer = styled.textarea`
  resize: none;
  height: 105px;
  padding: 5px;
  background: #f7f7f7;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: rgba(22, 36, 39, 0.5);
`;

const TextArea = ({ label, description, formik, name }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <TextContainer name={name} onChange={formik.handleChange} value={formik.values[name]} />
    </Container>
  );
};

export default TextArea;
