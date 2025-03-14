import React, { useState }  from 'react';



function Counter() {

    const [count, setCount] = useState(0); // Define a state variable 'count' 
    
    return (
        <div id="Counter">
            <div id="Count">0</div>
            <button id='increase'>+1</button>
            <button id='decrease'>-1</button>
        </div>
    );
}

export default Counter;