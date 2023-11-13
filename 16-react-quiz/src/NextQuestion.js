import React from 'react'

export default function NextQuestion({dispatch, answer, index, maxQ}) {
    if(answer === null ) return null; 
    if(index+1 === maxQ) return ( 
        <div>
            <button className='btn btn-ui' 
            onClick={() => dispatch({type : 'finish'})}>
                Finish Quiz
            </button>
        </div>
    )
    return (
        <div>
            <button className='btn btn-ui' 
            onClick={() => dispatch({type : 'nextQuestion'})}>
                Next Question
            </button>
        </div>
    )
}
