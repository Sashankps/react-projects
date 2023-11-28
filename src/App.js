import Header from "./Header"
import Loader from './Loader'
import Error from './Error'
import StartScreen from "./StartScreen";
import NextQuestion from './NextQuestion'
import Progress from "./Progress";
import Question from "./Question";
import { useEffect, useReducer } from "react";
import Finish from "./Finish";

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
        ...state, questions : action.payload.questions, status : 'ready'
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
      const currQ = state.questions.at(state.index);
      return { 
        ...state, 
        answer : action.payload,
        points : action.payload === currQ.correctOption ? (state.points + currQ.points) : state.points
      }
    case 'nextQuestion' : 
      return { 
        ...state, 
        index : state.index + 1, 
        answer : null
      }
    case 'finish' : 
      return {
        ...state, status : 'finish', 
      }
    case 'restart' : 
      return { 
        ...state, status : 'ready', 
        answer : null, 
        points : 0
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
    fetch('/data/questions.json')
    .then(res => res.json())
    .then(data =>{
      dispatch({type : 'dataReady', payload : data}); 
    })
    .catch(err => dispatch({type : 'error', payload : err})); 
  }, [])

  const setReady = () => { 
    dispatch({type : 'active'})
  }

  const maxPoints = questions.reduce(
    (acc, curr) => acc + curr.points, 0
  ); 

  console.log(maxPoints); 

  return <div className="app">
    <Header />
    <div>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen noOfQs={questions.length} setReady={setReady} />}
      {status === 'active' && 
        <>
        <Progress maxQ={questions.length} currQ={index} maxPoints={maxPoints} points={points} answer={answer} />
        <Question question={questions[index]} dispatch={dispatch} answer={answer} points={points}/>
        <NextQuestion dispatch={dispatch} answer={answer} index={index} maxQ={questions.length} />
        </>
      }
      {status === 'finish' && <Finish points={points} maxPoints={maxPoints} dispatch={dispatch} />}
    </div>
  </div>
}