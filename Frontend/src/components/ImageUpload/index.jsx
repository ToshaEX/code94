import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 5rem;
  margin-top: 2rem;
`;

const TextContainer = styled.div`
  display: flex;
  width: 12rem;
  flex-direction: column;
`;

const Label = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  color: #162427;
`;

const LinkName = styled.label`
  cursor: pointer;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  text-decoration: underline;
  color: #001eb9;
`;

const Description = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #162427;
  opacity: 0.5;
`;
const Input = styled.input`
  opacity: 0;
`;

/**
 *
 * @param {props} props Component props
 * @param {string} label for the image upload component
 * @param {string} acceptFormats accepting file formats eg:".jpeg,.gif,.svg"
 * @param {string} description little description about limitations and accepting format
 * @param {string}  buttonLabel button label text
 */
const ImageUpload = ({ label, acceptFormats, description, buttonLabel }) => {
  return (
    <Container>
      <TextContainer>
        <Label>{label}</Label>
        <Description>{description}</Description>
      </TextContainer>
      <LinkName>
        {buttonLabel}
        <Input type="file" accept={acceptFormats}></Input>
      </LinkName>
    </Container>
  );
};

export default ImageUpload;
