import { getDirection, getDifference, getRisk } from '../../src/libraries/stockCalculation'

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

  describe('getRisk', () => {
    it('returns the risk when stock is Brazilian Index', () => {
      const stock = 'WINM20'
      const difference = 100
      const valuePerTick = 0.2

      expect(getRisk(stock, difference, valuePerTick)).toEqual(20)
    })

    it('returns the risk when stock is Dollar', () => {
      const stock = 'WDOM20'
      const difference = 10
      const valuePerTick = 10

      expect(getRisk(stock, difference, valuePerTick)).toEqual(100)
    })

    it('returns the risk when stock is not Brazilian Index or Dollar', () => {
      const stock = 'GGBR4'
      const difference = 10
      const valuePerTick = 1

      expect(getRisk(stock, difference, valuePerTick)).toEqual(10)
    })
  })
})
