import React, { useEffect, Fragment, useState } from 'react';
import styled from 'styled-components';
import Bin from '../../assets/delete-icon.svg';
import Edit from '../../assets/edit-icon.svg';
import Star from '../../assets/star.svg';
import Starred from '../../assets/starred.svg';
import { useSelector } from 'react-redux';
import CardHeader from './CardHeader';
import { productService } from '../../service/index';
import { ModalTemplate } from '../';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Container = styled.div`
  position: relative;
  overflow-y: auto;
  height: 50vh;
  &:--webkit-scroll {
    display: none;
  }
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
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    productService.getAllProducts().then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [searchString, refresh]);

  const rowMapper = ({ sku, images, productName, price, isFavorite, isLast, key, id }) => (
    <Fragment key={key}>
      <CardContainer>
        <Sku>{sku}</Sku>
        <div>{images}</div>
        <Label>{productName}</Label>
        <Label>{price}</Label>
        <More>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShow(true);
              setId(id);
              console.log('hit..');
            }}>
            <img src={Bin} alt="delete" />
          </div>
          <Link to={`${routes.PRODUCTS_EDIT}/${id}`}>
            <img src={Edit} alt="edit" />
          </Link>
          <img src={isFavorite ? Starred : Star} alt="favorite" />
        </More>
      </CardContainer>
      {!isLast && <Hr />}
    </Fragment>
  );

  return (
    <Fragment>
      <CardHeader />
      <Container>
        {data.map((item, i) => {
          const { sku, images, productName, price, isFavorite, id } = item;
          return rowMapper({
            sku,
            images,
            productName,
            price,
            isFavorite,
            isLast: i === data.length - 1,
            key: `product-${id}`,
            id
          });
        })}
      </Container>
      {show && (
        <ModalTemplate
          buttonText={'Delete'}
          modalBodyText={'you will not be able to undo this action if you proceed!'}
          modalTitle={'ARE YOU SURE?'}
          onClick={() => {
            productService.deleteProducts(id);
            setRefresh(!refresh);
          }}
          setShow={setShow}
          show={show}
        />
      )}
    </Fragment>
  );
};

export default ProductList;
