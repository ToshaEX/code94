import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Bin from '../../assets/delete-icon.svg';
import Edit from '../../assets/edit-icon.svg';
import Star from '../../assets/star.svg';
import Starred from '../../assets/starred.svg';
import { useSelector } from 'react-redux';
import CardHeader from './CardHeader';

const Container = styled.div`
  overflow-y: auto;
  height: auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Sku = styled.span`
  color: #162427;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  opacity: 0.5;
`;

const Label = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  color: #162427;
`;

const More = styled.div`
  display: flex;
  gap: 10px;
`;
const Hr = styled.hr`
  opacity: 0.5;
  border: 1px solid #969191;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ProductList = () => {
  const searchString = useSelector((state) => state.filter.search);
  const data = [
    {
      sku: '#CA25',
      image: 'img',
      productName: 'Product-name',
      price: '$24.00',
      isFavorite: true
    },
    {
      sku: '#CA25',
      image: 'img',
      productName: 'Product-name',
      price: '$24.00',
      isFavorite: false
    },
    {
      sku: '#CA25',
      image: 'img',
      productName: 'Product-name',
      price: '$24.00',
      isFavorite: true
    },
    {
      sku: '#CA25',
      image: 'img',
      productName: 'Product-name',
      price: '$24.00',
      isFavorite: true
    }
  ];

  useEffect(() => {
    // TODO:implement API call
  }, [searchString]);

  const rowMapper = ({ sku, image, productName, price, isFavorite, isLast }) => (
    <Fragment>
      <CardContainer>
        <Sku>{sku}</Sku>
        <div>{image}</div>
        <Label>{productName}</Label>
        <Label>{price}</Label>
        <More>
          <img src={Bin} alt="delete" />
          <img src={Edit} alt="edit" />
          <img src={isFavorite ? Starred : Star} alt="favorite" />
        </More>
      </CardContainer>
      {!isLast && <Hr />}
    </Fragment>
  );

  return (
    <Container>
      <CardHeader />
      {data.map((item, i) => {
        const { sku, image, productName, price, isFavorite } = item;
        return rowMapper({
          sku,
          image,
          productName,
          price,
          isFavorite,
          isLast: i === data.length - 1
        });
      })}
    </Container>
  );
};

export default ProductList;
