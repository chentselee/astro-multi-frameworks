<script>
  import { counterService } from './counter.machine'
</script>

<div id="svelte" class="counter">
  <button on:click={() => counterService.send('DECREMENT')}>-</button>
  <pre>{$counterService.context.count}</pre>
  <button on:click={() => counterService.send('INCREMENT')}>+</button>
</div>
