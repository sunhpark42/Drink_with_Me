import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import question from '../data/question';
import styled, { css } from 'styled-components';
import { PATH } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  margin-bottom: 1rem;
`;

const QuestionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  padding: 0.8rem;
`;

const QuestionText = styled(TextBox)`
  position: absolute;
  background-color: purple;
  top: 0;
  opacity: 0;
  transform: translateY(-50%);

  transition: all 1s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateY(-10%);
  }
`;

const AnswerText = styled(TextBox)`
  position: absolute;
  background-color: grey;
  bottom: 0;
  opacity: 0;
  transform: translateY(30%);

  transition: all 1s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const OptionList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  ${({ col }) => `grid-template-columns: repeat(${col}, 1fr);`}
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  align-items: center;

  opacity: 0;
  transition: opacity 1.3s ease-in-out;

  &.show {
    opacity: 1;
  }
`;

const OptionWithImg = css`
  width: 100%;
  height: 100%;
  flex-direction: column;

  & img {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`;

const Option = styled(TextBox)`
  background-color: grey;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ image }) => (image ? OptionWithImg : '')};

  &:hover {
    transform: scale(1.05);
  }
`;

const QuestionPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const data = question.find((question) => question.id === Number(id));
  const nextQuestionId = Number(id) + 1;
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [afterTalk, setAfterTalk] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);

  const questionTextEl = useRef();
  const answerTextEl = useRef();
  const afterTextEl = useRef();

  const routeNextQuestion = () => {
    history.push(`${PATH.QUESTION}/${nextQuestionId}`);
  };

  //location 이 변할 때
  useEffect(() => {
    setAnswer('');
    setAfterTalk('');
    questionTextEl.current.classList.add('show');
    const timeoutId = setTimeout(() => {
      questionTextEl.current.classList.remove('show');
      setShowQuestion(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id]);

  useEffect(() => {
    if (answer) {
      answerTextEl.current.classList.add('show');
      const timeoutId = setTimeout(() => {
        answerTextEl.current.classList.remove('show');
        if (afterTalk) {
          afterTextEl.current.classList.add('show');
          setTimeout(() => {
            afterTextEl.current.classList.remove('show');
            setTimeout(routeNextQuestion, 1000);
          }, 3000);
        } else {
          setTimeout(routeNextQuestion, 1000);
        }
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [answer]);

  const onOptionClick = (optionId) => () => {
    setAfterTalk(data.afterTalk?.[optionId] ?? '');
    setAnswer(data.options.find((option) => option.id === Number(optionId)).text);
    setScore(score + 1);
    setShowQuestion(false);
  };

  return (
    <Container>
      {id === '13' && <Redirect to={PATH.RESULT}></Redirect>}
      <QuestionContainer>
        <QuestionImage src={data?.image} alt=""></QuestionImage>
        <QuestionText ref={questionTextEl}>{data?.questionText}</QuestionText>
        {afterTalk && <QuestionText ref={afterTextEl}>{afterTalk}</QuestionText>}
        {answer && <AnswerText ref={answerTextEl}>{answer}</AnswerText>}
      </QuestionContainer>
      <OptionList
        className={`${showQuestion ? 'show' : ''}`}
        col={data?.options?.[0].image ? '2' : '1'}
      >
        {data?.options?.map(({ id, text, image }) => (
          <Option role="button" key={text} onClick={onOptionClick(id)} image={image}>
            {image && <img src={image} alt="" />}
            <p>{text}</p>
          </Option>
        ))}
      </OptionList>
    </Container>
  );
};

export default QuestionPage;
