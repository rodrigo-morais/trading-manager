import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextBox from '../shared/TextBox'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 24% 24% 24% 24%;
  justify-content: space-evenly;
  min-width: 100%;
`

const Button = styled.button`
  width: 50%;
`

const Start = ({ className, disabled }) => (
  <Container className={className}>
    <TextBox label="Entrada" disabled={disabled} />
    <TextBox label="Stop Base" disabled={disabled} />
    <TextBox label="Hora" disabled={disabled} />
    <Button value="Iniciar" disabled={disabled}>Iniciar</Button>
  </Container>
)

Start.defaultProps = {
  className: '',
  disabled: false,
}

Start.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Start
