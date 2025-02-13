```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when the component mounts and unmounts
    console.log('Effect running:', count);
    // Returning a cleanup function is optional, use it to cleanup interval if needed
    return () => {
        console.log('Cleanup Function');
    };
  }, []); // Empty dependency array ensures running only once

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```