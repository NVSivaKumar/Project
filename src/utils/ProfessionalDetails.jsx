import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaClock, FaRupeeSign } from 'react-icons/fa';

const ProfessionalDetails = ({ professionals }) => {
    const { proId } = useParams();
    const navigate = useNavigate();

    // Find professional by ID
    const professional = professionals.find(p => p.id === parseInt(proId));

    if (!professional) {
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: '#fff', backgroundColor: '#1b2631', minHeight: '100vh' }}>
                <h2>Professional not found</h2>
                <button onClick={() => navigate(-1)} style={backButtonStyle}>Go Back</button>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px', backgroundColor: '#1b2631', color: '#fff', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
            <button onClick={() => navigate(-1)} style={backButtonStyle}>
                &larr; Back
            </button>

            <div style={containerStyle}>
                <div style={avatarStyle}>{professional.name.split(' ').map(n => n[0]).join('')}</div>

                <h1 style={{ marginBottom: '10px' }}>{professional.name}</h1>
                <h3 style={{ color: '#aaa', marginBottom: '20px' }}>{professional.specialty}</h3>
                <p style={{ lineHeight: 1.5, marginBottom: '20px' }}>{professional.info}</p>

                <div style={statsContainerStyle}>
                    <div style={statItemStyle}>
                        <FaStar style={{ marginRight: '5px', color: '#FFD700' }} /> {professional.rating} ({professional.reviews} reviews)
                    </div>
                    <div style={statItemStyle}>
                        <FaClock style={{ marginRight: '5px', color: '#00BFFF' }} /> {professional.timings}
                    </div>
                    <div style={statItemStyle}>
                        <FaRupeeSign style={{ marginRight: '5px', color: '#8BC34A' }} /> {professional.price}/hour
                    </div>
                </div>

                <button 
                    onClick={() => alert(`Booked ${professional.name} at ₹${professional.price}/hour`)}
                    style={bookButtonStyle}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

// --- Inline Styles ---
const backButtonStyle = {
    padding: '8px 15px',
    backgroundColor: '#00BFFF',
    color: '#1b2631',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    marginBottom: '30px'
};

const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#2c3440',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
    textAlign: 'center'
};

const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#00BFFF',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 700,
    margin: '0 auto 20px auto'
};

const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '25px',
    flexWrap: 'wrap',
    gap: '15px'
};

const statItemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#DDEEFF'
};

const bookButtonStyle = {
    padding: '12px 25px',
    background: 'linear-gradient(135deg, #00BFFF, #00A3FF)',
    color: '#1b2631',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(0, 191, 255, 0.5)',
    transition: 'all 0.2s'
};

export default ProfessionalDetails;
