import { connect } from 'react-redux'
import Trades from '../../components/Trades'

import { startTrading, selectStock, selectType, selectSystem, selectStrategy } from './actionsCreator'

const mapStateToProps = ({ trades, stocks, systems }) => ({
  trades,
  stocks,
  systems: systems.filter((system) => !!trades.stock && system.stock === trades.stock.acronym),
})

const mapDispatchToProps = (dispatch) => ({
  selectStock: (stock) => dispatch(selectStock(stock)),
  selectType: (type) => dispatch(selectType(type)),
  selectSystem: (system) => dispatch(selectSystem(system)),
  selectStrategy: (strategy) => dispatch(selectStrategy(strategy)),
  startTrading: (startValue, initialStopLoss, time) => dispatch(startTrading(startValue, initialStopLoss, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trades)
