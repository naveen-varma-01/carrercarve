import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PaymentPage = ({ duration, mentor, price }) => {
    const navigate = useNavigate();
    const handleBack = (event) => {
        event.preventDefault();
    
        // navigate('/MentorList');
        navigate('/MentorList');
      
    };
    const handlePayment = () => {
        // Simulate a payment process
        alert(`Payment of ₹2000 successful for 30-minute session with ${mentor}.`);
    };

    return (
        <div className="payment-page-container">
            <h3>Payment Details</h3>
            <p>Session Duration: 30 minutes</p>
            <p>Mentor: {mentor || 'Any available mentor'}</p>
            <p>Total Price: ₹2000</p>
            <button onClick={handleBack}>Back</button>
            <button onClick={handlePayment} className='payment-page-container button'>Confirm Payment</button>
        </div>
    );
};

export default PaymentPage;
