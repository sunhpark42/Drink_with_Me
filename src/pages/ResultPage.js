import React from 'react';
import { useHistory, useParams } from 'react-router';
import { PATH } from '../constants';
import result from '../data/result';

const ResultPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { image, name, description } = result.find((res) => res.id === Number(id));

  const onRestart = () => {
    history.push(PATH.ROOT);
  };

  return (
    <div>
      {name}
      <img src={image} alt={name} width="100%" />
      {description}
      <button type="button" onClick={onRestart}>
        다시시작
      </button>
    </div>
  );
};

export default ResultPage;
