/* jsxImportSource: preact */
import { counterService, counterMachine } from './counter.machine'
import { useState, useEffect } from 'preact/hooks'
import { StateFrom } from 'xstate'

export default function PreactCounter() {
  const [state, setState] = useState<StateFrom<typeof counterMachine>>(() => undefined)
  useEffect(() => {
    const subscription = counterService.subscribe((state) => {
      setState(state)
    })
    return subscription.unsubscribe
  }, [])
  return (
    <div id='preact' class='counter'>
      <button onclick={() => counterService.send('DECREMENT')}>-</button>
      <pre>{state?.context.count}</pre>
      <button onclick={() => counterService.send('INCREMENT')}>+</button>
    </div>
  )
}
