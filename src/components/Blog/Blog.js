import React from 'react';

const Blog = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <h1 className='border-b-2 border-b-accent pb-4 text-3xl font-semibold text-center my-8'>Frequently Asked Questions (FAQs)</h1>
            <div>
                <h2 className='text-2xl font-semibold'>1. What is the purpose of React Router?</h2>
                <p>Ans: React router is way to set routes among the components which is a faster way to change url and it syncs the ui with url. Through routing, we can overcome alot of complexities.it makes the routing easier.</p>
                <h2 className='text-2xl mt-8 font-semibold'>2. How does Context API works?</h2>
                <p>Ans: Context API is a simple way which makes the data available across the ui. props drilling can get complex while working with multi layered components. but with context api ,we can easily make our data available where we want them to access.</p>
                <h2 className='text-2xl mt-8 font-semibold'>3. What is useRef()?</h2>
                <p>Ans: useRef() is a react hook which outruns useState() while it comes about less complications. While using useState (), we often get caught inside infinite loop. this is where useRef comes. it prevents infinite loops by loading only once. it is used to manipulate DOM.</p>
            </div>
        </div>
    );
};

export default Blog;