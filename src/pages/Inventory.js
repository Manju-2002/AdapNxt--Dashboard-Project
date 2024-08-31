import React from 'react';
import './Inventory.css';

const Inventory = () => {
    return (
        <div className="inventory">
            <h1>Inventory</h1>
            <div className="inventory-list">
                {/* Inventory items would be dynamically generated here */}
                <div className="inventory-item">Product A - Quantity: 100</div>
                <div className="inventory-item">Product B - Quantity: 50</div>
                <div className="inventory-item">Product C - Quantity: 200</div>
                {/* Add more inventory items as needed */}
            </div>
        </div>
    );
};

export default Inventory;
