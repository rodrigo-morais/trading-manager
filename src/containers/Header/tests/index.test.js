import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Header from '..'

const trades = { stock: 'WINM20', type: 'Abertura', strategy: '3x1' }

describe('Header', () => {
  describe('when is enabled', () => {
    describe('Rendering', () => {
      const wrapper = (
        <Header
          trades={trades}
          selectStock={() => {}}
          selectType={() => {}}
          selectStrategy={() => {}}
          disabled={false}
        />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has the first label as "Ativo"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(0).text()).toEqual('Ativo:')
      })

      it('has the second label as "Tipo"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(1).text()).toEqual('Tipo:')
      })

      it('has the third label as "Estratégia"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(2).text()).toEqual('Estratégia:')
      })

      it('has 3 selects', () => {
        const component = mount(wrapper)
        expect(component.find('select').length).toEqual(3)
      })
    })
  })

  describe('when is disabled', () => {
    describe('Rendering', () => {
      const wrapper = (
        <Header
          trades={trades}
          selectStock={() => {}}
          selectType={() => {}}
          selectStrategy={() => {}}
          disabled
        />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has the first label as "Ativo"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(0).text()).toEqual('Ativo:')
      })

      it('has the first label value as "WINM20"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(1).text()).toEqual('WINM20')
      })

      it('has the second label as "Tipo"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(2).text()).toEqual('Tipo:')
      })

      it('has the second label value as "Abertura"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(3).text()).toEqual('Abertura')
      })

      it('has the third label as "Estratégia"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(4).text()).toEqual('Estratégia:')
      })

      it('has the third label value as "3x1"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(5).text()).toEqual('3x1')
      })

      it('has 3 labels instead of selects', () => {
        const component = mount(wrapper)
        expect(component.find('label').length).toEqual(6)
      })
    })
  })
})
