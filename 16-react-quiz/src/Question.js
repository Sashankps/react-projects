import React from 'react'
import { useEffect } from 'react';

export default function Question({question, dispatch, answer, points}) {
    const hasAnswered = answer !== null;
    let tempPoints = points; 
    if(hasAnswered){
        if(answer === question.correctOption){
            tempPoints  += 10; 
        }
    }



    console.log(tempPoints); 
    return (
    <div>
        <h2>{question.question}</h2>
        <div className='options'>
            {question.options.map((m,index) => (
                <button 
                onClick={() => {
                    dispatch({type : 'newAnswer', payload : {payAns : index, payPoints : tempPoints }})
                }} 
                disabled={answer !== null}
                className={`btn btn-option 
                ${index===answer ? "answer" : ""} 
                ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : "" } `} key={m}>
                    {m}
                </button>
            ))}
        </div>
    </div>
    
    )
}
