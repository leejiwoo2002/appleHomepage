import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Section = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  border-color: rgb(210, 210, 215);
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.h3`
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  color: rgb(29, 29, 31);
`;

const UList = styled.ul`
  margin: 0px;
  padding-left: 0px;
  padding-top: 5px;
  padding-bottom: 16px;
  display: flex;
  flex-flow: column;
`;

const List = styled.li`
  list-style: none;
  color: rgb(29, 29, 31);
  font-size: 12px;
  margin-bottom: 9.6px;
`;

const Link = styled.a`
  padding-left: 14px;
  color: rgb(81, 81, 84);

  text-decoration-color: rgb(81, 81, 84);
  :hover {
    text-decoration: underline;
    color: rgb(29, 29, 31);
  }
`;

interface menuProps {
  title: string;
  links: string[];
}

function Menu(props: menuProps): JSX.Element {
  const [opened, isOpened] = useState(false);

  const LinkList = props.links?.map((title, index) => {
    return (
      <List key={index}>
        <Link>{title}</Link>
      </List>
    );
  });

  return (
    <Section>
      <Title
        onClick={() => {
          isOpened(!opened);
        }}
      >
        {props.title}
      </Title>
      {opened ? <UList>{LinkList}</UList> : undefined}
    </Section>
  );
}

function Mobile(): JSX.Element {
  const data: menuProps[] = [
    {
      title: '쇼핑 및 알아보기',
      links: [
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Music',
        'AirPods',
        'iPod touch',
        '액세서리',
      ],
    },
    {
      title: '서비스',
      links: [
        'Apple Music',
        'Apple Arcade',
        'iCloud',
        'Apple Books',
        'App Store',
      ],
    },
    {
      title: '계정',
      links: ['Apple ID 관리', 'Apple Store 계정', 'iCloud.com'],
    },
    {
      title: 'Apple Store',
      links: [
        '매장 찾기',
        '온라인에서 쇼핑하기',
        'Genius Bar',
        'Today at Apple',
        'Apple 캠프',
        'Apple Store 앱',
        '리퍼 및 특가 제품',
        '금융 혜택',
        'Apple Trade In',
        '주문 상태',
        '쇼핑 도움말',
      ],
    },
    {
      title: '비즈니스',
      links: ['Apple과 비즈니스', '비즈니스를 위한 제품 쇼핑하기'],
    },
    {
      title: '교육',
      links: [
        'Apple과 교육',
        '초중고용 제품 쇼핑하기',
        '대학 생활을 위한 제품 쇼핑하기',
      ],
    },
    {
      title: 'Apple의 가치관',
      links: ['손쉬운 사용', '환경', '개인정보 보호', '협력업체에 대한 책임'],
    },
    {
      title: 'Apple 정보',
      links: [
        'Newsroom',
        'Apple 리더십',
        '채용 안내',
        '이벤트',
        '일자리 창출',
        'Apple 연락처',
      ],
    },
  ];
  return (
    <Container>
      {data.map((value, index) => (
        <Menu key={index} links={value.links} title={value.title}></Menu>
      ))}
    </Container>
  );
}

export default Mobile;
