import React from 'react';
import FlightCard from './FlightCard';

function FlightList({ isLoggedIn, userName, onBooking }) {
    // Flight data
    const flights = [
        {
            id: 'AI-101',
            airline: 'Air India',
            origin: 'Mumbai (BOM)',
            destination: 'Delhi (DEL)',
            departure: '10:30 AM',
            arrival: '12:45 PM',
            price: 5500,
            seats: 45,
            image: '✈️'
        },
        {
            id: 'IN-205',
            airline: 'IndiGo',
            origin: 'Bangalore (BLR)',
            destination: 'Hyderabad (HYD)',
            departure: '08:00 AM',
            arrival: '09:30 AM',
            price: 3200,
            seats: 120,
            image: '✈️'
        },
        {
            id: 'SG-309',
            airline: 'SpiceJet',
            origin: 'Chennai (MAA)',
            destination: 'Kolkata (CCU)',
            departure: '02:15 PM',
            arrival: '04:45 PM',
            price: 4800,
            seats: 78,
            image: '✈️'
        },
        {
            id: 'AK-456',
            airline: 'AirAsia',
            origin: 'Delhi (DEL)',
            destination: 'Goa (GOI)',
            departure: '06:00 AM',
            arrival: '08:30 AM',
            price: 6800,
            seats: 32,
            image: '✈️'
        },
        {
            id: 'VK-789',
            airline: 'Vistara',
            origin: 'Mumbai (BOM)',
            destination: 'Bangalore (BLR)',
            departure: '07:45 PM',
            arrival: '09:55 PM',
            price: 7200,
            seats: 56,
            image: '✈️'
        }
    ];

    return (
        <div className="flight-list">
            <h3 className="flight-list-title">
                🛫 Available Flights ({flights.length})
            </h3>

            <div className="flight-grid">
                {flights.map((flight) => (
                    <FlightCard
                        key={flight.id}
                        flight={flight}
                        isLoggedIn={isLoggedIn}
                        userName={userName}
                        onBooking={onBooking}
                    />
                ))}
            </div>
        </div>
    );
}

export default FlightList;