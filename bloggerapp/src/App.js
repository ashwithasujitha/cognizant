import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
    // State to track which view is active
    const [activeView, setActiveView] = useState('books'); // 'books', 'blogs', 'courses'
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUserName('John Doe');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName('');
    };

    // ============================================
    // METHOD 1: IF-ELSE (Outside JSX)
    // ============================================
    let content;
    if (activeView === 'books') {
        content = <BookDetails isLoggedIn={isLoggedIn} userName={userName} />;
    } else if (activeView === 'blogs') {
        content = <BlogDetails isLoggedIn={isLoggedIn} userName={userName} />;
    } else if (activeView === 'courses') {
        content = <CourseDetails isLoggedIn={isLoggedIn} userName={userName} />;
    } else {
        content = <div>Select a view</div>;
    }

    return (
        <div className="App">
            <header className="app-header">
                <h1>📝 Blogger App</h1>
                <p>Learn 7 ways of Conditional Rendering in React!</p>
            </header>

            {/* Navigation */}
            <nav className="nav-bar">
                <div className="nav-left">
                    <button 
                        className={`nav-btn ${activeView === 'books' ? 'active' : ''}`}
                        onClick={() => setActiveView('books')}
                    >
                        📚 Books
                    </button>
                    <button 
                        className={`nav-btn ${activeView === 'blogs' ? 'active' : ''}`}
                        onClick={() => setActiveView('blogs')}
                    >
                        ✍️ Blogs
                    </button>
                    <button 
                        className={`nav-btn ${activeView === 'courses' ? 'active' : ''}`}
                        onClick={() => setActiveView('courses')}
                    >
                        🎓 Courses
                    </button>
                </div>
                <div className="nav-right">
                    {isLoggedIn ? (
                        <div className="user-info">
                            <span>👋 {userName}</span>
                            <button className="btn-logout" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button className="btn-login" onClick={handleLogin}>
                            Login
                        </button>
                    )}
                </div>
            </nav>

            <main className="app-main">
                {/* Conditional Rendering - Method 1: IF-ELSE */}
                <div className="method-badge">Method 1: IF-ELSE</div>
                {content}
            </main>

            <footer className="app-footer">
                <p>© 2026 Blogger App | 7 Conditional Rendering Methods</p>
            </footer>
        </div>
    );
}

export default App;