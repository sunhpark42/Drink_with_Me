import React from 'react';
import { useHistory, useParams } from 'react-router';
import result from '../data/result';

const ResultPage = () => {
  const { id } = useParams();
  const { name, description } = result.find((res) => res.id === Number(id));

  return <div>{(name, description)}</div>;
};

export default ResultPage;
