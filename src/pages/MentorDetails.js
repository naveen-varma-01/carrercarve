import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MentorList from '../components/MentorList';

const MentorDetails = () => {
    const location = useLocation();
    const { areaOfInterest, duration, mentor } = location.state;
    const [selectedMentor, setSelectedMentor] = useState(mentor || '');
    const navigate = useNavigate();

    const mentors = [
        { name: 'John Doe', expertise: areaOfInterest },
        { name: 'Jane Smith', expertise: areaOfInterest },
    ];

    const handleConfirm = () => {
        const price = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
        navigate('/confirmation', { state: { duration, mentor: selectedMentor, price } });
    };

    return (
        <div className="mentor-details-container">
            <h2>Mentors for {areaOfInterest}</h2>
            <MentorList mentors={mentors} selectMentor={setSelectedMentor} />
            <button onClick={handleConfirm} disabled={!selectedMentor}>
                Confirm and Proceed to Payment
            </button>
        </div>
    );
};

export default MentorDetails;
