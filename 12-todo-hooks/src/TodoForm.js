import React from 'react'
import manageForm from './handleInputForm';

function TodoForm(props) {
    const [value, handleChange, reset] = manageForm('');
    return ( 
        <div>
            <form onSubmit={ e => { 
                e.preventDefault(); 
                props.addTodo(value); 
                reset() ;
            }} >
                <label>Task Name : </label>
                <input value={value} onChange={handleChange} />
            </form>
        </div>
     );
}

export default TodoForm;