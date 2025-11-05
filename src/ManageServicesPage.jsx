import React, { useState } from 'react';
import { FaChevronLeft, FaPlus, FaPencilAlt, FaTrashAlt, FaClipboardList, FaRupeeSign } from 'react-icons/fa';

const initialServices = [
    { id: 1, name: "Consultation (30 min)", price: 500, duration: "30 min", description: "Initial assessment and advice." },
    { id: 2, name: "Full Service Session (1 hr)", price: 1500, duration: "1 hr", description: "In-depth work session based on specialty." },
    { id: 3, name: "Emergency Callout", price: 3500, duration: "2 hr", description: "Priority service for urgent issues." },
];

const ManageServicesPage = ({ onGoBack }) => {
    const [services, setServices] = useState(initialServices);

    const handleAddService = () => {
        // Placeholder for opening a form to add a new service
        alert("Opening Form to Add New Service...");
        // Example of adding a mock service
        const newId = services.length + 1;
        setServices([...services, { 
            id: newId, 
            name: `New Service ${newId}`, 
            price: 750, 
            duration: "45 min", 
            description: "A newly created service placeholder."
        }]);
    };

    const handleEditService = (serviceId) => {
        alert(`Editing service ID: ${serviceId}`);
    };

    const handleDeleteService = (serviceId) => {
        if (window.confirm(`Are you sure you want to delete service ID: ${serviceId}?`)) {
            setServices(services.filter(s => s.id !== serviceId));
        }
    };

    return (
        <div className="manage-services-container">
            <header className="services-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Control Panel
                </button>
                <h1><FaClipboardList /> Manage Services</h1>
            </header>

            <main className="services-main-content">
                <div className="top-controls">
                    <button onClick={handleAddService} className="add-service-button">
                        <FaPlus /> Add New Service
                    </button>
                </div>

                <h2>Current Service Offerings ({services.length})</h2>
                
                <div className="service-list">
                    {services.map(service => (
                        <div key={service.id} className="service-item">
                            <div className="service-details">
                                <h3>{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-meta">
                                    <span><FaRupeeSign /> **{service.price.toLocaleString('en-IN')}**</span>
                                    <span>|</span>
                                    <span>Duration: {service.duration}</span>
                                </div>
                            </div>
                            <div className="service-actions">
                                <button onClick={() => handleEditService(service.id)} className="action-btn edit-btn">
                                    <FaPencilAlt /> Edit
                                </button>
                                <button onClick={() => handleDeleteService(service.id)} className="action-btn delete-btn">
                                    <FaTrashAlt /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    {services.length === 0 && (
                        <p className="no-services">No services currently listed. Click "Add New Service" to begin.</p>
                    )}
                </div>
            </main>

            <style jsx>{`
                .manage-services-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                    box-sizing: border-box;
                }
                .services-header {
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
                .services-header h1 {
                    font-size: 2.8rem;
                    color: #FF69B4; /* Pink signature color */
                    text-align: center;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
                }

                .services-main-content {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .top-controls {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 30px;
                }
                .add-service-button {
                    background-color: #3CB371; /* Green for add */
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                }
                
                .services-main-content h2 {
                    font-size: 2rem;
                    color: white;
                    margin-top: 20px;
                    margin-bottom: 25px;
                    text-align: left;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #FF69B4;
                }

                /* Service List Styling */
                .service-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .service-item {
                    background-color: #2c3440;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-left: 5px solid #FF69B4; /* Pink accent */
                }
                .service-details {
                    flex-grow: 1;
                }
                .service-details h3 {
                    font-size: 1.4rem;
                    margin: 0 0 5px;
                    color: white;
                }
                .service-description {
                    font-size: 0.95rem;
                    color: #b0c4de;
                    margin-bottom: 10px;
                }
                .service-meta span {
                    font-size: 0.9rem;
                    color: #AAAAAA;
                }
                .service-meta span:first-child {
                    color: #FFD700; /* Gold for price */
                    font-weight: 600;
                }

                .service-actions {
                    display: flex;
                    gap: 10px;
                    flex-shrink: 0;
                }
                .action-btn {
                    background: none;
                    border: 1px solid #3c4452;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 6px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: background-color 0.2s, border-color 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .edit-btn {
                    color: #00BFFF;
                }
                .edit-btn:hover {
                    background-color: rgba(0, 191, 255, 0.1);
                    border-color: #00BFFF;
                }
                .delete-btn {
                    color: #FF4500;
                }
                .delete-btn:hover {
                    background-color: rgba(255, 69, 0, 0.1);
                    border-color: #FF4500;
                }
                .no-services {
                    color: #b0c4de;
                    font-style: italic;
                    text-align: center;
                    padding: 30px;
                    background-color: #2c3440;
                    border-radius: 12px;
                }

                /* Mobile Adjustments */
                @media (max-width: 600px) {
                    .service-item {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .service-details {
                        margin-bottom: 15px;
                    }
                    .service-actions {
                        width: 100%;
                        justify-content: space-around;
                    }
                    .action-btn {
                        flex-grow: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default ManageServicesPage;