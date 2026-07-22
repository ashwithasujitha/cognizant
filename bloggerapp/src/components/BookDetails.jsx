import React, { useState } from 'react';

function BookDetails({ isLoggedIn, userName }) {
    const [showAllBooks, setShowAllBooks] = useState(true);
    const [selectedBook, setSelectedBook] = useState(null);
    const [sortBy, setSortBy] = useState('title'); // 'title', 'author', 'year'

    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, rating: 4.5 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, rating: 4.8 },
        { id: 3, title: '1984', author: 'George Orwell', year: 1949, rating: 4.7 },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, rating: 4.6 },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, rating: 4.3 },
    ];

    // Sort books
    const sortedBooks = [...books].sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'author') return a.author.localeCompare(b.author);
        if (sortBy === 'year') return a.year - b.year;
        return 0;
    });

    const displayBooks = showAllBooks ? sortedBooks : sortedBooks.slice(0, 3);

    // ============================================
    // METHOD 2: TERNARY OPERATOR (Inline)
    // ============================================
    const totalBooks = books.length;

    return (
        <div className="component-container book-details">
            <h2>📚 Book Details</h2>
            
            <div className="component-controls">
                <button 
                    className="control-btn"
                    onClick={() => setShowAllBooks(!showAllBooks)}
                >
                    {showAllBooks ? 'Show Top 3' : 'Show All'} ({totalBooks})
                </button>
                <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                >
                    <option value="title">Sort by Title</option>
                    <option value="author">Sort by Author</option>
                    <option value="year">Sort by Year</option>
                </select>
            </div>

            <div className="book-grid">
                {displayBooks.map((book) => (
                    <div 
                        key={book.id} 
                        className={`book-card ${selectedBook === book.id ? 'selected' : ''}`}
                        onClick={() => setSelectedBook(book.id)}
                    >
                        <h4>{book.title}</h4>
                        <p>✍️ {book.author}</p>
                        <p>📅 {book.year}</p>
                        <p>⭐ {book.rating}</p>
                        
                        {/* ============================================
                            METHOD 2: TERNARY OPERATOR
                            ============================================ */}
                        {selectedBook === book.id ? (
                            <span className="selected-badge">✅ Selected</span>
                        ) : (
                            <span className="select-hint">Click to select</span>
                        )}
                    </div>
                ))}
            </div>

            {/* ============================================
                METHOD 3: LOGICAL && (Short-circuit)
                ============================================ */}
            {selectedBook && (
                <div className="selected-book-info">
                    <h4>📖 Selected Book</h4>
                    <p>
                        {books.find(b => b.id === selectedBook)?.title} by {' '}
                        {books.find(b => b.id === selectedBook)?.author}
                    </p>
                    {/* ============================================
                        METHOD 4: CONDITIONAL CLASS
                        ============================================ */}
                    <div className={`login-status ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
                        {isLoggedIn ? (
                            <span>✅ Logged in as {userName}</span>
                        ) : (
                            <span>🔒 Login to see more details</span>
                        )}
                    </div>
                </div>
            )}

            {/* ============================================
                METHOD 5: SWITCH CASE (using helper function)
                ============================================ */}
            <BookStatusIndicator books={books} />
        </div>
    );
}

// ============================================
// METHOD 5: SWITCH CASE
// ============================================
function BookStatusIndicator({ books }) {
    const getStatus = (count) => {
        switch (true) {
            case count === 0:
                return <div className="status empty">📭 No books available</div>;
            case count < 3:
                return <div className="status low">📚 Only {count} books</div>;
            case count < 5:
                return <div className="status medium">📚 {count} books available</div>;
            default:
                return <div className="status high">📚 {count} books - Great collection!</div>;
        }
    };

    return getStatus(books.length);
}

export default BookDetails;