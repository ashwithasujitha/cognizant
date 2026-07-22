import React from 'react';
import FlightList from './FlightList';

function GuestView() {
    return (
        <div className="guest-view">
            <div className="view-header">
                <h2>🌐 Guest Mode</h2>
                <p className="view-subtitle">
                    Browse available flights. <strong>Login</strong> to book tickets!
                </p>
            </div>

            <div className="guest-message">
                <div className="message-icon">🔒</div>
                <div className="message-content">
                    <h3>You are viewing as Guest</h3>
                    <p>Please login to book tickets and access exclusive deals!</p>
                </div>
            </div>

            
            <FlightList isLoggedIn={false} />
        </div>
    );
}

export default GuestView;