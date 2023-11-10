import { useEffect, useState } from "react"

import classes from "./Clock.module.scss"

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect( () => {
        const intervalID = setInterval(()=> setDate(new Date()),1000)

        return () => clearInterval(intervalID)    
    }, [])

    return <h2 className={classes.clock} >{date.toLocaleTimeString()}</h2>
}

export default Clock