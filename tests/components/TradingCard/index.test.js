import React from 'react'
import renderer from 'react-test-renderer'

import TradingCard from '../../../src/components/TradingCard'

const trades = {
  date: '',
  stock: 'WINM20',
  type: 'Pregão',
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
            startTrading={() => {}}
            selectStock={() => {}}
            selectType={() => {}}
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
            startTrading={() => {}}
            selectStock={() => {}}
            selectType={() => {}}
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
