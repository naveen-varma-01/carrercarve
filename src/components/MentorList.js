import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';




const MentorList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { mentorName } = location.state || {};  // Get the mentor's name from the state

    const handlePayment = (event) => {
        event.preventDefault();
    
        // navigate('/MentorList');
        navigate('/PaymentPage');
      
    };
    

    return (
        <div className="mentor-list-container">
            <h3>Available Mentors</h3>
            {mentorName ? (
                <div>
                    <h4>Selected Mentor: {mentorName}</h4>
                    {/* Additional mentor details or actions can be added here */}
                </div>
            ) : (
                <p>No mentor was selected.</p>
            )}
            
            <button onClick={handlePayment}>Make Payment</button>
            
        </div>
    );
};

export default MentorList;
