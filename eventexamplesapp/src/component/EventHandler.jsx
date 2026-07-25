import React, { useState } from 'react';

function EventHandlers() {
    const [count, setCount] = useState(0);
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome to React Event Handling!');
    const [clickMessage, setClickMessage] = useState('');

    
    const increment = () => {
        setCount(count + 1);
    };

  
    const sayHello = () => {
        alert("👋 Hello! Welcome to React Event Handling!");
    };

   
    const handleIncreamentWithHello = () => {
        increment();
        sayHello();
    };

    const sayWelcome = (message) => {
        setWelcomeMessage(`${message} to Events!`);
        alert(` ${message} to React Events!`);
    };

    const handlePress = (e) => {
        console.log('Synthetic Event:', e);
        console.log('Event Type:', e.type);
        console.log('Target:', e.target);

        setClickMessage(' I was clicked!');
        alert(' I was clicked!');
    };

    return (
        <div className="event-handlers">
            <div className="event-section">
                <h3> Counter with Multiple Methods</h3>

                <div className="counter-container">
                    <p className="counter-display">
                        Count: <strong>{count}</strong>
                    </p>

                    <div className="button-group">
                      
                        <button
                            className="btn btn-danger"
                            onClick={() => setCount(count - 1)}
                        >
                            ➖ Decrement
                        </button>

                        
                        <button
                            className="btn btn-success"
                            onClick={handleIncreamentWithHello}
                        >
                            ➕ Increment + Say Hello
                        </button>
                    </div>

                    <p className="hint">
                        💡 This button calls <strong>two</strong> methods:
                        increment() + sayHello()
                    </p>
                </div>
            </div>

            <div className="event-section">
                <h3>👋 Say Welcome with Argument</h3>

                <div className="welcome-container">
                    <button
                        className="btn btn-primary"
                        onClick={() => sayWelcome('Welcome')}
                    >
                        👋 Say Welcome
                    </button>

                    {welcomeMessage && (
                        <p className="welcome-message">
                            {welcomeMessage}
                        </p>
                    )}

                    <p className="hint">
                        💡 This button passes <strong>"welcome"</strong> as an argument to the function
                    </p>
                </div>
            </div>

            <div className="event-section">
                <h3>🖱️ Synthetic Event - OnPress</h3>

                <div className="press-container">
                    <button
                        className="btn btn-warning"
                        onClick={handlePress}
                    >
                        📌 Press Me
                    </button>

                    {clickMessage && (
                        <p className="press-message">
                            {clickMessage}
                        </p>
                    )}

                    <p className="hint">
                        💡 React uses <strong>Synthetic Events</strong> for cross-browser compatibility
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EventHandlers;