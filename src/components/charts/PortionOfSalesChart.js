import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';

const data = [
    { name: 'WooCommerce Store', value: 44.2 },
    { name: 'Shopify Store', value: 55.8 },
];

const COLORS = ['#0088FE', '#FF8042'];

const PortionOfSalesChart = () => {
    return (
        <div className="chart">
            <h2>Portion of Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PortionOfSalesChart;
