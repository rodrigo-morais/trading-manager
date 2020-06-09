import {
  SELECTED_STOCK,
  SELECTED_TYPE,
  SELECTED_SYSTEM,
  SELECTED_STRATEGY,
  STARTED_TRADING,
  FINALIZED_TRADING,
  MOVED_STOP_LOSS,
  REACHED_TAKE_PROFIT,
  REACHED_STOP_LOSS,
} from './constants'

const initialState = {
  date: '',
  stock: null,
  type: 'Pregão',
  system: null,
  strategy: 'Topo / Fundo',
  startValue: '',
  initialStopLoss: '',
  time: '',
  direction: '',
  difference: 0,
  status: 'WAITING',
}

const tradesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_STOCK:
      return { ...state, ...action.data }

    case SELECTED_TYPE:
      return { ...state, ...action.data }

    case SELECTED_SYSTEM:
      return { ...state, ...action.data }

    case SELECTED_STRATEGY:
      return { ...state, ...action.data }

    case STARTED_TRADING:
      return { ...state, ...action.data }

    case FINALIZED_TRADING:
      return { ...state, ...action.data }

    case MOVED_STOP_LOSS:
      return { ...state, ...action.data }

    case REACHED_TAKE_PROFIT:
      return { ...state, ...action.data }

    case REACHED_STOP_LOSS:
      return { ...state, ...action.data }

    default:
      return state
  }
}

export default tradesReducer
