import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-top: 20px;
`;

const Column = styled.div`
  width: 20%;
  display: flex;
  flex-flow: column;
`;

const Section = styled.div``;

const UnderSection = styled.div`
  padding-top: 24px;
`;

const Title = styled.h3`
  margin: 0;
  padding-right: 20px;
  padding-bottom: 9.6px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(29, 29, 31);
`;

const UList = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const List = styled.li`
  list-style: none;
  color: rgb(81, 81, 84);
  font-size: 12px;
  margin-bottom: 9.6px;
`;

const LinkLabel = styled.a`
  cursor: pointer;
  text-decoration: none;
  word-break: keep-all;
  :hover {
    color: #1d1d1f;
    text-decoration: underline;
  }
`;

function Pc(): JSX.Element {
  return (
    <Container>
      <Column>
        <Section>
          <Title>쇼핑 및 알아보기</Title>
          <UList>
            <List>
              <LinkLabel>Mac</LinkLabel>
            </List>
            <List>
              <LinkLabel>iPad</LinkLabel>
            </List>
            <List>
              <LinkLabel>iPhone</LinkLabel>
            </List>
            <List>
              <LinkLabel>Watch</LinkLabel>
            </List>
            <List>
              <LinkLabel>Music</LinkLabel>
            </List>
            <List>
              <LinkLabel>AirPods</LinkLabel>
            </List>
            <List>
              <LinkLabel>iPod touch</LinkLabel>
            </List>
            <List>
              <LinkLabel>액세서리</LinkLabel>
            </List>
          </UList>
        </Section>
      </Column>
      <Column>
        <Section>
          <Title>서비스</Title>
          <UList>
            <List>
              <LinkLabel>Apple Music</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple Arcade</LinkLabel>
            </List>
            <List>
              <LinkLabel>iCloud</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple Books</LinkLabel>
            </List>
            <List>
              <LinkLabel>App Store</LinkLabel>
            </List>
          </UList>
        </Section>
        <UnderSection>
          <Title>계정</Title>
          <UList>
            <List>
              <LinkLabel>Apple ID 관리</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple Store 계정</LinkLabel>
            </List>
            <List>
              <LinkLabel>iCloud.com</LinkLabel>
            </List>
          </UList>
        </UnderSection>
      </Column>
      <Column>
        <Section>
          <Title>Apple Store</Title>
          <UList>
            <List>
              <LinkLabel>매장 찾기</LinkLabel>
            </List>
            <List>
              <LinkLabel>온라인에서 쇼핑하기</LinkLabel>
            </List>
            <List>
              <LinkLabel>Genius Bar</LinkLabel>
            </List>
            <List>
              <LinkLabel>Today at Apple</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple 캠프</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple Store 앱</LinkLabel>
            </List>
            <List>
              <LinkLabel>리퍼 및 특가 제품</LinkLabel>
            </List>
            <List>
              <LinkLabel>금융 혜택</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple Trade In</LinkLabel>
            </List>
            <List>
              <LinkLabel>주문 상태</LinkLabel>
            </List>
            <List>
              <LinkLabel>쇼핑 도움말</LinkLabel>
            </List>
          </UList>
        </Section>
      </Column>
      <Column>
        <Section>
          <Title>비즈니스</Title>
          <UList>
            <List>
              <LinkLabel>Apple과 비즈니스</LinkLabel>
            </List>
            <List>
              <LinkLabel>비즈니스를 위한 제품 쇼핑하기</LinkLabel>
            </List>
          </UList>
        </Section>
        <UnderSection>
          <Title>교육</Title>
          <UList>
            <List>
              <LinkLabel>Apple과 교육</LinkLabel>
            </List>
            <List>
              <LinkLabel>초중고용 제품 쇼핑하기</LinkLabel>
            </List>
            <List>
              <LinkLabel>대학 생활을 위한 제품 쇼핑하기</LinkLabel>
            </List>
          </UList>
        </UnderSection>
      </Column>
      <Column>
        <Section>
          <Title>Apple의 가치관</Title>
          <UList>
            <List>
              <LinkLabel>손쉬운 사용</LinkLabel>
            </List>
            <List>
              <LinkLabel>환경</LinkLabel>
            </List>
            <List>
              <LinkLabel>개인정보 보호</LinkLabel>
            </List>
            <List>
              <LinkLabel>협력업체에 대한 책임</LinkLabel>
            </List>
          </UList>
        </Section>
        <UnderSection>
          <Title>Apple의 정보</Title>
          <UList>
            <List>
              <LinkLabel>Newsroom</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple 리더십</LinkLabel>
            </List>
            <List>
              <LinkLabel>채용 안내</LinkLabel>
            </List>
            <List>
              <LinkLabel>이벤트</LinkLabel>
            </List>
            <List>
              <LinkLabel>일자리 창출</LinkLabel>
            </List>
            <List>
              <LinkLabel>Apple 연락처</LinkLabel>
            </List>
          </UList>
        </UnderSection>
      </Column>
    </Container>
  );
}

export default Pc;
