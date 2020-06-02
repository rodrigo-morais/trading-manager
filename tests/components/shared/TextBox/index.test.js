import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import TextBox from '../../../../src/components/shared/TextBox'

describe('TextBox', () => {
  describe('Rendering', () => {
    describe('enabled DropDown', () => {
      const wraper = (
          <TextBox
            label="Ativo"
          />
      )

      test('renders according to design', () => {
        const component = renderer.create(wraper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      test('text box enabled', () => {
        const component = mount(wraper)
        expect(component.find('input.text').at(0).disabled).toBeFalsy()
      })

      test('text box label is equal "Ativo"', () => {
        const component = mount(wraper)
        expect(component.find('label').text()).toEqual('Ativo:')
      })
    })

    describe('disabled DropDown', () => {
      const wraper = (
          <TextBox
            label="Ativo"
            disabled
          />
      )

      test('renders according to design', () => {
        const component = renderer.create(wraper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      test('drop down enabled', () => {
        const component = mount(wraper)
        expect(component.find('input.text').at(0).disabled).toBeFalsy()
      })

      test('text box label is equal "Ativo"', () => {
        const component = mount(wraper)
        expect(component.find('label').text()).toEqual('Ativo:')
      })
    })
  })
})
