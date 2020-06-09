import actions from './actions'

const selectStock = (stock) => (dispatch) => dispatch(actions.selectStock(stock))

const selectType = (type) => (dispatch) => dispatch(actions.selectType(type))

const selectSystem = (system) => (dispatch) => dispatch(actions.selectSystem(system))

const selectStrategy = (strategy) => (dispatch) => dispatch(actions.selectStrategy(strategy))

const startTrading = (startValue, initialStopLoss, time) => (dispatch) => {
  dispatch(actions.startTrading(startValue, initialStopLoss, time))
}

export { startTrading, selectStock, selectType, selectSystem, selectStrategy }
