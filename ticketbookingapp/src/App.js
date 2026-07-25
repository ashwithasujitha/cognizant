import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import GuestView from './components/GuestView';
import UserView from './components/UserView';

function App() {
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // Login handler
    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUserName(name);
    };

    // Logout handler
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName('');
    };

    return (
        <div className="App">
            {/* Navbar - shows different buttons based on login status */}
            <Navbar 
                isLoggedIn={isLoggedIn} 
                userName={userName}
                onLogin={handleLogin}
                onLogout={handleLogout}
            />
            
            <main className="app-main">
                {/* Conditional Rendering: Show different pages based on login status */}
                {isLoggedIn ? (
                    <UserView userName={userName} />
                ) : (
                    <GuestView />
                )}
            </main>

            <footer className="app-footer">
                <p>✈️ Ticket Booking App | React Conditional Rendering</p>
            </footer>
        </div>
    );
}

export default App;