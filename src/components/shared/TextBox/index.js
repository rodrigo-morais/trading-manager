import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  display: inline-block;
  width: 100%;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`

const Text = styled.input.attrs({
  type: 'text',
})`
  width: 40%;
  color: #000000;
  font-size: 16px;
`

const addColon = (label) => label.slice(-1) === ':' ? label : `${label}:`

const TextBox = ({ className, label, disabled }) => (
  <Container className={className}>
    <Label htmlFor={label}>{addColon(label)}</Label>
    <Text name={label} id={label} disabled={disabled} />
  </Container>
)

TextBox.defaultProps = {
  disabled: false,
}

TextBox.defaultProps = {
  className: '',
}

TextBox.propTypes = {
  className: PropTypes.string,
	label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

export default TextBox
