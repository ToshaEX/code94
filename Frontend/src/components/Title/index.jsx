import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: #162427;
  font-size: 36px;
  font-weight: 900;
  line-height: 49px;
  letter-spacing: 0.15em;
`;

const Title = ({ title }) => {
  return <Div>{title}</Div>;
};

export default Title;
