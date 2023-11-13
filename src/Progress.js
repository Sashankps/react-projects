import React from 'react'

export default function Progress({maxQ, currQ, points, maxPoints, answer}) {
  return (
    <header className="progress">
        <progress max={maxQ} value={currQ + Number(answer !== null)} />

        <p>
            Question <strong>{currQ + 1}</strong> / 
            {maxQ}
        </p>

        <p>
            <strong>{points}</strong> / {maxPoints}
        </p>


    </header>
  )
}
