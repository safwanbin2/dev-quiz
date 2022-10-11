import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-40 w-4/12 mx-auto'>
            <h2 className='text-4xl text-error'>oops!</h2>
            <h3 className='text-3xl'>You have entered wrong URL</h3>
            <Link className='btn btn-accent rounded-none mt-4' to='/'>Go back</Link>
        </div>
    );
};

export default ErrorPage;