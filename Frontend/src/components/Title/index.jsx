import React, { Fragment } from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/arrow.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const SubTitle = styled.div`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.08em;
  color: #001eb9;
`;

const Div = styled.div`
  color: #162427;
  font-size: 36px;
  font-weight: 900;
  line-height: 49px;
  letter-spacing: 0.15em;
`;

const Title = ({ title, subTitle = null }) => {
  return (
    <Container>
      <Div>{title}</Div>
      {subTitle && (
        <Fragment>
          <img src={Arrow} alt="arrow" />
          <SubTitle>{subTitle}</SubTitle>
        </Fragment>
      )}
    </Container>
  );
};

export default Title;
