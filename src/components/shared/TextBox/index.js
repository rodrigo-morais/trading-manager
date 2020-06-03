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

const LabelValue = styled.label`
  font-size: 16px;
  color: #9A4D0D;
`

const Text = styled.input.attrs({
  type: 'text',
})`
  width: 40%;
  color: #000000;
  font-size: 16px;
`

const addColon = (label) => label.slice(-1) === ':' ? label : `${label}:`

const onChange = (callback) => (event) => callback(event.target.value)

const TextBox = ({ value, className, label, disabled, onChange: callback }) => (
  <Container className={className}>
    <Label htmlFor={label}>{addColon(label)}</Label>
    {disabled ? <LabelValue name={`${label}Value`} id={`${label}Value`}>{value}</LabelValue>
      : <Text name={label} id={label} onChange={onChange(callback)} />
    }
  </Container>
)

TextBox.defaultProps = {
  disabled: false,
}

TextBox.defaultProps = {
  className: '',
}

TextBox.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
	label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default TextBox
