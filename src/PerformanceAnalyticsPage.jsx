import React from 'react';
import { FaChevronLeft, FaChartLine, FaArrowUp, FaUsers, FaCheckCircle } from 'react-icons/fa';

const PerformanceAnalyticsPage = ({ onGoBack }) => {
    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Control Panel
                </button>
                <h1><FaChartLine /> Performance Analytics</h1>
            </header>

            <main className="settings-main-content">
                <section className="kpi-grid">
                    <div className="kpi-card">
                        <FaCheckCircle className="kpi-icon booking-icon" />
                        <h3>Bookings (30 Days)</h3>
                        <p className="kpi-value">42</p>
                        <span className="trend positive"><FaArrowUp /> 8% vs Last Month</span>
                    </div>
                    <div className="kpi-card">
                        <FaUsers className="kpi-icon client-icon" />
                        <h3>New Clients</h3>
                        <p className="kpi-value">15</p>
                        <span className="trend positive"><FaArrowUp /> 25% vs Last Month</span>
                    </div>
                    <div className="kpi-card">
                        <FaChartLine className="kpi-icon revenue-icon" />
                        <h3>Revenue (30 Days)</h3>
                        <p className="kpi-value">₹45,500</p>
                        <span className="trend positive"><FaArrowUp /> 12% vs Last Month</span>
                    </div>
                </section>
                
                <section className="section-block">
                    <h2>Engagement and Trend Data</h2>
                    <p>Detailed charts showing hourly and daily peak booking times (Placeholder Chart).</p>
                    <div className="placeholder-chart">
                        {/* Placeholder for an actual chart component */}
                        Chart visualization here.
                    </div>
                </section>
            </main>

            <style jsx>{`
                .settings-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at center, #1b2631 0%, #0d1217 100%); 
                    color: white;
                    font-family: system-ui, sans-serif;
                    padding: 40px;
                }
                .settings-header {
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
                }
                .settings-header h1 {
                    font-size: 2.8rem;
                    color: #FF8C00; /* Orange signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                /* KPI Grid */
                .kpi-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .kpi-card {
                    background-color: #2c3440;
                    padding: 25px;
                    border-radius: 12px;
                    text-align: left;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                    border-left: 5px solid #FF8C00;
                }
                .kpi-icon {
                    font-size: 2rem;
                    margin-bottom: 10px;
                }
                .booking-icon { color: #3CB371; }
                .client-icon { color: #00BFFF; }
                .revenue-icon { color: #FFD700; }
                .kpi-card h3 {
                    color: #AAAAAA;
                    font-size: 1.1rem;
                    margin-bottom: 5px;
                }
                .kpi-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: white;
                }
                .trend {
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: 10px;
                }
                .positive { color: #3CB371; }
                .section-block {
                    background-color: #2c3440;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                }
                .section-block h2 {
                    font-size: 1.8rem;
                    color: white;
                    border-bottom: 2px solid #3c4452;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                .placeholder-chart {
                    height: 300px;
                    background-color: #1b2631;
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #AAAAAA;
                }
            `}</style>
        </div>
    );
};

export default PerformanceAnalyticsPage;