import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import styled from 'styled-components';
import Tile from '@components/tile';

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
      <Tile
        title="iPhone 12"
        description="스피드 그 이상의 스피드"
        price="가격은 ₩950,000부터(보상 판매 미적용)"
      ></Tile>
      <Footer></Footer>
    </Container>
  );
}

export default App;
