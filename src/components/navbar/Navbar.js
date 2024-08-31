import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                {/* Using the imported logo */}
                <img src="C:\Users\Jayan\OneDrive\Documents\Desktop\anton-darius-gWXyJ9k5ak8-unsplash (1).jpg" alt="Dashboard Logo" className="logo" />
                <span className="logo-text">My Dashboard</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;
