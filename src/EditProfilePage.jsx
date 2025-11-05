import React from 'react';
import { FaChevronLeft, FaPencilAlt, FaUser, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const EditProfilePage = ({ onGoBack }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile Updated Successfully (Placeholder)!');
        onGoBack();
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Profile
                </button>
                <h1><FaPencilAlt /> Edit Personal Info</h1>
            </header>

            <main className="settings-main-content">
                <form onSubmit={handleSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="name"><FaUser /> Full Name</label>
                        <input type="text" id="name" defaultValue="Siva" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email"><FaEnvelope /> Email Address</label>
                        <input type="email" id="email" defaultValue="siv@gmail.com" required disabled />
                        <small>Email is used for login and cannot be changed here.</small>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="location"><FaMapMarkerAlt /> Location</label>
                        <input type="text" id="location" defaultValue="vijayawada" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea id="bio" rows="4" placeholder="Tell us about yourself..."></textarea>
                    </div>

                    <button type="submit" className="save-button">
                        Save Changes
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
                    color: #00BFFF; /* Blue signature color */
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
                }
                .settings-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 5px;
                    color: #b0c4de;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 10px;
                    border-radius: 8px;
                    border: 1px solid #3c4452;
                    background-color: #1b2631;
                    color: white;
                    font-size: 1rem;
                    box-sizing: border-box;
                }
                .form-group small {
                    color: #ff69b4;
                    font-size: 0.85rem;
                    margin-top: 5px;
                    display: block;
                }
                .save-button {
                    margin-top: 20px;
                    background-color: #00BFFF;
                    color: #1b2631;
                    font-weight: 700;
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .save-button:hover {
                    background-color: #55aaff;
                }
            `}</style>
        </div>
    );
};

export default EditProfilePage;