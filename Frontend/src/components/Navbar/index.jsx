import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-left: 90px;
  margin-right: 90px;
  height: 132px;
  display: flex;
  justify-content: end;
  padding: 1rem;
  align-items: center;
  gap: 16px;
  font-size: 19px;
`;

const Item = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: #162427;
`;
const Avatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: #001eb9;
  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #3df265;
    border-radius: 50%;
    translate: 45px 45px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Item>ADMIN</Item>
      <Avatar />
    </Nav>
  );
};

export default Navbar;
