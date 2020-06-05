import {
  SELECTED_STOCK,
  SELECTED_TYPE,
  SELECTED_STRATEGY,
  STARTED_TRADING,
} from '../constants'
import actions from '../actions'

const {
  selectStock,
  selectType,
  selectStrategy,
  startTrading,
} = actions

describe('actions', () => {
  describe('selectStock', () => {
    const stock = 'WDON20'

    it('returns SELECTED_STOCK as type', () => {
      expect(selectStock(stock).type).toBe(SELECTED_STOCK)
    })

    it('returns informed stock as data', () => {
      expect(selectStock(stock).data.stock).toBe('WDON20')
    })
  })

  describe('selectType', () => {
    const type = 'Pregão'

    it('returns SELECTED_TYPE as type', () => {
      expect(selectType(type).type).toBe(SELECTED_TYPE)
    })

    it('returns informed stock as data', () => {
      expect(selectType(type).data.type).toBe('Pregão')
    })
  })

  describe('selectStrategy', () => {
    const strategy = 'Reversão'

    it('returns SELECTED_STRATEGY as type', () => {
      expect(selectStrategy(strategy).type).toBe(SELECTED_STRATEGY)
    })

    it('returns informed stock as data', () => {
      expect(selectStrategy(strategy).data.strategy).toBe('Reversão')
    })
  })

  describe('startTrading', () => {
    const startValue = '90000'
    const initialStopLoss = '89900'
    const time = '12:10'

    it('returns STARTED_TRADING as type', () => {
      expect(startTrading(startValue, initialStopLoss, time).type).toBe(STARTED_TRADING)
    })

    it('returns informed startValue, initialStopLoss, time as data', () => {
      expect(startTrading(startValue, initialStopLoss, time).data.startValue).toBe('90000')
      expect(startTrading(startValue, initialStopLoss, time).data.initialStopLoss).toBe('89900')
      expect(startTrading(startValue, initialStopLoss, time).data.time).toBe('12:10')
    })
  })
})
