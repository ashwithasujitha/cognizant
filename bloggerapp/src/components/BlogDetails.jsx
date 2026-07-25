import React, { useState } from 'react';

function BlogDetails({ isLoggedIn, userName }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list'

    const blogs = [
        { 
            id: 1, 
            title: 'React Hooks Explained', 
            author: 'Sarah Dev', 
            category: 'React', 
            likes: 245,
            comments: 67,
            date: '2026-07-20'
        },
        { 
            id: 2, 
            title: 'Mastering JavaScript Closures', 
            author: 'John Code', 
            category: 'JavaScript', 
            likes: 189,
            comments: 43,
            date: '2026-07-18'
        },
        { 
            id: 3, 
            title: 'CSS Grid vs Flexbox', 
            author: 'Amy Design', 
            category: 'CSS', 
            likes: 312,
            comments: 89,
            date: '2026-07-15'
        },
        { 
            id: 4, 
            title: 'Python Data Science Tips', 
            author: 'Mike Data', 
            category: 'Python', 
            likes: 156,
            comments: 34,
            date: '2026-07-12'
        },
        { 
            id: 5, 
            title: 'AWS Cloud Computing Basics', 
            author: 'Cloud Guru', 
            category: 'Cloud', 
            likes: 278,
            comments: 72,
            date: '2026-07-10'
        }
    ];

    const categories = ['all', ...new Set(blogs.map(b => b.category))];

    const filteredBlogs = selectedCategory === 'all' 
        ? blogs 
        : blogs.filter(b => b.category === selectedCategory);

    // ============================================
    // METHOD 6: ELEMENT VARIABLES
    // ============================================
    let welcomeMessage;
    if (isLoggedIn) {
        welcomeMessage = (
            <div className="welcome-message logged-in">
                👋 Welcome back, {userName}! You can like and comment on blogs.
            </div>
        );
    } else {
        welcomeMessage = (
            <div className="welcome-message logged-out">
                🔒 Login to like and comment on blogs.
            </div>
        );
    }

    return (
        <div className="component-container blog-details">
            <h2>✍️ Blog Details</h2>

            {/* Method 6: Element Variables */}
            {welcomeMessage}

            <div className="component-controls">
                <div className="category-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat === 'all' ? '📋 All' : cat}
                        </button>
                    ))}
                </div>
                <div className="view-toggle">
                    <button 
                        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        🔲 Grid
                    </button>
                    <button 
                        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                        📋 List
                    </button>
                </div>
            </div>

            {/* ============================================
                METHOD 6: ELEMENT VARIABLES (continued)
                ============================================ */}
            {filteredBlogs.length === 0 ? (
                <div className="empty-state">No blogs in this category</div>
            ) : (
                <div className={`blog-grid ${viewMode}`}>
                    {filteredBlogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className={`blog-card ${selectedBlog === blog.id ? 'selected' : ''}`}
                            onClick={() => setSelectedBlog(blog.id)}
                        >
                            <h4>{blog.title}</h4>
                            <p>✍️ By: {blog.author}</p>
                            <div className="blog-meta">
                                <span>📂 {blog.category}</span>
                                <span>❤️ {blog.likes}</span>
                                <span>💬 {blog.comments}</span>
                            </div>
                            <p className="blog-date">📅 {blog.date}</p>
                            
                            {/* ============================================
                                METHOD 7: IIFE (Immediately Invoked Function Expression)
                                ============================================ */}
                            {(() => {
                                if (selectedBlog === blog.id) {
                                    return <span className="selected-badge">✅ Reading</span>;
                                } else if (blog.likes > 200) {
                                    return <span className="popular-badge">🔥 Popular</span>;
                                } else {
                                    return <span className="select-hint">Click to read</span>;
                                }
                            })()}
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Blog Details */}
            {selectedBlog && (
                <div className="selected-blog-details">
                    <h4>📖 Reading: {blogs.find(b => b.id === selectedBlog)?.title}</h4>
                    <p>By {blogs.find(b => b.id === selectedBlog)?.author}</p>
                    <p>Category: {blogs.find(b => b.id === selectedBlog)?.category}</p>
                    
                    {/* ============================================
                        METHOD 2: TERNARY OPERATOR (Nested)
                        ============================================ */}
                    <div className="action-buttons">
                        {isLoggedIn ? (
                            <>
                                <button className="btn-like">❤️ Like</button>
                                <button className="btn-comment">💬 Comment</button>
                            </>
                        ) : (
                            <button className="btn-login-prompt">🔒 Login to interact</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;