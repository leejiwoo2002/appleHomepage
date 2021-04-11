import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-bottom-color: rgb(210, 210, 215);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  box-sizing: border-box;
  color: rgb(134, 134, 139);
  font-size: 12px;
  padding-top: 17px;
  padding-bottom: 12px;
`;

const LinkLabel = styled.a`
  color: rgb(81, 81, 84);
  cursor: pointer;
  text-decoration: none;

  :hover {
    text-decoration-color: rgb(81, 81, 84);
    text-decoration: underline;
  }
`;

function Note(): JSX.Element {
  return (
    <Container>
      <span>
        * 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의
        업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간
        계약의 당사자가 아닙니다. 보상 판매 금액은 보상 판매되는 스마트폰의 상태
        및 모델에 따라 달라집니다. 19세 이상이어야 합니다. 일부 매장에서는 본
        프로그램을 이용할 수 없으며, 일부 기기는 보상 판매 대상이 아닙니다.
        Apple은 어떤 기기든 수령을 거부하거나, 그 수량을 제한할 권리를
        보유합니다. 새 Apple 기기 구매 시, 현재 소유한 기기의 가치만큼 할인을
        받을 수도 있습니다. 추가 약관은
      </span>
      <LinkLabel href="#"> apple.com/kr/trade-in</LinkLabel>
      <span> 을 참고하십시오.</span>
    </Container>
  );
}

export default Note;
