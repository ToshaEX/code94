import React, { Fragment } from 'react';
import styled from 'styled-components';
import { SearchBar, PrimaryButton, SecondaryButton } from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
const InnerContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const searchBarWrapper = (Component) =>
  function HOC() {
    const favorite = useSelector((state) => state.filter.favorite);
    const navigate = useNavigate();
    console.log('Favorite', favorite);
    return (
      <Fragment>
        <Container>
          <SearchBar placeholder={'Search for Products'} />
          <InnerContainer>
            <PrimaryButton
              label={'New Product'}
              onClick={() => {
                navigate(routes.PRODUCTS_ADD);
              }}
            />
            <SecondaryButton onClick={() => {}} />
          </InnerContainer>
        </Container>
        <Component />
      </Fragment>
    );
  };

export default searchBarWrapper;
