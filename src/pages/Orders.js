import React from 'react';
import './Orders.css';

const Orders = () => {
    return (
        <div className="orders">
            <h1>Orders</h1>
            <div className="order-list">
                {/* Orders would be dynamically generated here */}
                <div className="order-item">Order #1 - Status: Shipped</div>
                <div className="order-item">Order #2 - Status: Processing</div>
                <div className="order-item">Order #3 - Status: Delivered</div>
                {/* Add more orders as needed */}
            </div>
        </div>
    );
};

export default Orders;
