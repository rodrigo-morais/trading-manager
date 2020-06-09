import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import DropDown from '../../../../src/components/shared/DropDown'

const onChange = jest.fn()

describe('DropDown', () => {
  describe('Rendering', () => {
    describe('enabled DropDown', () => {
      const wrapper = (
          <DropDown
            value=""
            label="Ativo"
            options={['WINM20', 'WDOM20']}
            onChange={onChange}
          />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has 2 items', () => {
        const component = mount(wrapper)
        expect(component.find('select').find('option').length).toEqual(2)
      })

      it('has a value as "WINM20"', () => {
        const component = mount(wrapper)
        expect(component.find('select').find('option').first().text()).toEqual('WINM20')
      })

      it('has a label with "Ativo" as text', () => {
        const component = mount(wrapper)
        expect(component.find('label').text()).toEqual('Ativo:')
      })

      it('executes onChange callback', () => {
        const component = mount(wrapper)

        component.find('select').simulate('change', { target: { value: 'WDON20' } })
        expect(onChange).toBeCalled();
      })
    })

    describe('enabled DropDown with options as objects', () => {
      const wrapper = (
          <DropDown
            value=""
            label="Sistema"
            options={[{ id: 1, text: 'system 1' }, { id: 2, text: 'system 2' }]}
            onChange={onChange}
          />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has 2 items', () => {
        const component = mount(wrapper)
        expect(component.find('select').find('option').length).toEqual(2)
      })

      it('has the first object with a text as "system 1"', () => {
        const component = mount(wrapper)
        expect(component.find('select').find('option').first().text()).toEqual('system 1')
      })

      it('has a label with "Sistema" as text', () => {
        const component = mount(wrapper)
        expect(component.find('label').text()).toEqual('Sistema:')
      })

      it('executes onChange callback', () => {
        const component = mount(wrapper)

        component.find('select').simulate('change', { target: { value: 'WDON20' } })
        expect(onChange).toBeCalled();
      })
    })

    describe('disabled DropDown', () => {
      const wrapper = (
          <DropDown
            value=""
            label="Ativo"
            options={['WINM20', 'WDOM20']}
            disabled
            onChange={() => {}}
          />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has a drop down as a label', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(1).text()).toEqual('')
      })

      it('has a label with "Ativo" as text', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(0).text()).toEqual('Ativo:')
      })
    })
  })
})
