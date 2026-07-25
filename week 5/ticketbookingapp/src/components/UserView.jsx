import React, { useState } from 'react';
import FlightList from './FlightList';

function UserView({ userName }) {
    const [bookingMessage, setBookingMessage] = useState('');

    return (
        <div className="user-view">
            <div className="view-header">
                <h2>👤 User Mode</h2>
                <p className="view-subtitle">
                    Welcome back, <strong>{userName}</strong>! You can book tickets now.
                </p>
            </div>

            {bookingMessage && (
                <div className="booking-success">
                    ✅ {bookingMessage}
                    <button 
                        className="btn-close"
                        onClick={() => setBookingMessage('')}
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Display flights with booking capability */}
            <FlightList 
                isLoggedIn={true} 
                userName={userName}
                onBooking={(flight) => {
                    setBookingMessage(`Successfully booked flight ${flight.id} (${flight.airline}) to ${flight.destination}!`);
                }}
            />
        </div>
    );
}

export default UserView;