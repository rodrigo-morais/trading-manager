import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Start from '..'

const trades = {
  stock: 'WINM20',
  type: 'Abertura',
  strategy: '3x1',
  startValue: '',
  initialStopLoss: '',
  time: '',
}
const startTrading = jest.fn()

describe('Start', () => {
  describe('when is enabled', () => {
    describe('Rendering', () => {
      const wrapper = (
        <Start
          trades={trades}
          startTrading={startTrading}
        />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has a first label as "Entrada"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(0).text()).toEqual('Entrada:')
      })

      it('has a second label as "Stop Base"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(1).text()).toEqual('Stop Base:')
      })

      it('has the third label as "Hora"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(2).text()).toEqual('Hora:')
      })

      it('has a button', () => {
        const component = mount(wrapper)
        expect(component.find('button').length).toEqual(1)
        expect(component.find('button').at(0).text()).toEqual('Iniciar')
        expect(component.find('button').at(0).prop('disabled')).toBeFalsy()
      })

      it('calls startTrading function when click on the button', () => {
        const component = mount(wrapper)

        component.find('button').simulate('click')
        expect(startTrading).toBeCalled()
      })

      it('has 3 text boxes', () => {
        const component = mount(wrapper)
        expect(component.find('[type="text"]').length).toEqual(3)
      })
    })
  })

  describe('when is disabled', () => {
    describe('Rendering', () => {
      const wrapper = (
        <Start
          trades={trades}
          startTrading={startTrading}
          disabled
        />
      )

      it('renders according to design', () => {
        const component = renderer.create(wrapper)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
      })

      it('has a first label as "Entrada"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(0).text()).toEqual('Entrada:')
      })

      it('has a second label as "Stop Base"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(2).text()).toEqual('Stop Base:')
      })

      it('has the third label as "Hora"', () => {
        const component = mount(wrapper)
        expect(component.find('label').at(4).text()).toEqual('Hora:')
      })

      it('has a disabled button', () => {
        const component = mount(wrapper)
        expect(component.find('button').length).toEqual(1)
        expect(component.find('button').at(0).text()).toEqual('Iniciar')
        expect(component.find('button').at(0).prop('disabled')).toBeTruthy()
      })

      it('has 3 labels instead of text boxes', () => {
        const component = mount(wrapper)
        expect(component.find('input[text]').length).toEqual(0)
        expect(component.find('label').length).toEqual(6)
      })
    })
  })
})
