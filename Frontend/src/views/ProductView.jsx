import React, { useEffect } from 'react';
import { searchBarWrapper, navigationWrapper } from '../wrapper';
import { ProductList } from '../components';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const ProductView = () => {
  const favorite = useSelector((state) => state.filter.favorite);
  useEffect(() => {}, [favorite]);
  return (
    <Container>
      <ProductList />
    </Container>
  );
};

export default navigationWrapper(searchBarWrapper(ProductView), (_, favorite) =>
  favorite ? 'FAVORITE PRODUCTS' : 'PRODUCTS'
);
