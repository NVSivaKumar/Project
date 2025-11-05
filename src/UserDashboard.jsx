import React, { useState } from 'react';
import { FaSearch, FaStar, FaClock, FaRupeeSign, FaChevronLeft, FaBriefcaseMedical, FaHardHat, FaChartLine, FaCar, FaCog, FaShieldAlt, FaStore } from 'react-icons/fa'; 

// --- Sample Data ---
const categories = [
    { name: "Medical/Doctor", icon: <FaBriefcaseMedical />, bgColor: '#2C3440', iconColor: '#00BFFF' }, 
    { name: "Engineering", icon: <FaHardHat />, bgColor: '#2C3440', iconColor: '#3CB371' },     
    { name: "Marketing/ Sales", icon: <FaChartLine />, bgColor: '#2C3440', iconColor: '#FF6347' }, 
    { name: "Driving/Parking", icon: <FaCar />, bgColor: '#2C3440', iconColor: '#9370DB' },     
    { name: "Machine Operation", icon: <FaCog />, bgColor: '#2C3440', iconColor: '#00BCD4' },    
    { name: "Security", icon: <FaShieldAlt />, bgColor: '#2C3440', iconColor: '#8BC34A' },      
    { name: "Shops & Stores", icon: <FaStore />, bgColor: '#2C3440', iconColor: '#FFEB3B' },    
];

const professionals = [
    // Medical/Doctor
    { id: 1, name: "Dr. Evelyn Reed", specialty: "Pediatrics (Medical)", info: "8 years experience, specialized in infant care.", price: 800, rating: 4.8, reviews: 150, timings: "Mon-Fri: 10 AM - 5 PM", category: "Medical", image: "med1.jpg" },
    { id: 2, name: "Dr. Alex Johnson", specialty: "General Practice (Medical)", info: "Experienced primary care physician for all ages.", price: 650, rating: 4.5, reviews: 310, timings: "Mon-Sat: 9 AM - 7 PM", category: "Medical", image: "med2.jpg" },
    // Engineering
    { id: 3, name: "Mark Kinsley", specialty: "Civil Engineer (Engineering)", info: "Expert in structural planning and blueprint design.", price: 1200, rating: 4.5, reviews: 90, timings: "Sat-Sun: 9 AM - 6 PM", category: "Engineering", image: "eng1.jpg" },
    { id: 4, name: "Sofia Lee", specialty: "Software Architect (Engineering)", info: "Designs scalable systems using modern cloud architecture.", price: 1800, rating: 4.9, reviews: 250, timings: "Mon-Fri: 9 AM - 5 PM", category: "Engineering", image: "eng2.jpg" },
    // Marketing/ Sales
    { id: 5, name: "Priya Sharma", specialty: "Digital Marketing (Marketing/ Sales)", info: "Certified strategist for social media campaigns.", price: 650, rating: 4.9, reviews: 210, timings: "Mon-Sat: 11 AM - 7 PM", category: "Marketing", image: "mkt1.jpg" },
    { id: 6, name: "Robert Green", specialty: "B2B Sales Consultant (Marketing/ Sales)", info: "Specializes in closing high-value business contracts.", price: 1500, rating: 4.7, reviews: 180, timings: "Mon-Fri: 8 AM - 4 PM", category: "Marketing", image: "mkt2.jpg" },
    // Driving/Parking
    { id: 7, name: "John Doe", specialty: "Driving Instructor (Driving/Parking)", info: "Certified driving instructor with 10+ years experience.", price: 500, rating: 4.7, reviews: 120, timings: "Mon-Fri: 9 AM - 4 PM", category: "Driving", image: "div1.jpg" },
    { id: 8, name: "Chen Li", specialty: "Professional Valet (Driving/Parking)", info: "High-end valet service for events and private residences.", price: 450, rating: 4.9, reviews: 85, timings: "Daily: 2 PM - 12 AM", category: "Driving", image: "div2.jpg" },
    // Machine Operation
    { id: 9, name: "David Cross", specialty: "CNC Operator (Machine Operation)", info: "Precision milling and turning expert.", price: 950, rating: 4.4, reviews: 60, timings: "Mon-Fri: 6 AM - 2 PM", category: "Machine", image: "mo1.jpg" },
    { id: 10, name: "Marta Rodriguez", specialty: "Heavy Equipment (Machine Operation)", info: "Certified operator for excavators and loaders.", price: 1400, rating: 4.6, reviews: 75, timings: "Seasonal availability.", category: "Machine", image: "mo2.jpg" },
    // Security
    { id: 11, name: "Sam Wilson", specialty: "Armed Guard (Security)", info: "Licensed and trained in high-threat protection.", price: 700, rating: 4.9, reviews: 400, timings: "24/7 coverage available.", category: "Security", image: "sec1.jpg" },
    { id: 12, name: "Nina Patel", specialty: "Cyber Security Consultant (Security)", info: "Remote consultation for digital threat assessment.", price: 2000, rating: 4.7, reviews: 110, timings: "Flexible schedule.", category: "Security", image: "sec2.jpg" },
    // Shops & Stores
    { id: 13, name: "Maria Sanchez", specialty: "Retail Merchandiser (Shops & Stores)", info: "Designs attractive retail displays to boost sales.", price: 550, rating: 4.6, reviews: 70, timings: "Project based.", category: "Shops", image: "shop1.jpg" },
    { id: 14, name: "Tom Wu", specialty: "Warehouse Manager (Shops & Stores)", info: "Specialist in inventory and logistics optimization.", price: 1100, rating: 4.8, reviews: 130, timings: "Mon-Fri: 7 AM - 3 PM", category: "Shops", image: "shop2.jpg" },
    { id: 15, name: "Linda Kim", specialty: "E-commerce Specialist (Shops & Stores)", info: "Boosts online sales through targeted strategies.", price: 1300, rating: 4.9, reviews: 95, timings: "Mon-Fri: 10 AM - 6 PM", category: "Shops", image: "shop3.jpg" },

];

// --- Professional Card Component ---
const ProfessionalCard = ({ pro, onBook }) => {
    // Generates initials (e.g., D.E.R. -> DER)
    const initials = pro.name.split(' ').map(n => n[0]).join(''); 
    
    // Fixed bright blue for the avatar background/ring
    const avatarColor = '#00BFFF'; 
    
    return (
        <div className="pro-card">
            {/* Top Section: Avatar and Name/Specialty */}
            <div className="pro-header">
                {/* Updated Avatar Placeholder with Ring/Glow */}
                <div 
                    className="pro-avatar-placeholder" 
                    style={{ backgroundColor: avatarColor, borderColor: avatarColor }}
                >
                    {initials}
                </div>
                <div className="pro-titles">
                    <h3 className="pro-name">{pro.name}</h3>
                    <p className="pro-specialty">{pro.specialty}</p>
                </div>
            </div>
            
            {/* Main Details */}
            <p className="pro-info">{pro.info}</p>
            
            {/* Stats and Booking */}
            <div className="pro-footer">
                <div className="pro-stats">
                    <div className="stat-row">
                        <FaStar className="stat-icon star-icon" />
                        <span>{pro.rating} ({pro.reviews} reviews)</span>
                    </div>
                    <div className="stat-row">
                        <FaClock className="stat-icon clock-icon" />
                        <span>{pro.timings}</span>
                    </div>
                    <div className="stat-row">
                        <FaRupeeSign className="stat-icon rupee-icon" />
                        <span className="price-tag">{pro.price.toLocaleString('en-IN')}/hour</span>
                    </div>
                </div>
                
                <button 
                    className="book-btn"
                    onClick={() => onBook(pro)}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

// --- User Dashboard Main Component ---
const UserDashboard = ({ onGoBack, onBookProfessional }) => { 
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategoryName, setSelectedCategoryName] = useState(null);

    const getCategoryTag = (categoryName) => {
        return categoryName ? categoryName.split('/')[0].trim() : null;
    };

    const handleBookClick = (professional) => {
        // Simple confirmation before booking
        if (window.confirm(`Confirm booking for ${professional.name} at ₹${professional.price}/hour?`)) {
            onBookProfessional(professional); 
        }
    };

    const filteredProfessionals = professionals.filter(pro => {
        const categoryTag = getCategoryTag(selectedCategoryName);
        
        const matchesSearch = pro.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              pro.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              pro.info.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = categoryTag ? pro.category === categoryTag : true;
        
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="user-dashboard-container">
            <header className="user-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Roles
                </button>
                <h1>Find Your Professional</h1>
                
                {/* --- ATTRACTIVE SEARCH BAR WRAPPER --- */}
                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search professionals, services, or skills..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {/* ------------------------------------ */}
            </header>

            <main className="user-main-content">
                {/* Category Filter Section */}
                <h2 className="section-title">Browse by Category</h2>
                <div className="category-list-wrapper">
                    <div className="category-list">
                        {categories.map((cat, index) => (
                            <div 
                                key={index} 
                                className={`category-card ${selectedCategoryName === cat.name ? 'active' : ''}`}
                                onClick={() => setSelectedCategoryName(selectedCategoryName === cat.name ? null : cat.name)}
                                style={{backgroundColor: '#2c3440', border: selectedCategoryName === cat.name ? `2px solid ${cat.iconColor}` : '2px solid transparent'}}
                            >
                                <div className="category-icon-bg" style={{color: cat.iconColor}}>
                                    {React.cloneElement(cat.icon, { style: { color: cat.iconColor, fontSize: '24px' } })}
                                </div>
                                <span className="category-name">{getCategoryTag(cat.name)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Professional Listings */}
                <h2 className="section-title listing-title">
                    Professionals {selectedCategoryName && `in ${getCategoryTag(selectedCategoryName)}`}
                </h2>
                <div className="professional-listings">
                    {filteredProfessionals.length > 0 ? (
                        filteredProfessionals.map(pro => (
                            <ProfessionalCard 
                                key={pro.id} 
                                pro={pro} 
                                onBook={handleBookClick} 
                            />
                        ))
                    ) : (
                        <p className="no-results">No professionals found matching your current filters.</p>
                    )}
                </div>
            </main>

            {/* In-line Styles (Updated Avatar and minor tweaks for attractive gestures) */}
            <style jsx>{`
                .user-dashboard-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white; 
                    font-family: 'Segoe UI', sans-serif; 
                    padding-bottom: 50px; 
                }
                .user-header {
                    background-color: #1b2631; 
                    padding: 25px 40px 35px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
                    margin-bottom: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                }
                .back-button {
                    position: absolute;
                    left: 40px;
                    top: 25px;
                    background: none;
                    border: none;
                    color: #55aaff; 
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: color 0.2s, transform 0.2s;
                }
                .user-header h1 {
                    font-size: 2.8rem;
                    color: #00BFFF; 
                    margin-bottom: 25px;
                }
                
                /* --- SEARCH BAR STYLES --- */
                .search-bar-wrapper {
                    width: 100%;
                    max-width: 700px;
                    margin: 0 auto; 
                    position: relative; 
                }
                .search-bar {
                    width: 100%;
                    /* Elevated, glowing shadow on search bar */
                    box-shadow: 0 0 15px rgba(0, 191, 255, 0.1), 0 8px 25px rgba(0, 0, 0, 0.6); 
                    border-radius: 30px;
                    overflow: hidden;
                    background-color: #2c3440;
                    border: 2px solid #00BFFF; 
                    display: flex;
                    align-items: center;
                    padding: 0 15px;
                }
                .search-bar input {
                    flex-grow: 1;
                    padding: 15px 0; 
                    border: none;
                    font-size: 1.1rem;
                    color: #EEE;
                    background-color: transparent; 
                    outline: none;
                }
                .search-bar input:focus {
                    /* Add subtle glow on input focus */
                    box-shadow: 0 0 5px rgba(0, 191, 255, 0.5); 
                }
                .search-bar input::placeholder {
                    color: #999;
                }
                .search-icon {
                    color: #00BFFF;
                    font-size: 1.4rem; 
                    margin-right: 15px;
                }
                
                .user-main-content {
                    padding: 0 40px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .section-title {
                    font-size: 2rem;
                    color: #DDEEFF; 
                    text-align: left; 
                    margin-top: 40px;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #3c4452; 
                }

                /* Category List */
                .category-list-wrapper {
                    overflow-x: auto;
                    padding-bottom: 15px; 
                    margin-bottom: 40px;
                }
                .category-list {
                    display: flex;
                    flex-wrap: nowrap;
                    gap: 15px; 
                    justify-content: flex-start;
                }
                .category-card {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center; 
                    background-color: #2c3440 !important; 
                    padding: 10px 15px;
                    border-radius: 10px;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
                    cursor: pointer; 
                    transition: all 0.25s ease-out; /* Smooth transition for hover/active */
                }
                .category-card:hover {
                    background-color: #343c48 !important;
                    transform: translateY(-2px);
                }
                .category-card.active {
                    background-color: #3c4452 !important;
                    border: 2px solid var(--category-icon-color); /* Uses dynamic border */
                    box-shadow: 0 0 10px rgba(0, 191, 255, 0.3); /* Subtle blue active glow */
                }
                .category-icon-bg {
                    width: 30px;
                    height: 30px;
                    border-radius: 6px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 8px; 
                }
                .category-name {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #DDEEFF;
                }
                
                /* Professional Listings (Grid) */
                .professional-listings {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
                    gap: 30px; 
                }

                /* --- Individual Professional Card Styling --- */
                .pro-card {
                    background-color: #2c3440;
                    padding: 20px;
                    border-radius: 15px; 
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); 
                    transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); /* Enhanced transition */
                    border: 1px solid #3c4452;
                    display: flex;
                    flex-direction: column;
                }
                .pro-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 191, 255, 0.3); /* Hover lift and glow */
                }
                
                .pro-header {
                    display: flex;
                    align-items: center; 
                    margin-bottom: 15px;
                }
                /* CRITICAL: Avatar Placeholder Style */
                .pro-avatar-placeholder {
                    width: 50px; 
                    height: 50px;
                    border-radius: 50%;
                    background-color: #00BFFF; 
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.1rem; 
                    margin-right: 15px;
                    border: 3px solid #0d1217; 
                    box-shadow: 0 0 0 2px #00BFFF; /* Outer blue ring */
                    flex-shrink: 0;
                }
                
                .pro-titles {
                    text-align: left;
                }
                .pro-name {
                    font-size: 1.25rem; 
                    font-weight: 700; /* Bolded for hierarchy */
                    margin-bottom: 2px;
                    color: #DDEEFF; 
                }
                .pro-specialty {
                    font-size: 0.85rem;
                    color: #AAAAAA;
                    font-weight: 400;
                }

                .pro-info {
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                    color: #DDEEFF;
                    line-height: 1.4;
                }

                .pro-footer {
                    margin-top: auto; 
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #3c4452; 
                    padding-top: 15px;
                }
                
                /* Stats */
                .pro-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    font-size: 0.85rem;
                }
                .stat-row {
                    display: flex;
                    align-items: center;
                    color: #DDEEFF; 
                }
                
                .stat-icon {
                    margin-right: 8px;
                    font-size: 0.9rem;
                }
                .star-icon { color: #FFD700; }
                .rupee-icon { color: #8BC34A; }
                .clock-icon { color: #00BFFF; }

                .price-tag {
                    font-weight: 700;
                    color: #8BC34A;
                    font-size: 1rem; 
                }

                /* Book Button (Enhanced Visuals) */
                .book-btn {
                    background: linear-gradient(135deg, #00BFFF, #00A3FF); /* Subtle Gradient */
                    color: #1f3a4e; 
                    padding: 8px 15px; 
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 0.95rem;
                    box-shadow: 0 4px 15px rgba(0, 191, 255, 0.5); /* Blue glow on button */
                    transition: all 0.2s;
                }
                .book-btn:hover {
                    background: #55aaff;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(0, 191, 255, 0.7); /* Stronger lift glow */
                }
                .book-btn:active {
                    transform: translateY(2px);
                    box-shadow: 0 2px 5px rgba(0, 191, 255, 0.5); /* Pressed effect */
                }
                
                /* Responsive Adjustments */
                @media (max-width: 600px) {
                    .user-main-content {
                        padding: 0 15px;
                    }
                    .pro-footer {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                    }
                    .book-btn {
                        width: 100%;
                    }
                    .pro-header {
                        align-items: flex-start; 
                    }
                }
            `}</style>
        </div>
    );
};

export default UserDashboard;