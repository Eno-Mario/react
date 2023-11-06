import { useState } from "react";

function Counter({initialCounter = 0 , increment = 1}) {
    const [counter, setCounter] = useState(initialCounter)

    function handleCounterIncrement () {
        setCounter((c) => c + increment) 
        /* when calling the "setter" function , 
        the parameter should be a function that returns the new value based on the previous value. 
        This is because React can perform asynchronous operations for state updates, 
        and by using a function to calculate the new value, 
        you can ensure that the current value is correctly captured and used for the update. */
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}

export default Counter