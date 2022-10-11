import React, { useContext } from 'react';
import banner from '../../assets/banner.jpg';
import { TopicContext } from '../../layouts/Main';

const Hero = () => {
    const topics = useContext(TopicContext);
    console.log(topics)
    return (
        <div>
            <div className='flex  items-center w-11/12 mx-auto my-16'>
                <img className='w-6/12 rounded-md' src={banner} alt="" />
                <div className='ml-8'>
                    <h1 className='text-4xl my-4'>Push Your Limit</h1>
                    <p className='text-xl my-4'>Test The ultimate quiz set by level thee judges.</p>
                </div>
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default Hero;