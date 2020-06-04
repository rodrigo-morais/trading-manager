import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextBox from '../../components/shared/TextBox'

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 24% 24% 24% 24%;
  justify-content: space-evenly;
  min-width: 100%;
`

const Button = styled.button`
  width: 50%;
  font-size: 14px;
  font-weight: bold;
`

class Start extends React.Component {
  constructor(props) {
    super(props)

    this.changeStartValue = this.changeStartValue.bind(this)
    this.changeInitialStopLoss = this.changeInitialStopLoss.bind(this)
    this.changeTime = this.changeTime.bind(this)
    this.onClick = this.onClick.bind(this)

    this.state = {
      startValue: '',
      initialStopLoss: '',
      time: '',
    }
  }

  onClick(callback, event) {
    event.preventDefault()
    const { startValue, initialStopLoss, time } = this.state

    callback(startValue, initialStopLoss, time)
  }

  changeStartValue(value) {
    this.setState(() => ({ startValue: value }))
  }

  changeInitialStopLoss(value) {
    this.setState(() => ({ initialStopLoss: value }))
  }

  changeTime(value) {
    this.setState(() => ({ time: value }))
  }

  render() {
    const { trades, className, disabled, startTrading } = this.props

    return (
      <Container className={className}>
        <TextBox label="Entrada" disabled={disabled} value={trades.startValue} onChange={this.changeStartValue} />
        <TextBox label="Stop Base" disabled={disabled} value={trades.initialStopLoss} onChange={this.changeInitialStopLoss} />
        <TextBox label="Hora" disabled={disabled} value={trades.time} onChange={this.changeTime} />
        <Button value="Iniciar" disabled={disabled} onClick={(event) => this.onClick(startTrading, event)}>Iniciar</Button>
      </Container>
    )
  }
}

Start.defaultProps = {
  className: '',
  disabled: false,
}

Start.propTypes = {
  trades: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  startTrading: PropTypes.func.isRequired,
}

export default Start
