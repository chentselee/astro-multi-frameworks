import { counterService, counterMachine } from './counter.machine'
import { createSignal, createEffect } from 'solid-js'
import { StateFrom } from 'xstate'

export default function PreactCounter() {
  const [state, setState] = createSignal<StateFrom<typeof counterMachine>>(undefined)
  createEffect(() => {
    const subscription = counterService.subscribe((state) => {
      setState(state)
    })
    return subscription.unsubscribe
  })
  return (
    <div id='preact' class='counter'>
      <button onclick={() => counterService.send('DECREMENT')}>-</button>
      <pre>{state()?.context.count}</pre>
      <button onclick={() => counterService.send('INCREMENT')}>+</button>
    </div>
  )
}
