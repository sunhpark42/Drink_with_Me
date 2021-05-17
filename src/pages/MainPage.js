import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { PATH } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  text-shadow: 0 0 10px blueviolet;
  text-align: center;
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const SubTitle = styled.p`
  color: aliceblue;
  margin: 0;
  text-align: center;
`;

const StartButton = styled.button`
  background-image: url('../assets/images/door_close.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 320px;
  height: 320px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-image 0.3s ease-in-out;

  &:focus {
    background-image: url('../assets/images/door_open.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    outline: 0;
    border: 0;
  }
`;

const Description = styled.div`
  text-align: center;

  & p {
    margin: 0;
  }
`;

const Warning = styled.div`
  text-align: center;

  & p {
    margin: 0;
  }
`;

const Button = styled.button``;

const MainPage = () => {
  const history = useHistory();

  const routeQuestionPage = () => {
    document.getElementById('bgm').volume = 0.1;
    document.getElementById('bgm').play();
    const timeoutId = setTimeout(() => history.push(`${PATH.QUESTION}/0`), 500);
  };

  return (
    <Container>
      <SubTitle>당신과 어울리는 술을 찾아드립니다</SubTitle>
      <Title>DRINK (with) ME</Title>
      <StartButton type="button" onClick={routeQuestionPage}></StartButton>
      <Description>
        <p>테스트를 할 준비가 되셨다면,</p>
        <p>위의 문을 열고 바에 들어가 주세요.</p>
      </Description>
      <Warning>
        <p>*음악이 재생되는 컨텐츠 입니다*</p>
        <p>이어폰을 꽂고 플레이하시면 더 좋아요</p>
      </Warning>
      <Button type="button">공유하기</Button>
    </Container>
  );
};

export default MainPage;
