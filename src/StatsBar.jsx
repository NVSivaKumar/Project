import React from 'react';
// We'll use simple spans for icons here to avoid needing more imports, 
// or you can use FaIcons from react-icons if preferred.

const statsData = [
    { 
        value: "3", 
        label: "easy steps", 
        icon: '⭐', 
        bgColor: '#fff8e1' // Pale Yellow Background
    },
    { 
        value: "25 lakh+", 
        label: "candidates", 
        icon: '👥', 
        bgColor: '#e8eaf6' // Pale Blue Background
    },
    { 
        value: "250+", 
        label: "districts", 
        icon: '📍', 
        bgColor: '#fbe9e7' // Pale Orange Background
    },
    { 
        value: "15,000+", 
        label: "recruiters", 
        icon: '💼', 
        bgColor: '#e3f2fd' // Pale Blue Background
    },
];

const StatsBar = () => {
  return (
    <div className="stats-bar-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bgColor }}>
            <span className="stat-icon" role="img" aria-label={stat.label}>{stat.icon}</span>
          </div>
          <div className="stat-text">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}

      {/* Basic Styles (For simplicity, included here rather than a separate file) */}
      <style jsx>{`
        .stats-bar-container {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            width: 100%;
            max-width: 1200px;
            background: rgba(255, 255, 255, 0.9); /* Slight white background for contrast */
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
            z-index: 10; /* Ensure it stays above the page background */
        }
        .stat-card {
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: white;
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }
        .stat-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        .stat-icon-wrapper {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .stat-icon {
            font-size: 1.2rem;
        }
        .stat-value {
            font-size: 1.1rem;
            font-weight: 700;
            color: #333;
        }
        .stat-label {
            font-size: 0.8rem;
            color: #777;
            white-space: nowrap;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
            .stats-bar-container {
                position: relative; /* Revert to relative flow on smaller screens */
                flex-wrap: wrap;
                gap: 15px;
                padding: 15px;
                max-width: 100%;
                left: 0;
                transform: none;
                justify-content: space-around;
            }
            .stat-card {
                flex-basis: 45%; /* Two cards per row */
                justify-content: flex-start;
                padding: 12px;
            }
        }
      `}</style>
    </div>
  );
};

export default StatsBar;