import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../../containers/Header'
import Start from '../../containers/Start'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-row-gap: 8%;
  justify-content: space-evenly;
  width: 49%;
  border: solid 1px #000000;
  border-radius: 12px;
  background-color: #AACAA2;
  padding: 0.5%;
`

const FirstLine = styled(Header)`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: start;
`

const SecondLine = styled(Start)`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: start;
`
const TradingCard = ({ trades, stocks, systems, startTrading, selectStock, selectType, selectSystem, selectStrategy }) => (
  <Container>
    <FirstLine
      trades={trades}
      stocks={stocks}
      systems={systems}
      selectStock={selectStock}
      selectType={selectType}
      selectSystem={selectSystem}
      selectStrategy={selectStrategy}
      disabled={trades.status !== 'WAITING'}
    />
    <SecondLine trades={trades} startTrading={startTrading} disabled={trades.status !== 'WAITING'} />
  </Container>
)

TradingCard.propTypes = {
  trades: PropTypes.object.isRequired,
  stocks: PropTypes.array.isRequired,
  systems: PropTypes.array.isRequired,
  startTrading: PropTypes.func.isRequired,
  selectStock: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired,
  selectSystem: PropTypes.func.isRequired,
  selectStrategy: PropTypes.func.isRequired,
}

export default TradingCard
