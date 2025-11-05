import React from 'react';
import { FaChevronLeft, FaListUl, FaCalendarAlt, FaEdit, FaDollarSign, FaCommentDots, FaChartLine } from 'react-icons/fa';
import FeatureCard from './FeatureCard'; 

// Data structure for the professional control panel cards (matching screenshot)
const professionalOptions = [
    { 
        title: "Manage Services", 
        description: "Add, edit, and set pricing for the services you offer.", 
        icon: <FaListUl />, 
        iconColor: '#FF69B4', // Pink
        actionType: 'manage-services' 
    },
    { 
        title: "Schedule & Availability", 
        description: "View booked appointments and set your working hours.", 
        icon: <FaCalendarAlt />, 
        iconColor: '#3CB371', // Green
        actionType: 'schedule-availability' // NEW ACTION TYPE
    },
    { 
        title: "Edit Professional Profile", 
        description: "Update bio, experience, gallery, and contact information.", 
        icon: <FaEdit />, 
        iconColor: '#FFD700', // Yellow/Gold
        actionType: 'edit-profile' // NEW ACTION TYPE
    },
    { 
        title: "Earnings & Payments", 
        description: "View payment history, invoices, and set withdrawal methods.", 
        icon: <FaDollarSign />, 
        iconColor: '#00BFFF', // Blue
        actionType: 'earnings-payments' // NEW ACTION TYPE
    },
    { 
        title: "Client Reviews", 
        description: "View and respond to feedback and client ratings.", 
        icon: <FaCommentDots />, 
        iconColor: '#9370DB', // Purple
        actionType: 'client-reviews' // NEW ACTION TYPE
    },
    { 
        title: "Performance Analytics", 
        description: "Track bookings, revenue trends, and client engagement.", 
        icon: <FaChartLine />, 
        iconColor: '#FF8C00', // Orange
        actionType: 'performance-analytics' // NEW ACTION TYPE
    },
];

// CRITICAL: Accept all new navigation props
const ProfessionalDashboard = ({ 
    onGoBack, 
    onNavigateToManageServices,
    onNavigateToSchedule, // New Prop
    onNavigateToEditProProfile, // New Prop
    onNavigateToEarnings, // New Prop
    onNavigateToReviews, // New Prop
    onNavigateToAnalytics // New Prop
}) => {

    const handleCardClick = (actionType) => {
        switch (actionType) {
            case 'manage-services':
                onNavigateToManageServices();
                break;
            case 'schedule-availability':
                onNavigateToSchedule();
                break;
            case 'edit-profile':
                onNavigateToEditProProfile();
                break;
            case 'earnings-payments':
                onNavigateToEarnings();
                break;
            case 'client-reviews':
                onNavigateToReviews();
                break;
            case 'performance-analytics':
                onNavigateToAnalytics();
                break;
            default:
                alert(`Placeholder action for ${actionType}`);
        }
    };

    return (
        <div className="pro-dashboard-container">
            <header className="pro-dashboard-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Roles
                </button>
                <h1>Professional Control Panel</h1>
            </header>

            <main className="pro-main-content">
                <div className="pro-features-grid">
                    {professionalOptions.map((item, index) => (
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
                .pro-dashboard-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                    box-sizing: border-box;
                }
                .pro-dashboard-header {
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
                .pro-dashboard-header h1 {
                    font-size: 2.8rem;
                    color: #FF69B4; 
                    text-align: center;
                    margin-top: 20px;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
                }

                .pro-main-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 20px;
                }
                
                .pro-features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }

                @media (max-width: 768px) {
                    .pro-dashboard-container {
                        padding: 15px;
                    }
                    .pro-features-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProfessionalDashboard;