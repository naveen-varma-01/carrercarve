import React from 'react';
import { useLocation } from 'react-router-dom';
import PaymentPage from '../components/PaymentPage';

const Confirmation = () => {
    const location = useLocation();
    const { duration, mentor, price } = location.state;

    return (
        <div className="confirmation-container">
            <h2>Confirmation Page</h2>
            <PaymentPage duration={duration} mentor={mentor} price={price} />
        </div>
    );
};

export default Confirmation;
