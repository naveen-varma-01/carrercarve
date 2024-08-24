import React, { useState } from 'react';
import MentorList from './MentorList';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const BookingForm = () => {
    const navigate = useNavigate();
    const areasOfInterest = [
        'FMCG Sales', 'Equity Research', 'Digital Marketing', 
        'Consulting', 'Investment Banking', 'Human Resources', 
        'Operations', 'Product Management', 'Supply Chain Management',
        'Entrepreneurship', 'Corporate Finance', 'Healthcare Management',
        'Retail Management', 'Business Analytics', 'IT Management'
    ];

    // Random mentor names with their respective areas
    const mentors = [
        { id: 1, name: 'John Doe', area: 'FMCG Sales', available: true },
        { id: 2, name: 'Jane Smith', area: 'Equity Research', available: true },
        { id: 3, name: 'Michael Johnson', area: 'Digital Marketing', available: false },
        { id: 4, name: 'Emily Davis', area: 'Consulting', available: true },
        { id: 5, name: 'Robert Wilson', area: 'Investment Banking', available: true },
        { id: 6, name: 'Sophia Brown', area: 'Human Resources', available: false },
        { id: 7, name: 'William Taylor', area: 'Operations', available: true },
        { id: 8, name: 'Olivia Martin', area: 'Product Management', available: true },
        { id: 9, name: 'James Anderson', area: 'Supply Chain Management', available: true },
        { id: 10, name: 'Ava Thompson', area: 'Entrepreneurship', available: true }
    ];

    const [selectedArea, setSelectedArea] = useState('');
    const [selectedMentor, setSelectedMentor] = useState('');
    const [duration, setDuration] = useState(30);
    const [isPremium, setIsPremium] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');  // State for error message

    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
        setSelectedMentor(''); // Reset mentor selection on area change
        setErrorMessage('');  // Clear error message when area is selected
    };

    const handleMentorChange = (event) => {
        setSelectedMentor(event.target.value);
        setIsPremium(true); // Set premium flag when mentor is selected
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check if an area of interest is selected
        if (!selectedArea) {
            setErrorMessage('*Select an area of interest');  // Show error message
            return;  // Prevent routing to MentorList
        }

        // Logic for scheduling with mentor's preferences
        // Implement mentor back-to-back scheduling logic here
    
        console.log('Area of Interest:', selectedArea);
        console.log('Selected Mentor:', selectedMentor);
        console.log('Is Premium:', isPremium);

        navigate('/MentorList', { state: { mentorName: selectedMentor } });
    };

    const filteredMentors = mentors.filter(mentor => mentor.area === selectedArea && mentor.available);

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <div>
                <h1>Welcome, MBA Students!</h1>
                <p>Schedule your 1x1 Mock Interview with a Mentor</p>
                <label htmlFor="area">Area of Interest:</label>
                <select 
                    id="area" 
                    value={selectedArea} 
                    onChange={handleAreaChange} 
                    className="booking-form select"
                >
                    <option value="" className="booking-form input">Select an area</option>
                    {areasOfInterest.map(area => (
                        <option key={area} value={area} className="">{area}</option>
                    ))}
                </select>
                {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Display error message */}
            </div>

            <label>
                Duration:
                <select  
                    className="booking-form select" 
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)}
                >
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>60 minutes</option>
                </select>
            </label>

            {selectedArea && (
                <div>
                    <label htmlFor="mentor">Select Mentor (Optional - Premium Service):</label>
                    <select 
                        id="mentor" 
                        value={selectedMentor} 
                        onChange={handleMentorChange}
                    >
                        <option value="">Assign any available mentor</option>
                        {filteredMentors.map(mentor => (
                            <option key={mentor.id} value={mentor.name}>{mentor.name}</option>
                        ))}
                    </select>
                </div>
            )}

            <div>
                <button type="submit">Schedule Session</button>
            </div>
        </form>
    );
};

export default BookingForm;
