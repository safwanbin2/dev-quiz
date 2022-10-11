import React from 'react';
import './QuizItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizItem = ({ quiz }) => {
    const { correctAnswer, options, question } = quiz;
    const handleshowBtn = () => {
        toast.info(`The answer is --- ${correctAnswer}`, {autoClose: 2000})
    }
    const handleSelect = e => {
        if(e === correctAnswer){
            toast.success('The Answer is Right', {autoClose: 500})
        }
        else{
            toast.error('The Answer is Wrong', {autoClose: 500})
        }
    }
    return (
        <div className='p-8 border-2 border-accent rounded-md shadow-lg my-8'>
            <div onClick={handleshowBtn} className='text-end'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </div>
            <h1 className='text-2xl font-semibold border-b-2 border-accent pb-4'>{question}</h1>
            <div className='my-4 font-semibold ml-8'>
                {options[0] && <div className='flex items-center'>1. <h4 onClick={() => handleSelect(options[0])} className='p-2 rounded cursor-pointer quiz-item'>{options[0]}</h4></div>}

                {options[1] && <div className='flex items-center'>2. <h4 onClick={() => handleSelect(options[1])} className='p-2 rounded cursor-pointer quiz-item'>{options[1]}</h4></div>}

                {options[2] && <div className='flex items-center'>3. <h4 onClick={() => handleSelect(options[2])} className='p-2 rounded cursor-pointer quiz-item'>{options[2]}</h4></div>}

                {options[3] && <div className='flex items-center'>4. <h4 onClick={() => handleSelect(options[3])} className='p-2 rounded cursor-pointer quiz-item'>{options[3]}</h4></div>}

                {options[4] && <div className='flex items-center'>5. <h4 onClick={() => handleSelect(options[4])} className='p-2 rounded cursor-pointer quiz-item'>{options[4]}</h4></div>}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizItem;