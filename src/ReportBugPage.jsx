import React from 'react';
import { FaChevronLeft, FaBug, FaExclamationTriangle } from 'react-icons/fa';

const ReportBugPage = ({ onGoBack }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Bug Report Received. Thank you for helping us improve!');
        onGoBack();
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Support
                </button>
                <h1><FaBug /> Report a Bug</h1>
            </header>

            <main className="settings-main-content">
                <p className="intro-text">Found an error? Please provide as much detail as possible to help us fix it quickly.</p>
                <form onSubmit={handleSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="location">Where did the bug occur?</label>
                        <input type="text" id="location" placeholder="e.g., On the User Dashboard when searching" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="severity">Severity Level</label>
                        <select id="severity" required>
                            <option value="">-- Select --</option>
                            <option value="critical">Critical (App crash/Security issue)</option>
                            <option value="high">High (Major function broken)</option>
                            <option value="medium">Medium (Minor feature issue)</option>
                            <option value="low">Low (Cosmetic/Typo)</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="steps">Steps to Reproduce</label>
                        <textarea id="steps" rows="6" placeholder="1. Go to... 2. Click... 3. See error..." required></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        <FaExclamationTriangle /> Submit Bug Report
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
                    color: #FF4500; /* Orange-Red signature color */
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
                .form-group input, .form-group textarea, .form-group select {
                    width: 100%;
                    padding: 12px;
                    border-radius: 8px;
                    border: 1px solid #3c4452;
                    background-color: #1b2631;
                    color: white;
                    font-size: 1rem;
                    box-sizing: border-box;
                }
                .form-group select option {
                    background-color: #1b2631;
                    color: white;
                }
                .submit-button {
                    margin-top: 20px;
                    background-color: #FF4500;
                    color: white;
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
                    background-color: #CC3700;
                }
            `}</style>
        </div>
    );
};

export default ReportBugPage;