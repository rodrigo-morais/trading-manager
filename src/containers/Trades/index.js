import { connect } from 'react-redux'
import Trades from '../../components/Trades'

import { startTrading, selectStock, selectType, selectStrategy } from './actionsCreator'

const mapStateToProps = ({ trades }) => ({ trades })

const mapDispatchToProps = (dispatch) => ({
  selectStock: (stock) => dispatch(selectStock(stock)),
  selectType: (type) => dispatch(selectType(type)),
  selectStrategy: (strategy) => dispatch(selectStrategy(strategy)),
  startTrading: (startValue, initialStopLoss, time) => dispatch(startTrading(startValue, initialStopLoss, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trades)
