import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import TextBox from '../../../../src/components/shared/TextBox'


const onChange = jest.fn()

describe('TextBox', () => {
  describe('Rendering', () => {
    describe('enabled DropDown', () => {
      const wrapper = (
          <TextBox
            value=""
            label="Ativo"
            onChange={onChange}
          />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has a label with "Ativo" as text', () => {
        const component = mount(wrapper)
        expect(component.find('label').text()).toEqual('Ativo:')
      })

      it('executes onChange callback', () => {
        const component = mount(wrapper)

        component.find('input').simulate('change', { target: { value: 'WDON20' } })
        expect(onChange).toBeCalled();
      })
    })

    describe('disabled DropDown', () => {
      const wrapper = (
          <TextBox
            value="WINM20"
            label="Ativo"
            disabled
            onChange={() => {}}
          />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has text box as a label', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(1).text()).toEqual('WINM20')
      })

      it('has a label with "Ativo" as text', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(0).text()).toEqual('Ativo:')
      })
    })
  })
})
