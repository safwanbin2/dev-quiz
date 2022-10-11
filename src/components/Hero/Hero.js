import React, { useContext } from 'react';
import banner from '../../assets/banner.jpg';
import { TopicContext } from '../../layouts/Main';
import Topics from '../Topics/Topics';

const Hero = () => {
    const topics = useContext(TopicContext);
    return (
        <div>
            <div className='md:flex  items-center w-11/12 mx-auto my-16'>
                <img className='md:w-6/12 rounded-md' src={banner} alt="" />
                <div className='md:ml-8'>
                    <h1 className='text-4xl my-4'>Push Your Limit</h1>
                    <p className='text-xl my-4'>Test The ultimate quiz set by level thee judges.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-4 gap-6 w-10/12 mx-auto mt-20 mb-12'>
                {
                    topics.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Hero;