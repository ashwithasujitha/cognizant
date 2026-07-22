import React, { useState } from 'react';

function CourseDetails({ isLoggedIn, userName }) {
    const [activeCourse, setActiveCourse] = useState(null);
    const [showCompleted, setShowCompleted] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const courses = [
        { 
            id: 1, 
            title: 'React Mastery', 
            instructor: 'Jane Doe', 
            level: 'Intermediate',
            duration: '12 weeks',
            lessons: 45,
            price: 99.99,
            completed: false,
            rating: 4.8
        },
        { 
            id: 2, 
            title: 'JavaScript Advanced', 
            instructor: 'John Smith', 
            level: 'Advanced',
            duration: '10 weeks',
            lessons: 38,
            price: 89.99,
            completed: true,
            rating: 4.7
        },
        { 
            id: 3, 
            title: 'Python for Beginners', 
            instructor: 'Alice Johnson', 
            level: 'Beginner',
            duration: '8 weeks',
            lessons: 30,
            price: 49.99,
            completed: false,
            rating: 4.9
        },
        { 
            id: 4, 
            title: 'HTML & CSS Pro', 
            instructor: 'Bob Williams', 
            level: 'Beginner',
            duration: '6 weeks',
            lessons: 25,
            price: 39.99,
            completed: true,
            rating: 4.5
        },
        { 
            id: 5, 
            title: 'Full Stack Development', 
            instructor: 'Sara Lee', 
            level: 'Intermediate',
            duration: '16 weeks',
            lessons: 60,
            price: 149.99,
            completed: false,
            rating: 4.9
        }
    ];

    // Filter courses based on search and completion status
    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCompletion = showCompleted ? course.completed : true;
        return matchesSearch && matchesCompletion;
    });

    // ============================================
    // METHOD 7: IIFE (Immediately Invoked Function Expression)
    // ============================================
    const courseStats = (() => {
        const total = courses.length;
        const completed = courses.filter(c => c.completed).length;
        const inProgress = total - completed;
        return { total, completed, inProgress };
    })();

    return (
        <div className="component-container course-details">
            <h2>🎓 Course Details</h2>

            {/* Method 7: IIFE for stats display */}
            <div className="course-stats">
                <span className="stat-item">📚 Total: {courseStats.total}</span>
                <span className="stat-item">✅ Completed: {courseStats.completed}</span>
                <span className="stat-item">🔄 In Progress: {courseStats.inProgress}</span>
            </div>

            <div className="component-controls">
                <input
                    type="text"
                    placeholder="🔍 Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={showCompleted}
                        onChange={() => setShowCompleted(!showCompleted)}
                    />
                    Show completed courses
                </label>
            </div>

            {/* ============================================
                METHOD 3: LOGICAL && (Short-circuit)
                ============================================ */}
            {searchTerm && (
                <div className="search-result-info">
                    🔍 Showing results for "{searchTerm}"
                    <span className="result-count">({filteredCourses.length} courses found)</span>
                </div>
            )}

            <div className="course-grid">
                {filteredCourses.map((course) => (
                    <div 
                        key={course.id} 
                        className={`course-card ${course.completed ? 'completed' : ''}`}
                        onClick={() => setActiveCourse(course.id)}
                    >
                        <h4>{course.title}</h4>
                        <p>👨‍🏫 {course.instructor}</p>
                        <div className="course-meta">
                            <span className={`level-badge ${course.level.toLowerCase()}`}>
                                {course.level}
                            </span>
                            <span>⏱️ {course.duration}</span>
                            <span>📖 {course.lessons} lessons</span>
                        </div>
                        <div className="course-footer">
                            <span className="price">💰 ${course.price}</span>
                            <span className="rating">⭐ {course.rating}</span>
                        </div>

                        {/* ============================================
                            METHOD 4: CONDITIONAL CLASS
                            ============================================ */}
                        <div className={`course-status ${course.completed ? 'completed' : 'in-progress'}`}>
                            {course.completed ? '✅ Completed' : '🔄 In Progress'}
                        </div>

                        {/* ============================================
                            METHOD 2: TERNARY OPERATOR
                            ============================================ */}
                        {activeCourse === course.id ? (
                            <div className="course-details-expanded">
                                <p>🎯 {course.lessons} lessons across {course.duration}</p>
                                <p>💵 {course.price === 0 ? 'Free' : `$${course.price}`}</p>
                                <button className="btn-enroll">
                                    {course.completed ? '📋 Review' : '📖 Enroll Now'}
                                </button>
                            </div>
                        ) : (
                            <p className="click-hint">👆 Click for details</p>
                        )}
                    </div>
                ))}
            </div>

            {/* ============================================
                METHOD 1: IF-ELSE (using helper function)
                ============================================ */}
            <CourseRecommendation 
                courses={filteredCourses} 
                isLoggedIn={isLoggedIn} 
                userName={userName}
            />
        </div>
    );
}

// ============================================
// METHOD 1: IF-ELSE (in helper component)
// ============================================
function CourseRecommendation({ courses, isLoggedIn, userName }) {
    if (courses.length === 0) {
        return <div className="empty-state">No courses found matching your criteria</div>;
    }

    if (!isLoggedIn) {
        return (
            <div className="recommendation guest">
                🔒 Login to get personalized course recommendations
            </div>
        );
    }

    if (courses.length > 3) {
        return (
            <div className="recommendation">
                🎉 {userName}, we recommend starting with "{courses[0].title}"!
            </div>
        );
    }

    return (
        <div className="recommendation">
            📚 {userName}, you've found {courses.length} great courses!
        </div>
    );
}

export default CourseDetails;