// Importing necessary libraries and the created Context
import React, { useState, useContext } from 'react'; // React, useState for local state, useContext to access context
import { GlobalContext } from '../globalContext/GlobalContext'; // Import the created context
import '../css/Counter.css'; // Import CSS for styling

function Counter() {
  // Step 1: Define a local state for the counter
  const [count, setCount] = useState(0); // count tracks the local counter value, setCount updates it

  // Step 2: Access the global state and updater from the Context
  const [globalCount, setGlobalCount] = useContext(GlobalContext);

  // Step 3: Increment function
  const increment = (amount) => {
    // Update both the local counter
    setCount(count + amount);

    // And the global counter
    setGlobalCount(globalCount + amount);
  };

  // Step 4: Decrement function
  const decrement = (amount) => {
    // Update both the local counter
    setCount(count - amount);

    // And the global counter
    setGlobalCount(globalCount - amount);
  };

  return (
    // Step 5: Render the counter and buttons
    <div id="Counter">
      <div>
        {/* Display the local counter */}
        <div id="Count">{count}</div>

        {/* Increment button updates both local and global counters */}
        <button id="increase" onClick={() => increment(1)}>+1</button>

        {/* Decrement button updates both local and global counters */}
        <button id="decrease" onClick={() => decrement(1)}>-1</button>
      </div>
    </div>
  );
}

export default Counter; // Export the Counter component
