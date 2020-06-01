import React from 'react'
import renderer from 'react-test-renderer'

import TradingCard from '../../../src/components/TradingCard'

describe('TradingCard', () => {
  describe('Rendering', () => {
    const wrapper = (
      <TradingCard />
    )

    test('renders according to design', () => {
      const component = renderer.create(wrapper)
      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
