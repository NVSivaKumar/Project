import React from 'react';
import { FaChevronLeft, FaStar, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// Data structured from the provided screenshot
const professionals = [
    { id: 1, name: "Dr. Evelyn Reed", title: "Pediatrics (Medical)", experience: "8 years experience, specialized in infant care.", rating: 4.9, reviews: 150, schedule: "Mon-Fri: 10 AM - 5 PM", rate: "800/hour", service: "Pediatric Consultation" },
    { id: 2, name: "Dr. Alex Johnson", title: "General Practice (Medical)", experience: "Experienced primary care physician for all ages.", rating: 4.5, reviews: 90, schedule: "Mon-Sat: 9 AM - 7 PM", rate: "650/hour", service: "General Check-up" },
    { id: 3, name: "Mark Kinsley", title: "Civil Engineer (Engineering)", experience: "Expert in structural planning and blueprint design.", rating: 4.5, reviews: 90, schedule: "Sat-Sun: 9 AM - 6 PM", rate: "1,200/hour", service: "Structural Design" },
    { id: 4, name: "Sofia Lee", title: "Software Architect (Engineering)", experience: "Designs scalable systems using modern cloud architecture.", rating: 4.9, reviews: 250, schedule: "Mon-Fri: 9 AM - 5 PM", rate: "1,800/hour", service: "Architecture Review" },
    { id: 5, name: "Priya Sharma", title: "Digital Marketing (Marketing/ Sales)", experience: "Certified strategist for social media campaigns.", rating: 4.9, reviews: 210, schedule: "Mon-Sat: 11 AM - 7 PM", rate: "650/hour", service: "Marketing Strategy" },
    { id: 6, name: "Robert Green", title: "B2B Sales Consultant (Marketing/ Sales)", experience: "Specializes in closing high-value business contracts.", rating: 4.7, reviews: 180, schedule: "Mon-Fri: 8 AM - 4 PM", rate: "1,500/hour", service: "Sales Consultation" },
    // Lower row is hidden in the screenshot, adding placeholders for grid completeness
    { id: 7, name: "John Doe", title: "Driving Instructor (Driving/ Parking)", experience: "Certified driving instructor with 10+ years experience.", rating: 4.8, reviews: 120, schedule: "Mon-Sat: 9 AM - 5 PM", rate: "500/hour", service: "Driving Lesson" },
    { id: 8, name: "Chen Li", title: "Professional Valet (Driving/ Parking)", experience: "High-end valet service for events and private residences.", rating: 4.6, reviews: 80, schedule: "Daily: 2 PM - 10 PM", rate: "400/hour", service: "Valet Service" },
    { id: 9, name: "David Cross", title: "CNC Operator (Machine Operation)", experience: "Precision milling and turning expert.", rating: 4.8, reviews: 110, schedule: "Mon-Fri: 7 AM - 3 PM", rate: "950/hour", service: "CNC Machining" },
];


// Renamed from UserDashboard and receives onBookService and bookings
const BookingsPage = ({ onGoBack, onBookService, bookings }) => {

    const handleBookClick = (prof) => {
        // Use a default time for demonstration
        const bookingTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); 
        
        // Pass details to the central App function
        onBookService(prof.name, prof.service, bookingTime);
    };

    const isBooked = (profName) => {
        // Check if a booking already exists for this professional
        return bookings.some(booking => booking.professional === profName);
    };

    return (
        <div className="bookings-page-container">
            <header className="bookings-page-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Roles
                </button>
                <h1>HireSphere Professionals</h1>
            </header>

            <main className="bookings-main-content">
                <div className="professionals-grid">
                    {professionals.map((prof) => {
                        const booked = isBooked(prof.name);
                        return (
                            <div key={prof.id} className="professional-card">
                                {/* Profile Header */}
                                <div className="prof-header">
                                    <div className="prof-initials">{prof.name.split(' ').map(n => n[0]).join('')}</div>
                                    <div className="prof-info">
                                        <h2>{prof.name}</h2>
                                        <p className="prof-title">{prof.title}</p>
                                    </div>
                                </div>

                                {/* Main Description */}
                                <p className="prof-description">{prof.experience}</p>

                                {/* Stats Row */}
                                <div className="prof-stats">
                                    <div className="stat-item">
                                        <FaStar className="stat-icon star-icon" />
                                        <span>{prof.rating} ({prof.reviews} reviews)</span>
                                    </div>
                                    <div className="stat-item">
                                        <FaClock className="stat-icon clock-icon" />
                                        <span>{prof.schedule}</span>
                                    </div>
                                    <div className="stat-item">
                                        <FaMoneyBillWave className="stat-icon money-icon" />
                                        <span>{prof.rate}</span>
                                    </div>
                                </div>

                                {/* Booking Button */}
                                <button
                                    className={`book-button ${booked ? 'booked' : ''}`}
                                    onClick={() => !booked && handleBookClick(prof)}
                                    disabled={booked}
                                >
                                    {booked ? 'Booked ✅' : 'Book Now'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Styles to match the screenshot and dark theme */}
            <style jsx>{`
                .bookings-page-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                    box-sizing: border-box;
                }
                .bookings-page-header {
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
                .bookings-page-header h1 {
                    font-size: 2.8rem;
                    color: #00BFFF;
                    text-align: center;
                    margin-top: 20px;
                }
                .bookings-main-content {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 20px;
                }

                /* --- Grid and Card Styling matching the screenshot --- */
                .professionals-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 20px;
                }
                .professional-card {
                    background-color: #2c3440; /* Dark Card Background */
                    padding: 25px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                    border-top: 3px solid #00BFFF;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    transition: transform 0.2s;
                }
                .professional-card:hover {
                    transform: translateY(-3px);
                }

                /* --- Profile Header --- */
                .prof-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 10px;
                }
                .prof-initials {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #00BFFF;
                    color: #1b2631;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1.2rem;
                }
                .prof-info h2 {
                    font-size: 1.4rem;
                    margin: 0;
                    font-weight: 600;
                }
                .prof-title {
                    font-size: 0.9rem;
                    color: #b0c4de;
                    margin: 0;
                }

                /* --- Description and Stats --- */
                .prof-description {
                    color: #b0c4de;
                    font-size: 1rem;
                }
                .prof-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 10px 0;
                }
                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.95rem;
                    color: #b0c4de;
                }
                .stat-icon {
                    color: #00BFFF;
                    min-width: 18px;
                }
                .star-icon { color: #FFD700; } /* Gold star */
                .clock-icon { color: #55aaff; } /* Blue clock */
                .money-icon { color: #3CB371; } /* Green money */

                /* --- Booking Button --- */
                .book-button {
                    background-color: #00BFFF;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.2s, opacity 0.2s;
                    margin-top: 10px;
                    width: 100%;
                }
                .book-button:hover:not(:disabled) {
                    background-color: #0099CC;
                }
                .book-button.booked {
                    background-color: #3CB371; /* Green when booked */
                    cursor: default;
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
};

export default BookingsPage;