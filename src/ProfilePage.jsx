import React from 'react';
import { FaChevronLeft, FaPencilAlt, FaLock, FaCreditCard, FaCalendarCheck } from 'react-icons/fa';
import FeatureCard from './FeatureCard'; 

// Data structure mimicking the screenshot
const userData = {
    name: "Siva",
    email: "siv@gmail.com",
    location: "vijayawada",
    memberSince: "October 2025",
    profilePic: "/path/to/profile-pic.jpg" // Placeholder
};

// Card data - Adding the new 'Your Bookings' card
const profileOptions = [
    { 
        title: "Edit Personal Info", 
        description: "Update contact details, bio, and profile picture.", 
        icon: <FaPencilAlt />, 
        iconColor: '#00BFFF', // Blue
        actionType: 'edit-profile'
    },
    { 
        title: "Security Settings", 
        description: "Change password and set up two factor authentication.", 
        icon: <FaLock />, 
        iconColor: '#FF69B4', // Pink
        actionType: 'security-settings'
    },
    { 
        title: "Billing & Payments", 
        description: "Manage payment methods and view billing history.", 
        icon: <FaCreditCard />, 
        iconColor: '#3CB371', // Green
        actionType: 'billing-payments'
    },
    { 
        title: "Your Bookings", 
        description: "View, modify, or cancel your scheduled appointments.", 
        icon: <FaCalendarCheck />, 
        iconColor: '#FFD700', // Gold/Yellow
        actionType: 'bookings'
    }
];

// CRITICAL: Accept all navigation props
const ProfilePage = ({ onGoBack, onNavigateToBookings, onNavigateToEditProfile, onNavigateToSecurity, onNavigateToBilling }) => {

    const handleCardClick = (actionType) => {
        if (actionType === 'edit-profile') {
            onNavigateToEditProfile(); 
        } else if (actionType === 'security-settings') {
            onNavigateToSecurity();
        } else if (actionType === 'billing-payments') {
             onNavigateToBilling();
        } else if (actionType === 'bookings') {
             onNavigateToBookings(); 
        } else {
            console.log(`Action: ${actionType}`);
        }
    };

    return (
        <div className="profile-container">
            <header className="profile-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Roles
                </button>
                <h1>User Profile</h1>
            </header>

            <main className="profile-main-content">
                {/* User Info Card (Matching Screenshot) */}
                <div className="user-info-card">
                    <img src={userData.profilePic} alt="Profile" className="profile-pic-placeholder"/>
                    <div className="user-details">
                        <h2>{userData.name}</h2>
                        <p className="user-email">{userData.email}</p>
                        <p className="user-location">{userData.location}</p>
                        <p className="member-since">Member since: {userData.memberSince}</p>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="profile-features-grid">
                    {profileOptions.map((item, index) => (
                        <FeatureCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            onClick={() => handleCardClick(item.actionType)}
                        />
                    ))}
                </div>

            </main>

            <style jsx>{`
                .profile-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                    box-sizing: border-box;
                }
                .profile-header {
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
                .profile-header h1 {
                    font-size: 2.8rem;
                    color: #FFD700; 
                    text-align: center;
                    margin-top: 20px;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
                }

                .profile-main-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 20px 0;
                }

                /* User Info Card (Matching Screenshot) */
                .user-info-card {
                    background-color: #2c3440; 
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
                    display: flex;
                    align-items: center;
                    max-width: 600px;
                    margin: 0 auto 50px;
                }
                .profile-pic-placeholder {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin-right: 20px;
                    background-color: #55aaff; 
                    border: 3px solid white;
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-1.9 2.05-3.64 4.12-4.12 2.1-.5 4.3.0 5.8 1.5.3.3.6.5 1 .7 1.2.6 2.5.9 3.8.9V21H2v-2h3.52zM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>');
                    background-size: cover;
                    background-position: center;
                }
                .user-details h2 {
                    font-size: 1.8rem;
                    margin-top: 0;
                    color: #FFD700; 
                }
                .user-details p {
                    font-size: 0.95rem;
                    color: #b0c4de;
                    margin: 2px 0;
                }
                .user-email {
                    color: #AAAAAA;
                }

                /* Feature Card Grid */
                .profile-features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
                    gap: 30px;
                    justify-content: center;
                    max-width: 900px;
                    margin: 0 auto;
                }

                /* Mobile Adjustments */
                @media (max-width: 768px) {
                    .profile-container {
                        padding: 15px;
                    }
                    .user-info-card {
                        flex-direction: column;
                        text-align: center;
                    }
                    .profile-pic-placeholder {
                        margin: 0 0 15px 0;
                    }
                    .profile-features-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProfilePage;