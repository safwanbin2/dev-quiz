import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic}) => {
    const {id, logo, name, total} = topic;
    return (
        <div className='shadow-lg rounded-md p-4 bg-slate-100'>
            <img src={logo} alt="" />
            <h2 className='text-xl font-bold'>{name}</h2>
            <p>Total: {total} questions</p>
            <Link className='btn btn-accent mt-4' to={`/quiz/${id}`}>Explore Quiz</Link>
        </div>
    );
};

export default Topics;