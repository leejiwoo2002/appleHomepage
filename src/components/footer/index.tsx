import React from 'react';
import styled from 'styled-components';
import Note from './note';
import Directory from './directory';

const Container = styled.div`
  width: 100%;
  background-color: rgb(245, 245, 247);
  display: flex;
  justify-content: center;
  min-width: 320px;
`;

const Section = styled.div`
  box-sizing: border-box;
  padding-left: 22px;
  padding-right: 22px;
  max-width: 980px;
`;

const InfoMessage = styled.div`
  color: rgb(134, 134, 139);
  font-size: 12px;
  padding-bottom: 20px;
`;

const InfoURL = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(0, 102, 204);

  :hover {
    text-decoration: underline;
  }
`;

function Footer(): JSX.Element {
  return (
    <Container>
      <Section>
        <Note></Note>
        <Directory></Directory>
        <InfoMessage>
          <span>다양한 쇼핑 방법: </span>
          <InfoURL href="#">Apple Store를 방문</InfoURL>
          <span>하거나, </span>
          <InfoURL href="#">리셀러</InfoURL>
          <span>를 찾아보거나, 080-330-8877번으로 전화하세요.</span>
        </InfoMessage>
        <InfoMessage>
          Apple HomePage Clone Project made by leejiwoo | email :
          leejiwoo2002@naver.com
        </InfoMessage>
      </Section>
    </Container>
  );
}

export default Footer;
