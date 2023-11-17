import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "./App";

function Clock() {
    const [date, setDate] = useState(new Date());
    const language = useContext(LanguageContext);


    useEffect( () => {
        const intervalID = setInterval(()=> setDate(new Date()),1000)

        return () => clearInterval(intervalID)    
    }, [])

    const getCurrentTimeMessage = () => {
        return language === 'english' ? 'Current time:' : 'Ora attuale:';
    };

    return (
        <>
            <h1>{getCurrentTimeMessage()}</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </>
    )
}

export default Clock