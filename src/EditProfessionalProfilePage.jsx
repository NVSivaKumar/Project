import React from 'react';
import { FaChevronLeft, FaEdit, FaUserMd, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const EditProfessionalProfilePage = ({ onGoBack }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Professional Profile Updated Successfully (Placeholder)!');
        onGoBack();
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Control Panel
                </button>
                <h1><FaEdit /> Edit Professional Profile</h1>
            </header>

            <main className="settings-main-content">
                <form onSubmit={handleSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="specialty"><FaUserMd /> Main Specialty</label>
                        <input type="text" id="specialty" defaultValue="Pediatrics (Medical)" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="experience"><FaBriefcase /> Years of Experience</label>
                        <input type="number" id="experience" defaultValue="8" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="bio">Professional Bio</label>
                        <textarea id="bio" rows="6" placeholder="Describe your expertise, approach, and certifications..."></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact"><FaEnvelope /> Public Contact Email</label>
                        <input type="email" id="contact" defaultValue="dr.evelyn.reed@pro.com" />
                    </div>

                    <button type="submit" className="save-button">
                        Update Profile
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
                    color: #FFD700; /* Yellow signature color */
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
                .save-button {
                    margin-top: 20px;
                    background-color: #FFD700;
                    color: #1b2631;
                    font-weight: 700;
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
            `}</style>
        </div>
    );
};

export default EditProfessionalProfilePage;