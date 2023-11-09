import Header from "./Header"
import Loader from './Loader'
import Error from './Error'
import { useEffect, useReducer, useState } from "react";

const initialState = { 
  questions : [], 
  status : 'loading'
}

function reducer(state, action) { 
  switch(action.type) { 
    case 'dataReady' : 
      return { 
        questions : action.payload, status : 'ready'
      }
    case 'error' : 
      return { 
        ...state, status : 'error'
      }
    default : 
      throw new Error('Case unknown'); 
  }
}

export default function App() { 
  const [{questions, status}, dispatch] = useReducer(reducer, initialState); 
  const [currQ, setCurrQ] = useState(2);

  function incrementCurrQ () { 
    setCurrQ( currQ + 1); 
  }
  function DecrementCurrQ () { 
    if(currQ !== 0){
      setCurrQ( currQ - 1); 
    }else{
      return; 
    }
  }

  useEffect(function () { 
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data =>{
      dispatch({type : 'dataReady', payload : data}); 
      console.log(data); 
    })
    .catch(err => dispatch({type : 'error', payload : err})); 
  }, [])

  return <div className="app">
    <Header />

    <div>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
    </div>

    {questions.map(m => {
      if(questions[currQ] === m){
        return (
          <div>
            <h2 key={currQ} >{m.question}</h2>
            {m.options.map(o => { 
              return(
                <li key={Math.random()}>{o}</li>
              )
            })}
          </div>
          )
      }
      <span>
      <button onClick={DecrementCurrQ}>Prev Question</button>
      <button onClick={incrementCurrQ}>Next Question</button>
    </span>
    })}

  </div>
}