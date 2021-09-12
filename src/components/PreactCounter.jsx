/* jsxImportSource: preact */
import { counterService } from './counter.machine'
import { useState, useEffect } from 'preact/hooks'

export default function PreactCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const subscription = counterService.subscribe((state) => {
      setCount(state.context.count)
    })
    return subscription.unsubscribe
  }, [])
  return (
    <div id='preact' class='counter'>
      <button onClick={() => counterService.send('DECREMENT')}>-</button>
      <pre>{count}</pre>
      <button onClick={() => counterService.send('INCREMENT')}>+</button>
    </div>
  )
}
