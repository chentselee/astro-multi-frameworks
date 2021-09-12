<template>
  <div id="vue" class="counter">
    <button @click="send('DECREMENT')">-</button>
    <pre>{{ state.context.count }}</pre>
    <button @click="send('INCREMENT')">+</button>
  </div>
</template>

<script>
import { useActor } from '@xstate/vue'
import { counterService } from './counter.machine'
export default {
  setup() {
    const { state, send } = useActor(counterService)
    return { state, send }
  },
}
</script>
