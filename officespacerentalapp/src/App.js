import React from 'react';
import OfficeList from './OfficeList';
import './App.css';

function App() {
    // ✅ 1. Create element to display heading
    const appTitle = "🏢 Office Space Rental";
    const appSubtitle = "Find your perfect workspace";

    return (
        <div className="App">
            {/* ✅ Display the heading */}
            <header className="app-header">
                <h1>{appTitle}</h1>
                <p>{appSubtitle}</p>
                
                {/* ✅ Image Attribute - Office space image */}
                <img 
                    src="https://images.unsplash.com/photo-1497366850852-1c0c37b1ef24?w=800&h=400&fit=crop"
                    alt="Office Space"
                    className="banner-image"
                />
            </header>

            {/* ✅ Render the OfficeList component */}
            <main className="app-main">
                <OfficeList />
            </main>

            <footer className="app-footer">
                <p>© 2026 Office Space Rental App | React JSX Demo</p>
            </footer>
        </div>
    );
}

export default App;