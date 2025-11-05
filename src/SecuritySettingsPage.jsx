import React from 'react';
import { FaChevronLeft, FaLock, FaKey, FaShieldAlt } from 'react-icons/fa';

const SecuritySettingsPage = ({ onGoBack }) => {
    const handleChangePassword = (e) => {
        e.preventDefault();
        alert('Password Reset Link Sent (Placeholder)!');
    };
    
    const handleToggle2FA = () => {
        alert('Two-Factor Authentication Toggled (Placeholder)!');
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Profile
                </button>
                <h1><FaLock /> Security Settings</h1>
            </header>

            <main className="settings-main-content">
                <section className="setting-card">
                    <FaKey className="setting-icon key-icon" />
                    <h2>Change Password</h2>
                    <p>Update your password regularly to keep your account safe.</p>
                    <button onClick={handleChangePassword} className="action-button">
                        Reset Password
                    </button>
                </section>

                <section className="setting-card">
                    <FaShieldAlt className="setting-icon shield-icon" />
                    <h2>Two-Factor Authentication (2FA)</h2>
                    <p>Add an extra layer of security. Currently **Off**.</p>
                    <button onClick={handleToggle2FA} className="action-button toggle-button">
                        Enable 2FA
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
                    color: #FF69B4; /* Pink signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 800px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                }
                .setting-card {
                    background-color: #2c3440;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                    border-left: 5px solid #FF69B4;
                }
                .setting-icon {
                    font-size: 3rem;
                    margin-bottom: 15px;
                }
                .key-icon { color: #FFD700; }
                .shield-icon { color: #3CB371; }

                .setting-card h2 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                    color: white;
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
                .action-button:hover {
                    background-color: #88ccff;
                }
                .toggle-button {
                    background-color: #3CB371;
                }
                .toggle-button:hover {
                    background-color: #4CAF50;
                }
            `}</style>
        </div>
    );
};

export default SecuritySettingsPage;