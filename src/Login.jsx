import React from 'react'
import UseLogin from './useLogin'

export default function Login({func}) {
    const {data, onInput, onLogin, onReset} = UseLogin({func: func})

  return (
    <form onSubmit={onLogin}>
        <input name="username" type="text" value={data.username} onChange={onInput} />
        <input name="password" type="password" value={data.password} onChange={onInput} />
        <label htmlFor="save">Remember me!</label>
        <input name="save" type="checkbox" checked={data.save} onChange={onInput} />
        <button disabled={!data.username || !data.password}>Login</button>
        <button type='button' onClick={onReset}>Reset</button>
    </form>
  )
}
