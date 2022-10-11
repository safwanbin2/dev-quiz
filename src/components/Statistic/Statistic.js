import React, { useContext } from 'react';
import { TopicContext } from '../../layouts/Main';

const Statistic = () => {
    const data = useContext(TopicContext);
    console.log(data)
    return (
        <div>
            <h1>Graphical view of total questions</h1>
        </div>
    );
};

export default Statistic;