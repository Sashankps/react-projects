import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  //Use effect code renders it each and every time a change occurs...
  useEffect(() => {
    document.title = `Current count ${count}`;
  });
  return (
    <div>
      <h2>Current count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
