import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

function App() {
    // Flag variable to toggle between components
    const [flag, setFlag] = useState(true); // true = ListofPlayers, false = IndianPlayers

    return (
        <div className="App">
            <header className="App-header">
                <h1>🏏 Cricket App</h1>
                <div className="toggle-container">
                    <button 
                        className={`toggle-btn ${flag ? 'active' : ''}`}
                        onClick={() => setFlag(true)}
                    >
                        📋 List of Players
                    </button>
                    <button 
                        className={`toggle-btn ${!flag ? 'active' : ''}`}
                        onClick={() => setFlag(false)}
                    >
                        🇮🇳 Indian Players
                    </button>
                </div>
            </header>

            <main className="App-main">
                {/* Simple if-else in flag variable */}
                {flag ? <ListofPlayers /> : <IndianPlayers />}
            </main>

            <footer className="App-footer">
                <p>ES6 Features: Map, Filter, Arrow Functions, Destructuring, Spread Operator</p>
            </footer>
        </div>
    );
}

export default App;