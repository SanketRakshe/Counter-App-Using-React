import { useState } from 'react';

function App() {
  // Initialize state for count
  const [count, setCount] = useState(0);

  // Handler for incrementing the count
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Handler for decrementing the count
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current count */}
      <h1>Current Count: {count}</h1>

      {/* Button to increment the count */}
      <button onClick={handleIncrement} style={buttonStyle}>
        Increment
      </button>

      {/* Button to decrement the count */}
      <button onClick={handleDecrement} style={buttonStyle}>
        Decrement
      </button>
    </div>
  );
}

// Simple button style for better UI
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default App;
