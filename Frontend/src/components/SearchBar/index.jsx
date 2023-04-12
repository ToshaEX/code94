import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../../assets/magnifying.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addSearch } from '../../store/slice/filterSlice';

const Input = styled.input`
  width: 757px;
  height: 64px;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  border-radius: 50px;

  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  padding-left: 30px;
`;

const Button = styled.button`
  position: absolute;
  top: 9px;
  right: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 40px;
  gap: 10px;
  width: 180px;
  height: 45px;

  background: #001eb9;
  border-radius: 80px;
`;
const Label = styled.span`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  color: #ffffff;
`;

const Div = styled.div`
  width: 757px;
  height: 64px;

  position: relative;
`;

// eslint-disable-next-line react/prop-types
const SearchBar = ({ placeholder }) => {
  const currentStr = useSelector((state) => state.filter.search);
  const [searchStr, setSearchStr] = useState(currentStr);
  const dispatch = useDispatch();
  return (
    <Div>
      <Input
        placeholder={placeholder}
        type="text"
        onChange={(e) => {
          setSearchStr(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          dispatch(addSearch(searchStr));
        }}>
        <img src={Search} />
        <Label>Search</Label>
      </Button>
    </Div>
  );
};

export default SearchBar;
