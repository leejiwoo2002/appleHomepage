import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Notes from './notes';

const Container = styled.div`
  width: 100%;
  background-color: rgb(245, 245, 247);
  display: flex;
  justify-content: center;
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
        <Notes></Notes>
      </Section>
    </Container>
  );
}

export default Footer;
