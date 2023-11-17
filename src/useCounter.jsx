import { useEffect, useRef, useState } from "react";

export default function useCounter({initialCounter = 0 , increment = 1 , decrement = 1}) {
    const [counter, setCounter] = useState(initialCounter)
    const direction = useRef(null)

    useEffect(()=> {
        let prevdirection = direction.current
        if (counter > initialCounter) {
            direction.current = "up"
        } else if (counter < initialCounter) {
            direction.current = "down"
        } 

        if (prevdirection != direction.current) console.log(direction.current)
    }, [counter])

    function handleCounterIncrement () {
        setCounter((c) => c + increment) 

    }

    function handleCounterDecrement () {
        setCounter((c) => c - decrement) 

    }

    function handleCounterReset () {
        setCounter(initialCounter) 
    }

    return{
        counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}