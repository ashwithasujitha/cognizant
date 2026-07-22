import React from 'react';
import './App.css';
import EventHandlers from './component/EventHandler';
import CurrencyConvertor from './component/CurrencyConvertor';

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>🎯 React Event Examples</h1>
                <p>Learn how to handle events in React</p>
            </header>
            
            <main className="app-main">
               
                <section className="section">
                    <h2>📋 Event Handlers</h2>
                    <EventHandlers />
                </section>
                
                <section className="section">
                    <h2>💰 Currency Converter</h2>
                    <CurrencyConvertor />
                </section>
            </main>
            
            <footer className="app-footer">
                <p>© 2026 Event Examples App | React Event Handling</p>
            </footer>
        </div>
    );
}

export default App;