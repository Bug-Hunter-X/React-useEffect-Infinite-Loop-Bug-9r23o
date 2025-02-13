```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Effect running:', count);
    // Problem: This effect causes an infinite loop because it modifies state.
    setCount(count + 1);
  }, [count]); // The dependency array is crucial here.

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```