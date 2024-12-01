import React from 'react';
// cd BeingSarangi

// Sample rules data
const rules = [
  "Respect everyone in the community.",
  "No spamming or self-promotion.",
  "Use appropriate language.",
  "Report any suspicious activities to the moderators.",
  "Follow the topic-specific guidelines.",
  "No hate speech or bullying.",
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
