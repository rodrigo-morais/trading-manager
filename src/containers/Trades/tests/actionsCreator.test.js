import {
  selectStock,
  selectType,
  selectSystem,
  selectStrategy,
  startTrading,
} from '../actionsCreator'
import actions from '../actions'

describe('actionsCreator', () => {
	const dispatch = jest.fn()

	afterEach(() => {
		dispatch.mockReset()
	})

  it('dispatch selectStock', async () => {
    expect.assertions(2)

    const stock = 'WDON20'

    await selectStock(stock)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(actions.selectStock(stock))
  })

  it('dispatch selectType', async () => {
    expect.assertions(2)

    const type = 'Pregão'

    await selectType(type)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(actions.selectType(type))
  })

  it('dispatch selectSystem', async () => {
    expect.assertions(2)

    const system = [{ id: 1, name: 'system 1' }]

    await selectSystem(system)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(actions.selectSystem(system))
  })

  it('dispatch selectStrategy', async () => {
    expect.assertions(2)

    const strategy = 'reversão'

    await selectStrategy(strategy)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(actions.selectStrategy(strategy))
  })

  it('dispatch startTrading', async () => {
    expect.assertions(2)

    const startValue = '90000'
    const initialStopLoss = '89900'
    const time = '12:10'

    await startTrading(startValue, initialStopLoss, time)(dispatch)

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(actions.startTrading(startValue, initialStopLoss, time))
  })
})
