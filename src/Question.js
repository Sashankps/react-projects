import React from 'react'

export default function Question({question, dispatch, answer}) {
    const hasAnswered = answer !== null;
    return (
    <div>
        <h2>{question.question}</h2>
        <div className='options'>
            {question.options.map((m,index) => (
                <button 
                onClick={() => {
                    dispatch({type : 'newAnswer', payload : index})
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
