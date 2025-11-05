import React from 'react';
import { FaChevronLeft, FaCreditCard, FaWallet, FaHistory, FaPlus } from 'react-icons/fa';

const BillingPaymentsPage = ({ onGoBack }) => {
    
    const paymentMethods = [
        { id: 1, type: 'Visa', lastFour: '4242', expiry: '12/26', primary: true },
        { id: 2, type: 'GooglePay', lastFour: 'N/A', expiry: 'N/A', primary: false },
    ];
    
    const transactions = [
        { id: 101, date: 'Oct 5, 2025', description: 'Service: Dr. Evelyn Reed', amount: 800, status: 'Completed' },
        { id: 102, date: 'Sep 28, 2025', description: 'Service: Mark Kinsley', amount: 1200, status: 'Completed' },
    ];

    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Profile
                </button>
                <h1><FaCreditCard /> Billing & Payments</h1>
            </header>

            <main className="settings-main-content">
                <section className="section-block">
                    <h2><FaWallet /> Payment Methods</h2>
                    <button onClick={() => alert('Adding New Payment Method...')} className="add-method-button">
                        <FaPlus /> Add New Card
                    </button>
                    <div className="card-list">
                        {paymentMethods.map(method => (
                            <div key={method.id} className="payment-card">
                                <FaCreditCard className="card-icon" />
                                <div className="card-details">
                                    <h3>{method.type} ending in {method.lastFour}</h3>
                                    <p>Expires: {method.expiry} {method.primary && <span className="primary-tag">Primary</span>}</p>
                                </div>
                                <button onClick={() => alert(`Editing ${method.type}`)} className="edit-btn">Edit</button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section-block">
                    <h2><FaHistory /> Transaction History</h2>
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(tx => (
                                <tr key={tx.id}>
                                    <td>{tx.date}</td>
                                    <td>{tx.description}</td>
                                    <td className="amount-col">₹{tx.amount.toLocaleString('en-IN')}</td>
                                    <td className="status-col">{tx.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                    color: #3CB371; /* Green signature color */
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
                .section-block {
                    margin-bottom: 40px;
                    background-color: #2c3440;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                }
                .section-block h2 {
                    font-size: 2rem;
                    color: white;
                    border-bottom: 2px solid #3c4452;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .add-method-button {
                    background-color: #55aaff;
                    color: #1b2631;
                    font-weight: 700;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                }

                /* Payment Card List */
                .card-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .payment-card {
                    background-color: #1b2631;
                    padding: 15px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-left: 4px solid #3CB371;
                }
                .card-icon {
                    font-size: 2rem;
                    color: #FFD700;
                    margin-right: 15px;
                }
                .card-details h3 {
                    font-size: 1.1rem;
                    margin: 0;
                }
                .card-details p {
                    font-size: 0.9rem;
                    color: #AAAAAA;
                    margin: 2px 0 0;
                }
                .primary-tag {
                    background-color: #FF69B4;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: white;
                    margin-left: 10px;
                }
                .edit-btn {
                    background: none;
                    border: 1px solid #55aaff;
                    color: #55aaff;
                    padding: 8px 15px;
                    border-radius: 6px;
                    font-size: 0.9rem;
                    cursor: pointer;
                }

                /* Transaction History Table */
                .history-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.95rem;
                }
                .history-table th, .history-table td {
                    text-align: left;
                    padding: 12px;
                    border-bottom: 1px solid #3c4452;
                }
                .history-table th {
                    color: #55aaff;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .amount-col {
                    color: #3CB371;
                    font-weight: 700;
                }
                .status-col {
                    color: #FFD700;
                }

                /* Mobile Adjustments */
                @media (max-width: 600px) {
                    .history-table {
                        display: block;
                        overflow-x: auto;
                        white-space: nowrap;
                    }
                    .payment-card {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default BillingPaymentsPage;