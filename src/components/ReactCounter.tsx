import { counterService, counterMachine } from './counter.machine'
import { useState, useEffect } from 'react'
import { StateFrom } from 'xstate'

export default function ReactCounter() {
  const [state, setState] = useState<StateFrom<typeof counterMachine>>(() => undefined)
  useEffect(() => {
    const subscription = counterService.subscribe((state) => {
      setState(state)
    })
    return subscription.unsubscribe
  }, [])
  return (
    <div id='react' class='counter'>
      {/* @ts-expect-error */}
      <button onClick={() => counterService.send('DECREMENT')}>-</button>
      <pre>{state?.context.count}</pre>
      {/* @ts-expect-error */}
      <button onClick={() => counterService.send('INCREMENT')}>+</button>
    </div>
  )
}
