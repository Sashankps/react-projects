import './App.css';
import { useReducer } from 'react';

function reducer(state, action) { 
console.log(state, action); 
  const {type} = action; 
  switch (type) {
    case 'increment': {
      return state+1; 
    }
    case 'decrement': {
      return state-1; 
    }
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0 )
  return (
    <div className="App">
        <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default App;
