import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { TopicContext } from '../../layouts/Main';

const Statistic = () => {
    const data = useContext(TopicContext);
    console.log(data)

    return (
        <div className='w-full md:w-8/12 mx-auto'>
            <h1 className='text-center text-3xl font-semibold my-8 border-b-2 border-b-accent pb-4'>Graphical view of total questions</h1>
            <ResponsiveContainer width="95%" height={400}>
                <AreaChart
                    className='mx-auto'
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;