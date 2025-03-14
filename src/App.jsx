import React, { useState }  from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from './components/counter';
import { GlobalContext } from "./globalContext/GlobalContext";

function App() {

  const [globalCount, setGlobalCount] = useState(0); // Define a state variable 'count' 


  return (
    <GlobalContext.Provider value={globalCount}>
      <div id="App">
        <Counter />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
