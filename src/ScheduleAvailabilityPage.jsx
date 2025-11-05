import React from 'react';
import { FaChevronLeft, FaCalendarAlt, FaClock, FaTools } from 'react-icons/fa';

const ScheduleAvailabilityPage = ({ onGoBack }) => {
    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Control Panel
                </button>
                <h1><FaCalendarAlt /> Schedule & Availability</h1>
            </header>

            <main className="settings-main-content">
                <p className="status-message">Your schedule for the next 7 days is currently **OPEN** for bookings.</p>
                
                <section className="setting-card">
                    <h2><FaClock /> Set Working Hours</h2>
                    <p>Customize your availability per day (e.g., 9:00 AM - 5:00 PM).</p>
                    <button onClick={() => alert('Opening Working Hours Editor')} className="action-button primary-btn">
                        Adjust Schedule
                    </button>
                </section>

                <section className="setting-card">
                    <h2><FaTools /> Booked Appointments</h2>
                    <p>View your confirmed bookings for the month.</p>
                    <button onClick={() => alert('Viewing Booked Appointments List')} className="action-button secondary-btn">
                        View List
                    </button>
                </section>
            </main>

            <style jsx>{`
                .settings-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                }
                .settings-header {
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
                }
                .settings-header h1 {
                    font-size: 2.8rem;
                    color: #3CB371; /* Green signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 900px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                }
                .status-message {
                    grid-column: 1 / -1;
                    background-color: #3c4452;
                    padding: 15px;
                    border-radius: 8px;
                    text-align: center;
                    font-size: 1.1rem;
                    color: #DDEEFF;
                }
                .setting-card {
                    background-color: #2c3440;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                    border-left: 5px solid #3CB371;
                }
                .setting-card h2 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .setting-card p {
                    color: #b0c4de;
                    margin-bottom: 20px;
                }
                .action-button {
                    background-color: #55aaff;
                    color: #1b2631;
                    font-weight: 700;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .primary-btn { background-color: #3CB371; }
                .primary-btn:hover { background-color: #4CAF50; }
                .secondary-btn { background-color: #55aaff; color: white; }
                .secondary-btn:hover { background-color: #88ccff; }
            `}</style>
        </div>
    );
};

export default ScheduleAvailabilityPage;