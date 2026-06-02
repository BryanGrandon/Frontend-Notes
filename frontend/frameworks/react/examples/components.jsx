import React, { useState } from 'react'

// -------------------------------------
// Basic component with props
// -------------------------------------

const Greeting = (props) => {
  return <h1>Hello, {props.name}</h1>
}

// -------------------------------------
// Component with destructuring
// -------------------------------------

const Welcome = ({ user }) => {
  return <p>Welcome back, {user} 👋</p>
}

// -------------------------------------
// Component with state
// -------------------------------------

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

// -------------------------------------
// Component composition
// -------------------------------------

const App = () => {
  return (
    <div>
      <Greeting name='Bryan' />
      <Welcome user='Ana' />
      <Counter />
    </div>
  )
}

export default App
