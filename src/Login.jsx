import React from 'react'
import { useState } from 'react'

function initialiseData() {
    return {
        username: '',
        password: '',
        save: false
    }
}

export default function Login({func}) {
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



  return (
    <form onSubmit={handleLogin}>
        <input name="username" type="text" value={data.username} onChange={handleInput} />
        <input name="password" type="password" value={data.password} onChange={handleInput} />
        <label htmlFor="save">Remember me!</label>
        <input name="save" type="checkbox" checked={data.save} onChange={handleInput} />
        <button disabled={!data.username || !data.password}>Login</button>
        <button type='button' onClick={handleReset}>Reset</button>
    </form>
  )
}
