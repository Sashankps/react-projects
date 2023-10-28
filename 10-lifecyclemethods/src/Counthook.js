import React, { useState } from 'react';

function Counthook() {
  const [count, setCount] = useState(0);
  // 0 is the initial value to the count, we are using array destructing to assign corresponding values,
  // setCount is a function associated with count
  return (
    <div>
      <h2>The count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counthook;
