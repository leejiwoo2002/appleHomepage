import React from 'react';
import Header from '@components/header';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

function App(): JSX.Element {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}

export default App;
