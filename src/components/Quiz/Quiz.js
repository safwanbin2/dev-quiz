import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quizs = useLoaderData().data.questions;
  console.log(quizs)
    return (
        <div>
          this is quiz  
        </div>
    );
};

export default Quiz;