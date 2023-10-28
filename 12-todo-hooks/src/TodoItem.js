import React from 'react'
import ToggleItem from './toggleItem';
import ManageForm from './handleInputForm';

function TodoItem ({todo, toggleTodo, removeTodo, editTodo}) { 
    const[isEditing, toggle] = ToggleItem(false); 
    const[name, handleChange, reset] = ManageForm(todo.name) 

    return (
        <div> 
            {isEditing 
            ?<div>
                <form onSubmit={e => {
                    e.preventDefault(); 
                    editTodo(todo.id, name); 
                    reset(); 
                    toggle(); 
                }} >
                    <label>New Name : </label>
                    <input  value={name} onChange={handleChange} />
                </form>
            </div>
            
             
             :<div>
                    <div>
                        <li>
                            <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.complete}  />
                            {todo.name} 
                            <button onClick={toggle}>Edit</button>
                            <button onClick={() => removeTodo(todo.id)}>Delete</button>
                        </li>
                   </div>
                </div>
            }
        </div>
    )
}

export default TodoItem ; 