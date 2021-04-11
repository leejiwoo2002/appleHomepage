import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pc from './pc';
import Mobile from './mobile';

const InfoMessage = styled.div`
  color: rgb(134, 134, 139);
  font-size: 12px;
`;

const InfoURL = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(0, 102, 204);

  :hover {
    text-decoration: underline;
  }
`;

function Directory(): JSX.Element {
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

  return (
    <>
      {screenWidth >= 768 ? <Pc></Pc> : <Mobile></Mobile>}
      <InfoMessage>
        <span>다양한 쇼핑 방법: </span>
        <InfoURL href="#">Apple Store를 방문</InfoURL>
        <span>하거나, </span>
        <InfoURL href="#">리셀러</InfoURL>
        <span>를 찾아보거나, 080-330-8877번으로 전화하세요.</span>
      </InfoMessage>
    </>
  );
}

export default Directory;
