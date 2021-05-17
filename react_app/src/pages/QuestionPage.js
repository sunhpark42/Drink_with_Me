import React from 'react';
import { useHistory, useParams } from 'react-router';
import question from '../data/question';

const QuestionPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const data = question.find((question) => question.id === Number(id));

  return (
    <div>
      <img src={data.image} alt=""></img>
    </div>
  );
};

export default QuestionPage;
