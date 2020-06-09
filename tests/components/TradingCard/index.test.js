import React from 'react'
import renderer from 'react-test-renderer'

import TradingCard from '../../../src/components/TradingCard'

const stocks = [{ acronym: 'WDO' }, { acronym: 'WIN' }]
const systems = [{ id: 1, name: 'name 1' }, { id: 2, name: 'name 2' }]
const trades = {
  date: '',
  stock: stocks[0],
  type: 'Pregão',
  system: null,
  strategy: 'Topo / Fundo',
  startValue: '',
  initialStopLoss: '',
  time: '',
  status: 'WAITING',
}

describe('TradingCard', () => {
  describe('Rendering', () => {
    describe('when the trading is waiting to start', () => {
      it('renders according to design', () => {
        const wrapper = (
          <TradingCard
            trades={trades}
            stocks={stocks}
            systems={systems}
            startTrading={() => {}}
            selectStock={() => {}}
            selectType={() => {}}
            selectSystem={() => {}}
            selectStrategy={() => {}}
          />
        )
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    describe('when the trading is in progress to start', () => {
      it('renders according to design', () => {
        const tradesStarted = { ...trades, ...{ status: 'STARTED' } }
        const wrapper = (
          <TradingCard
            trades={tradesStarted}
            stocks={stocks}
            systems={systems}
            startTrading={() => {}}
            selectStock={() => {}}
            selectType={() => {}}
            selectSystem={() => {}}
            selectStrategy={() => {}}
          />
        )
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })
    })
  })
})
