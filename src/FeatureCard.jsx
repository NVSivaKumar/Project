import React from 'react';

const FeatureCard = ({ title, description, icon, iconColor, onClick }) => {
  // Ensure the card highlights when clicked, setting the border color dynamically
  const cardStyles = {
    '--card-icon-color': iconColor || '#00BFFF' 
  };

  return (
    <div 
      className="feature-card"
      onClick={onClick}
      style={cardStyles}
    >
      <div className="icon-wrapper" style={{ color: iconColor }}>
        {/* Clone the icon and apply the dynamic color and size */}
        {React.cloneElement(icon, { 
          style: { 
            color: iconColor, 
            width: '2.5rem', 
            height: '2.5rem' 
          }
        })}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      {/* Basic Styles (Put this in a central CSS file or keep as is) */}
      <style jsx>{`
        .feature-card {
          /* Inherit Dark Card Aesthetics */
          background-color: #2c3440; 
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start; /* Aligned to the top */
          cursor: pointer;
          border: 1px solid transparent;
          border-left: 5px solid transparent; /* Prepare for hover highlight */
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
          background-color: #343c48; 
          border-left: 5px solid var(--card-icon-color); /* Highlight border on hover/focus */
        }
        
        .icon-wrapper {
          margin-bottom: 15px;
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: white; 
        }
        .card-description {
          font-size: 0.95rem;
          color: #b0c4de;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default FeatureCard;