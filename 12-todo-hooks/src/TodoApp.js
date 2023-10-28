import {  Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function TodoApp() { 
    const sampleTodos = [
        { id: 1, name: "Buy groceries", complete: true },
        { id: 2, name: "Read a book", complete: false },
        { id: 3, name: "Take a walk", complete: true },
        { id: 4, name: "Write code", complete: false },
        { id: 5, name: "Call a friend", complete: true },
    ];

    const [todos, setTodos] = useState(
        JSON.parse(window.localStorage.getItem("todos")) || []
      ); 

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    

    const addTodo = newTodoText => {
        setTodos([...todos, {id : 6, name : newTodoText, complete : false}])
    }
    const toggleTodo = (id) => { 
        const updatedTodos = todos.map(m => 
            m.id === id ? {...m, complete: !m.complete} : m
        )
        setTodos(updatedTodos); 
    }

    const removeTodo = (id) => { 
        const updatedTodos = todos.filter(t => t.id !== id) ; 
        setTodos(updatedTodos); 
    }

    const editTodo = (id, name) => { 
        const updatedTodos = todos.map(m => m.id === id ? {...m, name : name} : m)
        setTodos(updatedTodos); 
        console.log(updatedTodos); 
    }




    return ( 
    <div >
        <Toolbar>
            <Typography color="inherit">Todos with Hooks</Typography>
        </Toolbar>
        <TodoForm addTodo = {addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo}  removeTodo={removeTodo} />
    </div>
    )
}   

export default TodoApp; 

//TodoApp 
//    -TodoForm 
//    -TodoList 
//       - TodoItem