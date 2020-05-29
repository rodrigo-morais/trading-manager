import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Header from '../../../src/components/Header'

describe('Header', () => {
  describe('Rendering', () => {
    const wrapper = (
      <Header />
    )

    test('renders according to design', () => {
      const component = renderer.create(wrapper)
      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    })

    test('first label as "Ativo"', () => {
      const component = mount(wrapper)
      expect(component.find('label').at(0).text()).toEqual('Ativo:')
    })

    test('second label as "Tipo"', () => {
      const component = mount(wrapper)
      expect(component.find('label').at(1).text()).toEqual('Tipo:')
    })

    test('second label as "Estratégia"', () => {
      const component = mount(wrapper)
      expect(component.find('label').at(2).text()).toEqual('Estratégia:')
    })
  })
})
