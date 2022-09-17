import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  useEffect(() => {

    window.addEventListener("counter:increment", increment);
    window.addEventListener("counter:decrement", decrement);

    return () => {
      window.removeEventListener("counter:increment", increment);
      window.removeEventListener("counter:decrement", decrement);
    }

    //const customEvent = new CustomEvent(event.react.actualValue, {detail: count})
    //window.dispatchEvent(customEvent);
  }, [count]);


  return <>
    <h2>Counter: <b>{count}</b></h2>
  </>;
}

export default Counter
