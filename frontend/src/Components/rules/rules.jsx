import React from 'react';


// Sample rules data
const rules = [
"Each user gets 2 free rolls in a day.",
"1 roll will give you a random Premier League player from the 24-25 season.",
"There are 2 types of cards - Gold & Silver.",
"Gold Cards have a base price of 10 coins, Silver Cards have a base price of 4 coins.",
"You cannot trade cards with any fellow user, you can only sell them at their base value.",
"At any given point of time, a user can only have a max of 15 cards in their team.",
"All cards have an overall rating, average game rating (AGR) & appearances (APPS) in common.",
"Defenders will have a parameter called Tackles Won (TW), Goalkeepers will have saves (SV), attack-minded players will have (G/A) goals/assists, and CDMs will have Interceptions (INTC) as their differentiator.",
"There are 2 primary objectives - collect better cards & win battles against your friends.",
"There will be 2 leaderboards. 1 leaderboard for battle records/stats, 1 leaderboard for maximum overall rating accumulated. (The battle leaderboard will be released after a few weeks).",
"The stats from the last 2 seasons from domestic league competitions only.",
"Bot commands are as follows:"

];

const Rules = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Community Rules</h2>
      <ul style={styles.list}>
        {rules.map((rule, index) => (
          <li key={index} style={styles.listItem}>
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
    color: '#555',
  },
};

export default Rules;