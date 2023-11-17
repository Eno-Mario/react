import CounterDisplay from "./CounterDisplay";
import useCounter from "./useCounter";

function Counter({initialCounter = 0 , increment = 1 , decrement = 1}) {
    const { counter, onIncrement, onDecrement, onReset} = useCounter({initialCounter:initialCounter, increment:increment, decrement:decrement})

    return (
        <div>
            <CounterDisplay count={counter}/>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Counter