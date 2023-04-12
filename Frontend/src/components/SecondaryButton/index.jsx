import React, { useState } from 'react';
import styled from 'styled-components';
import Star from '../../assets/star.svg';
import Starred from '../../assets/starred.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../../store/slice/filterSlice';

const Button = styled.button`
  height: 56px;
  width: 70px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #001eb9;
`;

const SecondaryButton = ({ onClick }) => {
  //   const [starred, setStarred] = useState(false);
  const starred = useSelector((state) => state.filter.favorite);
  const dispatch = useDispatch();
  console.log(starred);
  return (
    <Button
      onClick={() => {
        // onClick();
        dispatch(addFavorite());
      }}>
      <img src={starred ? Starred : Star} width="28px" height="28px" alt="Favorite" />
    </Button>
  );
};

export default SecondaryButton;
