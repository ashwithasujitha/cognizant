import React, { useState } from 'react';

function FlightCard({ flight, isLoggedIn, userName, onBooking }) {
    const [isBooked, setIsBooked] = useState(false);

    const handleBook = () => {
        if (isLoggedIn) {
            setIsBooked(true);
            onBooking(flight);
        }
    };

    return (
        <div className={`flight-card ${isBooked ? 'booked' : ''}`}>
            <div className="flight-header">
                <div className="flight-airline">
                    <span className="flight-icon">{flight.image}</span>
                    <span className="flight-name">{flight.airline}</span>
                </div>
                <span className="flight-id">{flight.id}</span>
            </div>

            <div className="flight-route">
                <div className="flight-origin">
                    <span className="time">{flight.departure}</span>
                    <span className="city">{flight.origin}</span>
                </div>

                <div className="flight-arrow">→</div>

                <div className="flight-destination">
                    <span className="time">{flight.arrival}</span>
                    <span className="city">{flight.destination}</span>
                </div>
            </div>

            <div className="flight-details">
                <div className="flight-seats">
                    🪑 {flight.seats} seats available
                </div>
                <div className="flight-price">
                    ₹{flight.price.toLocaleString()}
                </div>
            </div>

            <div className="flight-actions">
                {isLoggedIn ? (
                    
                    isBooked ? (
                        <button className="btn btn-booked" disabled>
                            ✅ Booked!
                        </button>
                    ) : (
                        <button className="btn btn-book" onClick={handleBook}>
                            📅 Book Now
                        </button>
                    )
                ) : (
                   
                    <button className="btn btn-disabled" disabled>
                        🔒 Login to Book
                    </button>
                )}
            </div>

            {isBooked && (
                <div className="booking-confirmation">
                    🎉 Booked by {userName}!
                </div>
            )}
        </div>
    );
}

export default FlightCard;