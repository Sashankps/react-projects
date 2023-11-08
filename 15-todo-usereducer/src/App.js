import { useReducer } from 'react';
import './App.css';

const initTodos = [{
  id:1, 
  name : "test1", 
  completed : true
}, 
{
  id : 2, 
  name : "test2", 
  completed : false
}
]

const reducer = (state, action) => { 
}


function App() {
  const [todos, dispatch] = useReducer(reducer, initTodos); 
  
  const handleComplete = (todo) => { 
  dispatch({type : 'complete', id : todo.id}); 
}

  return (
    <div className="App">
      {todos.map(m => {
        return(
          <div>
          <input type="checkbox" value="m.completed" onChange={handleComplete(m)} />
          <h2>{m.name}</h2>
        </div>
        )
      })}
    </div>
  );
}

export default App;
