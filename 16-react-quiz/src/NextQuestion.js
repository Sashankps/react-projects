import React from 'react'

export default function NextQuestion({dispatch, answer}) {
    if(answer === null ) return null; 
    return (
        <div>
            <button className='btn btn-ui' onClick={() => dispatch({type : 'nextQuestion'})}>Next Question</button>
        </div>
    )
}