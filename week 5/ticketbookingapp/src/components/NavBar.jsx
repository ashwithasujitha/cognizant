import React, { useState } from 'react';

function NavBar({ isLoggedIn, userName, onLogin, onLogout }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [name, setName] = useState('');

    const handleLoginClick = () => {
        if (name.trim()) {
            onLogin(name);
            setName('');
            setShowLoginModal(false);
        } else {
            alert('Please enter your name');
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <span className="brand-icon">✈️</span>
                <span className="brand-name">FlyHigh</span>
            </div>

            <div className="nav-user">
                {isLoggedIn ? (
                    // ✅ Logged In View
                    <div className="user-info">
                        <span className="user-greeting">👋 Welcome, {userName}!</span>
                        <button className="btn btn-logout" onClick={onLogout}>
                            🚪 Logout
                        </button>
                    </div>
                ) : (
                    // ✅ Guest View
                    <button className="btn btn-login" onClick={() => setShowLoginModal(true)}>
                        🔑 Login
                    </button>
                )}
            </div>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h3>🔐 Login</h3>
                        <p>Enter your name to continue</p>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleLoginClick()}
                            className="modal-input"
                        />
                        <div className="modal-buttons">
                            <button className="btn btn-cancel" onClick={() => setShowLoginModal(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-login" onClick={handleLoginClick}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;