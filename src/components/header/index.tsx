import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppleLogo } from '@resources/images/appleLogo.svg';

const Container = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding-left: 22px;
  padding-right: 22px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z:index: 1;
`;

const NavBar = styled.div`
  width: 100%;
  max-width: 980px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

const NavButton = styled.a`
  font-size: 14px;
  color: #f5f5f7;
  :hover {
    cursor: pointer;
  }
`;

function Header(): JSX.Element {
  return (
    <Container>
      <NavBar>
        <AppleLogo></AppleLogo>
        <NavButton>Mac</NavButton>
        <NavButton>iPad</NavButton>
        <NavButton>iPhone</NavButton>
        <NavButton>Watch</NavButton>
        <NavButton>Music</NavButton>
        <NavButton>고객지원</NavButton>
        <NavButton>검색</NavButton>
        <NavButton>장바구니</NavButton>
      </NavBar>
    </Container>
  );
}

export default Header;
