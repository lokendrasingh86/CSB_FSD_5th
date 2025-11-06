import React from "react";
import { useState } from "react";
const StateHandling = () => {
  const [counter, setCounter] = useState(20);

  function IncreaseCounterValue() {
    setCounter(counter+2);
  }
  
  return (
    <>
      
      <div>Counter Value = {counter}</div>
      <button onClick={IncreaseCounterValue}>Incremenet Counter</button>
      <button onClick={()=> setCounter(counter-4)}>Decrement Counter</button>

    </>
  );
};

export default StateHandling;
