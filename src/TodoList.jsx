import React from 'react'
import { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState(['mario']);
    const [newTodo, setNewtodo] = useState('')

    function handleAdd(event) {
        event.preventDefault();
        
        if (newTodo) setTodos(t => t = [...t, newTodo])
        setNewtodo('')
    }

    function handleInput(event) {
        setNewtodo(event.target.value)
    }

    function handleReset() {
        setTodos([])
    }
    
  return (
    <div>
        <ul>
            {todos.map((todo, index)=> <li key={index}>{todo}</li>)}
        </ul>
        <form onSubmit={handleAdd}>
            <input name='newTodo' value={newTodo} type="text" onChange={handleInput}/>
            <button>Add Todo</button>
            <button type="reset" onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}
