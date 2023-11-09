import React from 'react'
import { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState(['mario']);

    function handleAdd(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        const newTodo = formData.get("newTodo")
        
        if (newTodo) setTodos(t => t = [...t, newTodo])
    }
    
  return (
    <div>
        <ul>
            {todos.map((todo, index)=> <li key={index}>{todo}</li>)}
        </ul>
        <form onSubmit={handleAdd}>
            <input name='newTodo' type="text" />
            <button>Add Todo</button>
        </form>
    </div>
  )
}
