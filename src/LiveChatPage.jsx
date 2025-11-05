import React from 'react';
import { FaChevronLeft, FaCommentAlt, FaHeadset, FaClock } from 'react-icons/fa';

const LiveChatPage = ({ onGoBack }) => {
    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Support
                </button>
                <h1><FaCommentAlt /> Live Chat (Premium)</h1>
            </header>

            <main className="settings-main-content">
                <div className="chat-box">
                    <div className="message system-message">
                        <FaHeadset /> <span>Connecting to the next available premium agent...</span>
                    </div>
                    <div className="message system-message waiting">
                        <FaClock /> Estimated wait time: **2 minutes**.
                    </div>
                </div>

                <p className="status-text">Only premium users have access to instant live support.</p>
                
                {/* Ensure the start button is prominent */}
                <button onClick={() => alert('Initiating secure chat connection...')} className="start-chat-button">
                    Start Chat Session
                </button>
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
                    color: #00BFFF; /* Bright Blue signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #2c3440;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                    text-align: center;
                }
                .chat-box {
                    background-color: #1b2631;
                    border-radius: 10px;
                    padding: 20px;
                    min-height: 150px; /* Made smaller for focus */
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    text-align: left;
                    border: 1px solid #00BFFF;
                }
                .message {
                    padding: 10px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .system-message {
                    background-color: #3c4452;
                    color: #FFD700;
                    font-size: 0.95rem;
                }
                .waiting {
                    color: #FF69B4;
                }
                .status-text {
                    color: #AAAAAA;
                    font-style: italic;
                    margin-bottom: 15px;
                }
                .start-chat-button {
                    background-color: #00BFFF;
                    color: white;
                    font-weight: 700;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    font-size: 1.1rem;
                    width: 100%; /* Make button full width */
                }
                .start-chat-button:hover {
                    background-color: #55aaff;
                }
            `}</style>
        </div>
    );
};

export default LiveChatPage;