import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

export const TopicContext = createContext([]);

const Main = () => {
    const topics = useLoaderData().topics.data;
    return (
        <div>
            <TopicContext.Provider value={topics}>
                <Header></Header>
                <Outlet></Outlet>
            </TopicContext.Provider>
        </div>
    );
};

export default Main;