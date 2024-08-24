import React from 'react';
import BookingForm from '../components/BookingForm';
import './App.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome, MBA Students!</h1>
            <p>Schedule your 1x1 Mock Interview with a Mentor</p>
            <BookingForm />
        </div>
    );
};

export default Home;
