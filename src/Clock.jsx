import { useEffect, useState } from "react"

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect( () => {
        const intervalID = setInterval(()=> setDate(new Date()),1000)

        return () => clearInterval(intervalID)    
    }, [])

    return <h2>{date.toLocaleTimeString()}</h2>
}

export default Clock