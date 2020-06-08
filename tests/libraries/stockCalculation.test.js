import { getDirection, getDifference } from '../../src/libraries/stockCalculation'

describe('stockCalculation', () => {
  describe('getDirection', () => {
    it('returns "Compra" when stop is bigger than start', () => {
      const start = 10
      const stop = 14

      expect(getDirection(start, stop)).toEqual('Compra')
    })

    it('returns "Compra" when stop is equal to start', () => {
      const start = 14
      const stop = 14

      expect(getDirection(start, stop)).toEqual('Compra')
    })

    it('returns "Venda" when stop is smaller than start', () => {
      const start = 14
      const stop = 10

      expect(getDirection(start, stop)).toEqual('Venda')
    })
  })

  describe('getDifference', () => {
    it('returns the absolute difference when stop is bigger than start', () => {
      const start = 10
      const stop = 14

      expect(getDifference(start, stop)).toEqual(4)
    })

    it('returns the abolute difference when stop is smaller than start', () => {
      const start = 14
      const stop = 10

      expect(getDifference(start, stop)).toEqual(4)
    })
  })
})
