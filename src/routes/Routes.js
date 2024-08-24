import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import MentorList from '../components/MentorList';
import PaymentPage from '../components/PaymentPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookingForm />} />
                <Route path="/MentorList" element={<MentorList />} />
                <Route path="/PaymentPage" element={<PaymentPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
