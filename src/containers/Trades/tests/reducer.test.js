import {
  SELECTED_STOCK,
  SELECTED_TYPE,
  SELECTED_STRATEGY,
  STARTED_TRADING,
} from '../constants'
import tradesReducer from '../reducer'

const initialState = {
  date: '',
  stock: 'WINM20',
  type: 'Pregão',
  strategy: 'Topo / Fundo',
  startValue: '',
  initialStopLoss: '',
  time: '',
  status: 'WAITING',
}

describe('reducer', () => {
	describe('SELECTED_STOCK', () => {
		it('returns stock as "WDON20"', () => {
			const result = tradesReducer(initialState, { type: SELECTED_STOCK, data: { stock: 'WDON20' } })

			expect(result.stock).toBe('WDON20')
		})
	})

	describe('SELECTED_TYPE', () => {
		it('returns type as "Pregão"', () => {
			const result = tradesReducer(initialState, { type: SELECTED_TYPE, data: { type: 'Pregão' } })

			expect(result.type).toBe('Pregão')
		})
	})

	describe('SELECTED_STRATEGY', () => {
		it('returns strategy as "Reversão"', () => {
			const result = tradesReducer(initialState, { type: SELECTED_STRATEGY, data: { strategy: 'Reversão' } })

			expect(result.strategy).toBe('Reversão')
		})
	})

	describe('STARTED_TRADING', () => {
		it('returns start value, initial stop loss and time as informed', () => {
      const data = {
        startValue: '90000',
        initialStopLoss: '89900',
        time: '12:12',
      }
			const result = tradesReducer(initialState, { type: STARTED_TRADING, data })

			expect(result.startValue).toBe('90000')
			expect(result.initialStopLoss).toBe('89900')
			expect(result.time).toBe('12:12')
		})
	})
})
