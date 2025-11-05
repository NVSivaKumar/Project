import React from 'react';
import { FaChevronLeft, FaCalendarAlt, FaCheckCircle, FaStar, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import FeatureCard from './FeatureCard'; 

// Customer Support Details (Kept from original implementation)
const supportData = {
    phone: "2400032512",
    company: "KLUNIVERSITY",
    email: "2400032512@kluniversity.in"
};


// CRITICAL: Accepts the bookingHistory array instead of latestBooking
const YourBookingsPage = ({ onGoBack, bookingHistory }) => {
    
    // Define the card data (Kept from original implementation)
    const supportOptions = [
        { 
            title: "Submit a Ticket", 
            description: "For non-urgent issues, submit a detailed support request.", 
            icon: <FaCalendarAlt />, 
            iconColor: '#FFD700', // Gold
            action: () => alert('Opening Ticket Submission Form')
        },
        { 
            title: "Manage Appointments", 
            description: "Reschedule or cancel existing confirmed bookings.", 
            icon: <FaClock />, 
            iconColor: '#FF4500', // Orange-Red
            action: () => alert('Opening Appointment Manager')
        },
        { 
            title: "Booking History", 
            description: "View all past service completions and transaction records.", 
            icon: <FaCheckCircle />, 
            iconColor: '#00BFFF', // Bright Blue
            action: () => alert('Viewing Booking History')
        },
    ];

    const handleCancel = (bookingId) => {
        alert(`Booking ID ${bookingId} has been cancelled (Placeholder action).`);
        // In a real app, this would dispatch an action to filter and update the bookingHistory array in App.jsx.
    };

    return (
        <div className="support-container">
            <header className="support-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Dashboard
                </button>
                <h1><FaCalendarAlt /> Your Bookings</h1>
            </header>

            <main className="support-main-content">
                
                <h2>Confirmed Bookings ({bookingHistory.length})</h2>
                <div className="booking-list">
                    {bookingHistory.length > 0 ? (
                        // CRITICAL CHANGE: Map over the entire bookingHistory array
                        bookingHistory.map((booking) => (
                            <div key={booking.bookingId} className="booking-item">
                                <FaCheckCircle className="status-icon success-icon" />
                                <div className="booking-details">
                                    <h3>Professional: {booking.name}</h3>
                                    <p>Service: {booking.specialty}</p>
                                    <p>Date: **{booking.appointmentDate}**</p>
                                    <p>Booked On: {booking.bookingDate}</p>
                                    <p>Rate: {booking.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}/hour</p>
                                </div>
                                <button className="cancel-button" onClick={() => handleCancel(booking.bookingId)}>Cancel</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-bookings-message">You currently have no confirmed bookings. Book a professional to get started!</p>
                    )}
                </div>
                
                {/* Common Actions Section (Using FeatureCard for consistency) */}
                <h2>Booking Tools</h2>
                <div className="features-grid">
                    {supportOptions.map((item, index) => (
                        <FeatureCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            onClick={item.action}
                        />
                    ))}
                </div>

            </main>

            <style jsx>{`
                .support-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                    box-sizing: border-box;
                }
                .support-header {
                    padding: 0 0 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                }
                .back-button {
                    position: absolute;
                    left: 0; 
                    top: 0;
                    background: none;
                    border: none;
                    color: #55aaff;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    padding: 10px 15px;
                    border-radius: 8px;
                }
                .support-header h1 {
                    font-size: 2.8rem;
                    color: #3CB371; 
                    text-align: center;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
                }

                .support-main-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 20px;
                }
                
                /* Sub Headers */
                .support-main-content h2 {
                    font-size: 2rem;
                    color: white;
                    margin-top: 40px;
                    margin-bottom: 25px;
                    text-align: left;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #55aaff;
                }

                /* --- Booking List --- */
                .booking-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px; /* Reduced gap for list density */
                }
                .booking-item {
                    background-color: #2c3440;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-left: 5px solid #3CB371; /* Green for success */
                    transition: transform 0.2s;
                }
                .booking-item:hover {
                    transform: translateY(-2px);
                }
                .status-icon {
                    font-size: 2rem;
                    margin-right: 20px;
                }
                .success-icon {
                    color: #3CB371;
                }
                .booking-details {
                    flex-grow: 1;
                }
                .booking-details h3 {
                    font-size: 1.25rem;
                    margin: 0 0 5px;
                    color: white;
                }
                .booking-details p {
                    font-size: 0.9rem;
                    color: #b0c4de;
                    margin: 2px 0;
                }
                .cancel-button {
                    background-color: #FF4500;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    flex-shrink: 0;
                }
                .cancel-button:hover {
                    background-color: #CC3700;
                }
                .no-bookings-message {
                    color: #b0c4de;
                    font-style: italic;
                    margin-top: 30px;
                    text-align: center;
                }

                /* --- Feature Card Grid --- */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 50px;
                }

                /* Mobile Adjustments */
                @media (max-width: 768px) {
                    .booking-item {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .cancel-button {
                        margin-top: 15px;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default YourBookingsPage;