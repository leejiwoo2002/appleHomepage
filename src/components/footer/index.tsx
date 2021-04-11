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
  width: 980px;
`;

function Footer(): JSX.Element {
  return (
    <Container>
      <Section>
        <Note></Note>
        <Directory></Directory>
      </Section>
    </Container>
  );
}

export default Footer;
