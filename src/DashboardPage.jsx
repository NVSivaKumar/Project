import React from 'react';
import './DashboardPage.css'; 
// FaIcons are assumed to be correctly imported or available via the environment

// HireSphere Logo SVG
const HireSphereLogo = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="#00BFFF" strokeWidth="10"/>
        <path d="M50 5 C30 5 5 30 5 50 C5 70 30 95 50 95 C70 95 95 70 95 50 C95 30 70 5 50 5 Z" fill="none" stroke="#00BFFF" strokeWidth="5"/>
        <path d="M50 5 C50 30 75 50 95 50 C75 50 50 70 50 95 C50 70 25 50 5 50 C25 50 50 30 50 5 Z" fill="#00BFFF"/>
    </svg>
);

const roleCards = [
    // 1. User
    { 
        title: "User", 
        description: "Discover services, book appointments, and review providers.", 
        icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>, 
        iconColor: '#00BFFF',
        action: 'user' 
    },
    // 2. Professional
    { 
        title: "Professional", 
        description: "Manage services, engage with clients, and handle schedules.", 
        icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
        iconColor: '#FF69B4',
        action: 'professional'
    },
    // 3. Profile
    { 
        title: "Profile", 
        description: "Manage account settings, passwords, and billing information.", 
        icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"/></svg>, 
        iconColor: '#FFD700',
        action: 'profile'
    },
    // 4. Customer Support
    { 
        title: "Customer Support", 
        description: "Assist users, handle disputes, and resolve service issues.", 
        icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h-2m0 0l-1-1m1 1l1-1m-1 1v2m-4 1h4m4 0h-4m-4-8h4m4 0h-4m-4 4h4m4 0h-4m-4 4h4m4 0h-4"/></svg>,
        iconColor: '#AAAAAA',
        action: 'support'
    }
];

// CRITICAL: Must accept all navigation props from App.jsx
const DashboardPage = ({ onLogout, onNavigateToUserDashboard, onNavigateToProfessionalDashboard, onNavigateToProfile, onNavigateToSupport }) => {

    const handleCardClick = (action) => {
        if (action === 'user') {
            onNavigateToUserDashboard();
        } else if (action === 'professional') {
            onNavigateToProfessionalDashboard(); 
        } else if (action === 'profile') {
             onNavigateToProfile(); 
        } else if (action === 'support') {
             onNavigateToSupport(); // Calls the support navigation function
        } else {
            console.log(`Action: ${action}`);
        }
    };

    return (
        <div className="dashboard-container">
            {/* Header - Centered Content */}
            <header className="dashboard-header">
                <div className="logo-group">
                    <HireSphereLogo />
                    <h1>HireSphere</h1>
                </div>
            </header>
            
            {/* Main Content Grid */}
            <main className="dashboard-main-content">
                <div className="roles-grid">
                    {roleCards.map((card, index) => (
                        <div 
                            key={index} 
                            className="role-card"
                            onClick={() => handleCardClick(card.action)} 
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="icon-wrapper" style={{ color: card.iconColor }}>
                                {React.cloneElement(card.icon, { style: { color: card.iconColor, width: '3rem', height: '3rem' }})}
                            </div>
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
                
                {/* Log Out Button at the bottom center */}
                <div className="logout-footer">
                    <button 
                        onClick={onLogout}
                        className="logout-button"
                    >
                        ← Log Out
                    </button>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;