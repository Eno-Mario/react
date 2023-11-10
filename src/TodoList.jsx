import React from 'react'
import { useState } from 'react'

import classes from "./Todolist.module.scss"

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
    
    function handleRemove(i) {
        setTodos(t => t.filter((el, index) => index != i))
    }
  return (
    <div className={classes.todo}>
        <ul>
            {todos.map((todo, index)=> <li key={index}>{todo}<button onClick={() => handleRemove(index)}>Remove</button></li>)}
        </ul>
        <form onSubmit={handleAdd}>
            <input name='newTodo' value={newTodo} type="text" onChange={handleInput}/>
            <button>Add Todo</button>
            <button type="reset" onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}
