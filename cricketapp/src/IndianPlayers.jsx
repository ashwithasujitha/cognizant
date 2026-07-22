import React from 'react';

const IndianPlayers = () => {
    // Array declarations
    const T20players = [
        { name: "Virat Kohli", role: "Batsman" },
        { name: "Rohit Sharma", role: "Batsman" },
        { name: "Suryakumar Yadav", role: "Batsman" },
        { name: "Hardik Pandya", role: "All-Rounder" },
        { name: "Jasprit Bumrah", role: "Bowler" },
        { name: "Ravindra Jadeja", role: "All-Rounder" }
    ];

    const RanjiTrophyPlayers = [
        { name: "Cheteshwar Pujara", role: "Batsman" },
        { name: "Ajinkya Rahane", role: "Batsman" },
        { name: "Ravichandran Ashwin", role: "All-Rounder" },
        { name: "Wriddhiman Saha", role: "Wicketkeeper" },
        { name: "Umesh Yadav", role: "Bowler" },
        { name: "Jaydev Unadkat", role: "Bowler" }
    ];

    // Destructuring: Odd and Even team players
    // Using spread operator and destructuring to split players
    const allPlayers = [...T20players, ...RanjiTrophyPlayers];
    
    // Split into odd and even indexed players using destructuring
    // Using filter to separate odd and even positions (0-indexed)
    const oddTeamPlayers = allPlayers.filter((_, index) => index % 2 === 0);
    const evenTeamPlayers = allPlayers.filter((_, index) => index % 2 === 1);

    // Merge two arrays using spread operator (ES6 merge feature)
    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div style={styles.container}>
            <h2>🇮🇳 Indian Cricket Team</h2>

            {/* Destructuring: Odd Team Players */}
            <div style={styles.section}>
                <h3 style={{color: '#2e7d32'}}>🔢 Odd Team Players</h3>
                <ul style={styles.list}>
                    {oddTeamPlayers.map((player, index) => (
                        <li key={index} style={styles.listItem}>
                            {player.name} - <span style={{color: '#555'}}>{player.role}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Destructuring: Even Team Players */}
            <div style={styles.section}>
                <h3 style={{color: '#c62828'}}>🔢 Even Team Players</h3>
                <ul style={styles.list}>
                    {evenTeamPlayers.map((player, index) => (
                        <li key={index} style={styles.listItem}>
                            {player.name} - <span style={{color: '#555'}}>{player.role}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Merge feature: Display merged arrays */}
            <div style={styles.mergeSection}>
                <h3>🔄 Merged Players (T20 + Ranji Trophy)</h3>
                <p style={styles.count}>Total Players: {mergedPlayers.length}</p>
                <ul style={styles.list}>
                    {mergedPlayers.map((player, index) => (
                        <li key={index} style={styles.listItem}>
                            {player.name} - <span style={{color: '#555'}}>{player.role}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Styles
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#fff8e1',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif'
    },
    section: {
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '15px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    },
    mergeSection: {
        backgroundColor: '#e8f5e9',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '15px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    },
    list: {
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '8px'
    },
    listItem: {
        padding: '8px 14px',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        fontSize: '14px'
    },
    count: {
        fontWeight: 'bold',
        color: '#2e7d32'
    }
};

export default IndianPlayers;