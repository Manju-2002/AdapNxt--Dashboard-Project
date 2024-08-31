import React from 'react';
import SalesChart from '../components/charts/SalesChart';
import PortionOfSalesChart from '../components/charts/PortionOfSalesChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="charts">
                <SalesChart />
                <PortionOfSalesChart />
            </div>
        </div>
    );
}

export default Dashboard;
