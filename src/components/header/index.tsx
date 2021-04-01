import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as AppleLogo } from '@resources/images/appleLogo.svg';
import { ReactComponent as BagLogo } from '@resources/images/bag.svg';

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
  min-width: 320px;

  @media (max-width: 800px) {
    height: 48px;
  } ;
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
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

function Header(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  function pc(): JSX.Element {
    return (
      <>
        <NavButton>
          <AppleLogo></AppleLogo>
        </NavButton>
        <NavButton>Mac</NavButton>
        <NavButton>iPad</NavButton>
        <NavButton>iPhone</NavButton>
        <NavButton>Watch</NavButton>
        <NavButton>Music</NavButton>
        <NavButton>고객지원</NavButton>
        <NavButton>검색</NavButton>
        <NavButton>
          <BagLogo></BagLogo>
        </NavButton>
      </>
    );
  }

  function mobile(): JSX.Element {
    return (
      <>
        <NavButton>목록</NavButton>
        <NavButton>
          <AppleLogo></AppleLogo>
        </NavButton>
        <NavButton>
          <BagLogo></BagLogo>
        </NavButton>
      </>
    );
  }

  return (
    <Container>
      <NavBar>{screenWidth > 800 ? pc() : mobile()}</NavBar>
    </Container>
  );
}

export default Header;
