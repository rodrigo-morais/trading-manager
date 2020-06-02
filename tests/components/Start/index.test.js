import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Start from '../../../src/components/Start'

describe('Start', () => {
  describe('Rendering', () => {
    const wrapper = (
      <Start />
    )

    test('renders according to design', () => {
      const component = renderer.create(wrapper)
      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    })

    test('first label as "Entrada"', () => {
      const component = mount(wrapper)
      expect(component.find('label').at(0).text()).toEqual('Entrada:')
    })

    test('second label as "Stop Base"', () => {
      const component = mount(wrapper)
      expect(component.find('label').at(1).text()).toEqual('Stop Base:')
    })

    test('third label as "Hora"', () => {
      const component = mount(wrapper)
      expect(component.find('label').at(2).text()).toEqual('Hora:')
    })

    test('button', () => {
      const component = mount(wrapper)
      expect(component.find('button').length).toEqual(1)
      expect(component.find('button').at(0).text()).toEqual('Iniciar')
    })
  })
})
