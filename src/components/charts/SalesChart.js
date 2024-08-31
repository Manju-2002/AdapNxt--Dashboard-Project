import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';

const data = [
    { name: '6/30/2024', orders: 4, sales: 1404 },
    { name: '7/6/2024', orders: 3, sales: 1000 },
    { name: '7/13/2024', orders: 2, sales: 500 },
    // Add more data points as needed
];

const SalesChart = () => {
    return (
        <div className="chart">
            <h2>Sales vs Orders</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="orders" stroke="#ff7300" />
                    <Line type="monotone" dataKey="sales" stroke="#387908" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SalesChart;
