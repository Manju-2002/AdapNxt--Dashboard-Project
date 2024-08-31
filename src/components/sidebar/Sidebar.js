import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                {/* Add more menu items as needed */}
            </ul>
        </div>
    );
}

export default Sidebar;
