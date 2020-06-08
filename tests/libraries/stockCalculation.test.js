import { getDirection } from '../../src/libraries/stockCalculation'

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
})
