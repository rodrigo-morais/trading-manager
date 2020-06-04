import React from 'react'
import PropTypes from 'prop-types'
import TradingCard from '../TradingCard'

const Trades = ({ trades, startTrading, selectStock, selectType, selectStrategy }) => (
  <TradingCard
    trades={trades}
    startTrading={startTrading}
    selectStock={selectStock}
    selectType={selectType}
    selectStrategy={selectStrategy}
  />
)

Trades.propTypes = {
  trades: PropTypes.object.isRequired,
  startTrading: PropTypes.func.isRequired,
  selectStock: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired,
  selectStrategy: PropTypes.func.isRequired,
}

export default Trades
