import React from 'react'
import TodoItem from './TodoItem';

function TodoList (props) { 
    return ( 
    <ul>
        {props.todos.map(m => {
           return( 
            <TodoItem key={m.id} todo={m} toggleTodo ={props.toggleTodo} removeTodo={props.removeTodo} editTodo={props.editTodo} />
           )
        })}
    </ul>
    )
}

export default TodoList;    