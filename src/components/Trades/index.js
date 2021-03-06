import React from 'react'
import PropTypes from 'prop-types'
import TradingCard from '../TradingCard'

const Trades = ({ trades, stocks, systems, startTrading, selectStock, selectType, selectSystem, selectStrategy }) => (
  <TradingCard
    trades={trades}
    stocks={stocks}
    systems={systems}
    startTrading={startTrading}
    selectStock={selectStock}
    selectType={selectType}
    selectSystem={selectSystem}
    selectStrategy={selectStrategy}
  />
)

Trades.propTypes = {
  trades: PropTypes.object.isRequired,
  stocks: PropTypes.array.isRequired,
  systems: PropTypes.array.isRequired,
  startTrading: PropTypes.func.isRequired,
  selectStock: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired,
  selectSystem: PropTypes.func.isRequired,
  selectStrategy: PropTypes.func.isRequired,
}

export default Trades
