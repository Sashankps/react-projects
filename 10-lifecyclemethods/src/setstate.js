import React from 'react';
import useToggle from './Toggle';

function Test() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isSad, toggleIsSad] = useToggle(false);
  return (
    <div>
      <h2 onClick={toggleIsHappy}>{isHappy ? '😀' : '🥲'}</h2>
      <h2 onClick={toggleIsSad}>{isSad ? '🥲' : '😀'}</h2>
    </div>
  );
}

export default Test;
