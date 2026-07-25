import React from 'react';

const ListofPlayers = () => {
    // Array with 11 players and their scores
    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 92 },
        { name: "MS Dhoni", score: 65 },
        { name: "Sachin Tendulkar", score: 100 },
        { name: "Rahul Dravid", score: 45 },
        { name: "Jasprit Bumrah", score: 30 },
        { name: "Ravindra Jadeja", score: 72 },
        { name: "Hardik Pandya", score: 88 },
        { name: "KL Rahul", score: 55 },
        { name: "Shubman Gill", score: 78 },
        { name: "Mohammed Shami", score: 25 }
    ];

    // Filter players with scores below 70 using arrow function
    const below70Players = players.filter(player => player.score < 70);
    const above70Players = players.filter(player => player.score >= 70);

    return (
        <div style={styles.container}>
            <h2>🏏 All Players</h2>
            <ul style={styles.list}>
                {players.map((player, index) => (
                    <li key={index} style={styles.listItem}>
                        {player.name}: <strong>{player.score}</strong>
                        {player.score >= 70 ? ' ✅' : ' ❌'}
                    </li>
                ))}
            </ul>

            <h3>📊 Players with Score Below 70</h3>
            <ul style={styles.list}>
                {below70Players.map((player, index) => (
                    <li key={index} style={{...styles.listItem, ...styles.below70}}>
                        {player.name}: <strong>{player.score}</strong>
                    </li>
                ))}
            </ul>

            <h3>📊 Players with Score 70 or Above</h3>
            <ul style={styles.list}>
                {above70Players.map((player, index) => (
                    <li key={index} style={{...styles.listItem, ...styles.above70}}>
                        {player.name}: <strong>{player.score}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Styles
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    list: {
        listStyle: 'none',
        padding: 0
    },
    listItem: {
        padding: '8px 12px',
        margin: '5px 0',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    below70: {
        backgroundColor: '#ffe6e6',
        borderLeft: '4px solid #ff4444'
    },
    above70: {
        backgroundColor: '#e6ffe6',
        borderLeft: '4px solid #44aa44'
    }
};

export default ListofPlayers;