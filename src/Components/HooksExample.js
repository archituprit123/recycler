import React, { useState } from 'react'

// Hooks can only be called inside the functional component
// Use State returns Current Data and Updated data


const HookExample = () => {
   
   const [count , setCount] = useState(0);
  
    const IncNum = () => {
        
        setCount(count+1)
    };
return(
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    </>
);

}

export default HookExample;
