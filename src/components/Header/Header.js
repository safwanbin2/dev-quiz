import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const Header = () => {
    let [open, setOpen] = useState(false);
    return (
        // <div className="navbar bg-accent px-12">
        //     <div className="flex-1">
        //         <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Dev Quiz</Link>
        //     </div>
        //     <div className="flex-none">
        //         <Link className='text-white mx-6' to='/'>Home</Link>
        //         <Link className='text-white mx-6' to='/statistic'>Statistics</Link>
        //         <Link className='text-white mx-6' to='/blog'>Blog</Link>
        //     </div>
        // </div>
        <div className='shadow-md w-full sticky top-0 left-0'>
            <div className='md:flex items-center justify-between bg-accent py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                    Dev Quiz
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    <FontAwesomeIcon icon={open ? faClose : faBars}></FontAwesomeIcon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 bg-accent z-10 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='mx-6 text-white' to='/'>Home</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-white mx-6' to='/statistic'>Statistics</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-white mx-6' to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;