import Header from "./Header"
import Loader from './Loader'
import Error from './Error'
import StartScreen from "./StartScreen";
import { useEffect, useReducer } from "react";
import Question from "./Question";

const initialState = { 
  questions : [], 
  status : 'loading', 
  index : 0, 
  answer : null, 
  points : 0
}


function reducer(state, action) { 
  switch(action.type) { 
    case 'dataReady' : 
      return { 
        ...state, questions : action.payload, status : 'ready'
      }
    case 'error' : 
      return { 
        ...state, status : 'error'
      }
    case 'active' : 
      return {
        ...state, status : 'active'
      }
    case 'newAnswer' : 
    console.log(action.payload)
      return { 
        ...state, answer : action.payload.payAns, points : action.payload.payPoints
      }
    default : 
      throw new Error('Case unknown'); 
  }
}



export default function App() { 
  const [{questions, status, index,answer, points}, dispatch] = useReducer(reducer, initialState); 
  // const [currQ, setCurrQ] = useState(2);

  // function incrementCurrQ () { 
  //   setCurrQ( currQ + 1); 
  // }
  // function DecrementCurrQ () { 
  //   if(currQ !== 0){
  //     setCurrQ( currQ - 1); 
  //   }else{
  //     return; 
  //   }
  // }
    //   {/* {questions.map(m => {
    //   if(questions[currQ] === m){
    //     return (
    //       <div>
    //         <h2 key={currQ} >{m.question}</h2>
    //         {m.options.map(o => { 
    //           return(
    //             <li key={Math.random()}>{o}</li>
    //           )
    //         })}
    //       </div>
    //       )
    //   }
    //   <span>
    //   <button onClick={DecrementCurrQ}>Prev Question</button>
    //   <button onClick={incrementCurrQ}>Next Question</button>
    // </span>
    // })} */}

  useEffect(function () { 
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data =>{
      dispatch({type : 'dataReady', payload : data}); 
    })
    .catch(err => dispatch({type : 'error', payload : err})); 
  }, [])


  const setReady = () => { 
    dispatch({type : 'active'})
  }

  return <div className="app">
    <Header />
    <div>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen noOfQs={questions.length} setReady={setReady} />}
      {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer} points={points} />}
    </div>
    <div>{points}</div>
  </div>
}