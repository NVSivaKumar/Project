import React from 'react';
import { FaChevronLeft, FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';

const SubmitTicketPage = ({ onGoBack }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Ticket Submitted! We will contact you shortly.');
        onGoBack();
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Support
                </button>
                <h1><FaQuestionCircle /> Submit a Ticket</h1>
            </header>

            <main className="settings-main-content">
                <p className="intro-text">For non-urgent inquiries, please fill out the form below. We aim to respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="e.g., Issue with booking a professional" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Your Email (for response)</label>
                        <input type="email" id="email" defaultValue="user@example.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <textarea id="details" rows="6" placeholder="Describe your issue or question in detail..." required></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        <FaPaperPlane /> Send Ticket
                    </button>
                </form>
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
                    color: #FFD700; /* Gold signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 700px;
                    margin: 0 auto;
                    background-color: #2c3440;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                }
                .intro-text {
                    color: #b0c4de;
                    margin-bottom: 25px;
                    text-align: center;
                }
                .settings-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 5px;
                    color: #DDEEFF;
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 12px;
                    border-radius: 8px;
                    border: 1px solid #3c4452;
                    background-color: #1b2631;
                    color: white;
                    font-size: 1rem;
                    box-sizing: border-box;
                }
                .submit-button {
                    margin-top: 20px;
                    background-color: #FFD700;
                    color: #1b2631;
                    font-weight: 700;
                    padding: 15px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    font-size: 1.1rem;
                }
                .submit-button:hover {
                    background-color: #FFE680;
                }
            `}</style>
        </div>
    );
};

export default SubmitTicketPage;