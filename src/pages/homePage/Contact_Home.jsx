import React from 'react'
import { useEffect } from 'react'

export default function Contact() {

  const [count, setCount] = React.useState(0)

  useEffect(() => {
    alert( `Count: ${count}`);
  }, [count]);
  // useEffect(()=>{
  //   alert("Contact Page")
  // },[])

  return (
    <>
      <h1>Contact</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
