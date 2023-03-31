import React from 'react'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    alert("About Page")
  }, []);
  return (
    <>
      <h1>About</h1>
    </>
  )
}
