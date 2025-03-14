// Importing necessary libraries and components
import React, { useState } from 'react'; // React and the useState hook for managing state
import { Route, Routes } from 'react-router-dom'; // React Router for navigation (not directly used here)
import Counter from './components/Counter'; // Import the Counter component
import { GlobalContext } from './globalContext/GlobalContext'; // Import the created Context

function App() {
  // Step 1: Define the global state and updater
  const [globalCount, setGlobalCount] = useState(0); // globalCount tracks the shared count, setGlobalCount updates it

  return (
    // Step 2: Wrap the app in the Context Provider
    // The Provider makes the global state (globalCount) and its updater (setGlobalCount) available to child components
    // examples : <GlobalContext.Provider value={{ globalCount, setGlobalCount, userName, setUserName, isLoggedIn, setIsLoggedIn }}> 
    <GlobalContext.Provider value={[globalCount, setGlobalCount]}>
      <div id="App">
        {/* Step 3: Display the global count */}
        <div>Total count: {globalCount}</div>

        {/* Step 4: Render the Counter component */}
        <Counter />
      </div>
    </GlobalContext.Provider>
  );
}

export default App; // Export the App component as the default export
