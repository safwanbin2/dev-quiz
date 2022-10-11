import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-accent px-12">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Dev Quiz</Link>
            </div>
            <div className="flex-none">
                <Link className='text-white mx-6' to='/'>Home</Link>
                <Link className='text-white mx-6' to='/statistic'>Statistics</Link>
                <Link className='text-white mx-6' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;