import { counterService } from './counter.machine'
import { createSignal, createEffect } from 'solid-js'

export default function PreactCounter() {
  const [count, setCount] = createSignal(0)
  createEffect(() => {
    const subscription = counterService.subscribe((state) => {
      setCount(state.context.count)
    })
    return subscription.unsubscribe
  })
  return (
    <div id='preact' class='counter'>
      <button onClick={() => counterService.send('DECREMENT')}>-</button>
      <pre>{count()}</pre>
      <button onClick={() => counterService.send('INCREMENT')}>+</button>
    </div>
  )
}
