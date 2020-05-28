import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import DropDown from '../../../../src/components/shared/DropDown'

describe('DropDown', () => {
  describe('Rendering', () => {
    describe('enabled DropDown', () => {
      const wraper = (
          <DropDown
            label="Ativo"
            options={['WINM20', 'WDOM20']}
          />
      )

      test('renders according to design', () => {
        const component = renderer.create(wraper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      test('drop down enabled', () => {
        const component = mount(wraper)
        expect(component.find('select').at(0).disabled).toBeFalsy()
      })

      test('drop down with 2 items', () => {
        const component = mount(wraper)
        expect(component.find('select').find('option').length).toEqual(2)
      })

      test('drop down value is equal "WINM20"', () => {
        const component = mount(wraper)
        expect(component.find('select').find('option').first().text()).toEqual('WINM20')
      })

      test('drop down label is equal "Ativo"', () => {
        const component = mount(wraper)
        expect(component.find('label').text()).toEqual('Ativo')
      })
    })

    describe('disabled DropDown', () => {
      const wraper = (
          <DropDown
            label="Ativo"
            options={['WINM20', 'WDOM20']}
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
        expect(component.find('select').at(0).disabled).toBeFalsy()
      })

      test('drop down with 2 items', () => {
        const component = mount(wraper)
        expect(component.find('select').find('option').length).toEqual(2)
      })

      test('drop down value is equal "WINM20"', () => {
        const component = mount(wraper)
        expect(component.find('select').find('option').first().text()).toEqual('WINM20')
      })

      test('drop down label is equal "Ativo"', () => {
        const component = mount(wraper)
        expect(component.find('label').text()).toEqual('Ativo')
      })
    })
  })
})
