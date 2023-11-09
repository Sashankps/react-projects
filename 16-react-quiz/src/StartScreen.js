import React from 'react'

export default function StartScreen(props) {

  return (
    <div className='start'>
        <h2>Welcome to The React Quiz!</h2>
        <h3>{props.noOfQs} question to test your React mastery</h3>
        <button className='btn btn-ui' onClick={props.setReady}>Let's start</button>
    </div>
  )
}
