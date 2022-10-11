import React from 'react';
import './QuizItem.css';

const QuizItem = ({quiz}) => {
    console.log(quiz)
    const {correctAnswer, id, options, question} = quiz;
    return (
        <div className='p-8 border-2 border-accent shadow-lg my-8'>
            <h1 className='text-2xl font-semibold'>{question}</h1>
            <div className='my-4 font-semibold ml-8'>
                {options[1] && <h4 className='p-2 rounded cursor-pointer quiz-item'>1. {options[1]}</h4>}
                {options[0] && <h4 className='p-2 rounded cursor-pointer quiz-item'>2. {options[0]}</h4>}
                {options[2] && <h4 className='p-2 rounded cursor-pointer quiz-item'>3. {options[2]}</h4>}
                {options[3] && <h4 className='p-2 rounded cursor-pointer quiz-item'>4. {options[3]}</h4>}
                {options[4] && <h4 className='p-2 rounded cursor-pointer quiz-item'>5. {options[4]}</h4>}
            </div>
        </div>
    );
};

export default QuizItem;