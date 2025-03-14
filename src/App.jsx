// Importing necessary libraries and components
import React, { useState } from 'react'; // React and the useState hook for managing state
import { Route, Routes } from 'react-router-dom'; // React Router for navigation (not directly used here)
import Counter from './components/Counter'; // Import the Counter component
import { GlobalContext } from './globalContext/GlobalContext'; // Import the created Context

function App() {
  // Step 1: Define the global state and updater
  const [globalCount, setGlobalCount] = useState(0); // globalCount tracks the shared count, setGlobalCount updates it

  // Step 1.1: Define local state for dynamically adding counters
  const [counters, setCounters] = useState([]); // counters tracks an array of Counter IDs to render

  // Step 2: Function to add a new Counter component
  // Each Counter is assigned a unique ID based on its position in the counters array
  const addCounter = () => {
    setCounters([...counters, counters.length]); // Add a new Counter by pushing its index into the array
  };

  return (
    // Step 3: Wrap the app in the Context Provider
    // The Provider makes the global state (globalCount) and its updater (setGlobalCount) available to child components
    // examples : <GlobalContext.Provider value={{ globalCount, setGlobalCount, userName, setUserName, isLoggedIn, setIsLoggedIn }}>
    <GlobalContext.Provider value={[globalCount, setGlobalCount]}>
      <div id="App">
        {/* Step 4: Display the global count */}
        <div>Total count: {globalCount}</div>

        {/* Step 5: Add Counter Button */}
        {/* Clicking this button will dynamically add a new Counter component */}
        <button onClick={addCounter}>Add Counter</button>

        {/* Step 6: Render all Counter components */}
        {/* Each Counter is dynamically rendered based on the counters array */}
        <div className="counter-list">
          {counters.map((counterId) => (
            <Counter key={counterId} /> // The key is required for React to track each Counter component
          ))}
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App; // Export the App component as the default export
