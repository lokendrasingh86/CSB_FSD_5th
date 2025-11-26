import React, { useEffect, useState } from 'react'

const Dashboard = () => {
 
  const [counter,setCounter] = useState(10);
  const [pointer,setPointer] = useState(10);
   useEffect(()=>{
    console.log(counter);
    console.log(pointer)
  },[counter,pointer])
  return (
    <>
    <div>Dashboard</div>
    <h2>Counter Value:{counter}</h2>
    <h2>Pointer Value:{pointer}</h2>
    <button onClick={()=>{setCounter(counter+10)}}>Increase Count</button>
    <button onClick={()=>{setPointer(pointer-10)}}>Decrease Pointer</button>
    
    </>
    
  )
}

export default Dashboard;