import React from 'react';
import { FaChevronLeft, FaCommentDots, FaStar, FaReply } from 'react-icons/fa';

const sampleReviews = [
    { id: 1, name: 'Client A', rating: 5, date: 'Oct 8, 2025', comment: 'Outstanding service! Very professional and solved my issue quickly.', status: 'New' },
    { id: 2, name: 'Client B', rating: 4, date: 'Sep 25, 2025', comment: 'Good consultation, though scheduling was a bit difficult.', status: 'Replied' },
];

const ClientReviewsPage = ({ onGoBack }) => {
    return (
        <div className="settings-container">
            <header className="settings-header">
                <button onClick={onGoBack} className="back-button">
                    <FaChevronLeft /> Back to Control Panel
                </button>
                <h1><FaCommentDots /> Client Reviews</h1>
            </header>

            <main className="settings-main-content">
                <section className="review-summary">
                    <h2>Overall Rating: 4.8 / 5.0</h2>
                    <p>Total Reviews: {sampleReviews.length}</p>
                </section>

                <div className="review-list">
                    {sampleReviews.map(review => (
                        <div key={review.id} className="review-item">
                            <div className="review-header">
                                <h3>{review.name}</h3>
                                <div className="rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} color={i < review.rating ? '#FFD700' : '#3c4452'} />
                                    ))}
                                </div>
                            </div>
                            <p className="review-comment">"{review.comment}"</p>
                            <div className="review-footer">
                                <span>{review.date}</span>
                                <button onClick={() => alert(`Replying to ${review.name}`)} className="reply-btn">
                                    <FaReply /> {review.status === 'New' ? 'Reply Now' : 'View Reply'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
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
                    color: #9370DB; /* Purple signature color */
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .settings-main-content {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .review-summary {
                    background-color: #2c3440;
                    padding: 20px;
                    border-radius: 12px;
                    text-align: center;
                    margin-bottom: 30px;
                }
                .review-summary h2 {
                    color: #FFD700;
                    font-size: 2.5rem;
                    margin-bottom: 5px;
                }
                .review-summary p {
                    color: #b0c4de;
                }
                .review-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .review-item {
                    background-color: #2c3440;
                    padding: 20px;
                    border-radius: 12px;
                    border-left: 5px solid #9370DB;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                }
                .review-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }
                .review-header h3 {
                    font-size: 1.2rem;
                    color: white;
                }
                .rating-stars svg {
                    color: #FFD700;
                    margin-left: 3px;
                }
                .review-comment {
                    font-style: italic;
                    color: #DDEEFF;
                    margin-bottom: 15px;
                }
                .review-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #AAAAAA;
                    font-size: 0.85rem;
                }
                .reply-btn {
                    background-color: #9370DB;
                    color: white;
                    padding: 8px 12px;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            `}</style>
        </div>
    );
};

export default ClientReviewsPage;