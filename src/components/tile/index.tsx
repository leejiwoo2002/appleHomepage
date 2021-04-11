import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-position: center;
  background-size: cover;
  z-index: 1;

  @media (max-width: 699px) {
    height: 548px;
    background-image: url(https://www.apple.com/kr/home/x/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_small_2x.jpg);
  }

  @media (min-width: 700px) {
    height: 694px;
    background-image: url(https://www.apple.com/kr/home/x/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_mediumtall_2x.jpg);
  }

  @media (min-width: 1000px) {
    height: 736px;
    background-image: url(https://www.apple.com/kr/home/x/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_largetall_2x.jpg);
  }
`;

const Title = styled.div`
  margin-top: 75px;
  color: rgb(29, 29, 31);
  font-weight: 600;

  @media (max-width: 699px) {
    font-size: 32px;
  }

  @media (min-width: 700px) {
    font-size: 48px;
  }

  @media (min-width: 1000px) {
    font-size: 56px;
  }
`;

const Description = styled.div`
  margin-top: 5px;

  @media (max-width: 699px) {
    font-size: 16px;
  }
  @media (min-width: 700px) {
    font-size: 24px;
  }
  @media (min-width: 1000px) {
    font-size: 28px;
  }
`;

const Price = styled.div`
  color: rgb(134, 134, 139);

  @media (max-width: 699px) {
    font-size: 14px;
    margin-top: 5.6px;
  }

  @media (min-width: 700px) {
    font-size: 17px;
    margin-top: 6.8px;
  }

  @media (min-width: 1000px) {
    font-size: 17px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 204px;
  justify-content: space-between;
  @media (max-width: 699px) {
    width: 199px;
    margin-top: 13px;
  }

  @media (min-width: 700px) {
    width: 204px;
    margin-top: 14px;
  }

  @media (min-width: 1000px) {
    width: 223px;
    margin-top: 14px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: rgb(0, 102, 204);
  @media (max-width: 699px) {
    font-size: 19px;
  }

  @media (min-width: 700px) {
    font-size: 19px;
  }

  @media (min-width: 1000px) {
    font-size: 21px;
  }
`;

interface props {
  title: string;
  description: string;
  price?: string;
}

function Tile({ title, description, price }: props): JSX.Element {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {price ? <Price>{price}</Price> : undefined}
      <RowContainer>
        <Link>{`더 알아보기 >`}</Link>
        <Link>{`구입하기 >`}</Link>
      </RowContainer>
    </Wrapper>
  );
}

export default Tile;
