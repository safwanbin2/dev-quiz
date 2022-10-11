import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {
  const quizs = useLoaderData().data.questions;
  return (
    <div className='w-11/12 md:w-6/12 mx-auto my-8'>
      {
        quizs.map(quiz => <QuizItem
          key={quiz.id}
          quiz={quiz}
        ></QuizItem>)
      }
    </div>
  );
};

export default Quiz;