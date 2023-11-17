import { useState } from "react";

function initialiseData() {
    return {
        username: '',
        password: '',
        save: false
    }
}

export default function UseLogin({func}) {
    const [data, setData] = useState(initialiseData())

    function handleInput (event) {
        const value = event.target.value;
        const name = event.target.name;
        const checked = event.target.checked;
        const type = event.target.type;

        setData((data)=> {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleLogin(event) {
        event.preventDefault() // in this way we prevent the default behavior of the form element

        const loginData = JSON.stringify(data);
        func(loginData)
    }

    function handleReset() {
        setData(initialiseData())
    }

    return {
        data,
        onInput: handleInput,
        onLogin: handleLogin,
        onReset: handleReset
    }
}