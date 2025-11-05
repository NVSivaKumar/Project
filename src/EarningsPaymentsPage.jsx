import React from 'react';
import { FaChevronLeft, FaDollarSign, FaCreditCard, FaReceipt, FaLandmark } from 'react-icons/fa';

const EarningsPaymentsPage = ({ onGoBack }) => {
    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Control Panel
                </button>
                <h1><FaDollarSign /> Earnings & Payments</h1>
            </header>

            <main className="settings-main-content">
                <section className="stat-summary">
                    <div className="stat-card">
                        <h3>Total Earned</h3>
                        <p>₹1,25,000</p>
                    </div>
                    <div className="stat-card">
                        <h3>Pending Payout</h3>
                        <p>₹15,000</p>
                    </div>
                </section>
                
                <section className="section-block">
                    <h2><FaLandmark /> Withdrawal Methods</h2>
                    <p>Current bank account: **ICICI Bank (A/C ending XXXX)**</p>
                    <button onClick={() => alert('Opening Withdrawal Settings')} className="action-button primary-btn">
                        Manage Payouts
                    </button>
                </section>

                <section className="section-block">
                    <h2><FaReceipt /> Payment History (Invoices)</h2>
                    <p>Detailed records of all services rendered and payments received.</p>
                    <button onClick={() => alert('Viewing Full Invoice History')} className="action-button secondary-btn">
                        View Invoices
                    </button>
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
                    color: #00BFFF; /* Blue signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .stat-summary {
                    display: flex;
                    justify-content: space-around;
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .stat-card {
                    background-color: #2c3440;
                    padding: 25px;
                    border-radius: 12px;
                    flex: 1;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }
                .stat-card h3 {
                    color: #AAAAAA;
                    font-size: 1.1rem;
                    margin-bottom: 5px;
                }
                .stat-card p {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: #3CB371; /* Green for money */
                }
                .section-block {
                    margin-bottom: 30px;
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
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .section-block p {
                    color: #b0c4de;
                    margin-bottom: 20px;
                }
                .action-button {
                    background-color: #55aaff;
                    color: #1b2631;
                    font-weight: 700;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                }
                .primary-btn { background-color: #00BFFF; color: white; }
                .secondary-btn { background-color: #FFD700; color: #1b2631; }
            `}</style>
        </div>
    );
};

export default EarningsPaymentsPage;