import React ,{ useState }from 'react'
import './Counter.css'
function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className='Counter'>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default Counter
