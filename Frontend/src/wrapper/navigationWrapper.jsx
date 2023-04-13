import React from 'react';
import { Navbar, Title } from '../components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const navigationWrapper = (Component, titleSelect, subTitleSelect = () => null, margin = '6rem') =>
  function HOC() {
    const { pathname } = useLocation();
    const favorite = useSelector((state) => state.filter.favorite);
    const Container = styled.div`
      margin: 0 ${margin};
    `;

    return (
      <div>
        <Navbar />
        <Container>
          <Title title={titleSelect(pathname, favorite)} subTitle={subTitleSelect(pathname)} />
          <Component />
        </Container>
      </div>
    );
  };

export default navigationWrapper;
