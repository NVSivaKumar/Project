import React from 'react';
import { FaChevronLeft, FaPhone, FaEnvelope, FaBuilding, FaQuestionCircle, FaBug, FaCommentAlt } from 'react-icons/fa';
import FeatureCard from './FeatureCard'; 

// Customer Support Details
const supportData = {
    phone: "2400032513",
    company: "KLUNIVERSITY",
    email: "2400032513@kluniversity.in"
};

// CRITICAL: supportOptions will now call navigation functions passed as props
const CustomerSupportPage = ({ onGoBack, onNavigateToTicket, onNavigateToBug, onNavigateToChat }) => {
    
    const supportOptions = [
        { 
            title: "Submit a Ticket", 
            description: "For non-urgent issues, submit a detailed support request.", 
            icon: <FaQuestionCircle />, 
            iconColor: '#FFD700', // Gold
            action: onNavigateToTicket // Uses navigation prop
        },
        { 
            title: "Report a Bug", 
            description: "Found an error or technical glitch? Let us know here.", 
            icon: <FaBug />, 
            iconColor: '#FF4500', // Orange-Red
            action: onNavigateToBug // Uses navigation prop
        },
        { 
            title: "Live Chat (Premium)", 
            description: "Connect instantly with a support agent for fast resolution.", 
            icon: <FaCommentAlt />, 
            iconColor: '#00BFFF', // Bright Blue
            action: onNavigateToChat // Uses navigation prop
        },
    ];

    return (
        <div className="support-container">
            <header className="support-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Roles
                </button>
                <h1>Customer Support Center</h1>
            </header>

            <main className="support-main-content">
                {/* Contact Information Section */}
                <h2>Direct Contact</h2>
                <div className="contact-details-grid">
                    <div className="contact-card">
                        <FaPhone className="contact-icon phone-icon" />
                        <h3>Phone Support</h3>
                        <p>Call us for immediate assistance during business hours.</p>
                        <a href={`tel:${supportData.phone}`}>{supportData.phone}</a>
                    </div>
                    
                    <div className="contact-card">
                        <FaEnvelope className="contact-icon email-icon" />
                        <h3>Email Support</h3>
                        <p>We aim to respond to all emails within 24 hours.</p>
                        <a href={`mailto:${supportData.email}`}>{supportData.email}</a>
                    </div>
                    
                    <div className="contact-card">
                        <FaBuilding className="contact-icon company-icon" />
                        <h3>Provided By</h3>
                        <p>All support services are handled directly by:</p>
                        <span>{supportData.company}</span>
                    </div>
                </div>
                
                {/* Common Actions Section (Using FeatureCard for consistency) */}
                <h2>Common Support Actions</h2>
                <div className="features-grid">
                    {supportOptions.map((item, index) => (
                        <FeatureCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            onClick={item.action} // Calls the navigation prop directly
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
                    color: #AAAAAA; 
                    text-align: center;
                    margin-top: 20px;
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

                /* --- Contact Grid --- */
                .contact-details-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                }
                .contact-card {
                    background-color: #2c3440;
                    padding: 25px;
                    border-radius: 16px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    border-left: 5px solid #AAAAAA; 
                }
                .contact-card h3 {
                    font-size: 1.5rem;
                    color: white;
                    margin-bottom: 10px;
                }
                .contact-card p {
                    color: #b0c4de;
                    margin-bottom: 15px;
                }
                .contact-card a, .contact-card span {
                    font-weight: 600;
                    color: #00BFFF; 
                    text-decoration: none;
                    font-size: 1.1rem;
                }
                .contact-card a:hover {
                    text-decoration: underline;
                }
                .contact-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                }
                .phone-icon { color: #3CB371; }
                .email-icon { color: #FFD700; }
                .company-icon { color: #FF69B4; }

                /* --- Feature Card Grid --- */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 50px;
                }

                /* Mobile Adjustments */
                @media (max-width: 768px) {
                    .support-container {
                        padding: 15px;
                    }
                    .support-header h1 {
                        font-size: 2rem;
                    }
                    .contact-details-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CustomerSupportPage;