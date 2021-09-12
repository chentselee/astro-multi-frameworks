import { createModel } from 'xstate/lib/model'
import { interpret } from 'xstate'

const counterModel = createModel(
  {
    count: 0,
  },
  {
    events: {
      INCREMENT: () => ({}),
      DECREMENT: () => ({}),
      RESET: () => ({}),
    },
  }
)

const counterMachine = counterModel.createMachine(
  {
    context: {
      count: 0,
    },
    initial: 'active',
    states: {
      active: {
        on: {
          INCREMENT: {
            actions: 'increment',
          },
          DECREMENT: {
            actions: 'decrement',
          },
          RESET: {
            actions: 'reset',
          },
        },
      },
    },
  },
  {
    actions: {
      increment: counterModel.assign({ count: (context) => context.count + 1 }),
      decrement: counterModel.assign({ count: (context) => context.count - 1 }),
      reset: counterModel.assign({ count: 0 }),
    },
  }
)

export const counterService = interpret(counterMachine).start()
