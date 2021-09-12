import { counterService } from './counter.machine'
import { useState, useEffect } from 'react'

export default function ReactCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const subscription = counterService.subscribe((state) => {
      setCount(state.context.count)
    })
    return subscription.unsubscribe
  }, [])
  return (
    <div id='react' className='counter'>
      <button onClick={() => counterService.send('DECREMENT')}>-</button>
      <pre>{count}</pre>
      <button onClick={() => counterService.send('INCREMENT')}>+</button>
    </div>
  )
}
