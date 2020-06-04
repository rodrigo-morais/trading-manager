import {
  SELECTED_STOCK,
  SELECTED_TYPE,
  SELECTED_STRATEGY,
  STARTED_TRADING,
  FINALIZED_TRADING,
} from './constants'

const selectStock = (stock) => ({
  type: SELECTED_STOCK,
  data: {
    stock,
  },
})

const selectType = (type) => ({
  type: SELECTED_TYPE,
  data: {
    type,
  },
})

const selectStrategy = (strategy) => ({
  type: SELECTED_STRATEGY,
  data: {
    strategy,
  },
})

const startTrading = (startValue, initialStopLoss, time) => {
  const now = new Date()

  return ({
    type: STARTED_TRADING,
    data: {
      date: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
      startValue,
      initialStopLoss,
      time,
      status: 'STARTED',
    },
  })
}

export const finalizeTrading = () => ({
  type: FINALIZED_TRADING,
  data: { status: 'FINALIZED' },
})

export default {
  selectStock,
  selectType,
  selectStrategy,
  startTrading,
}
