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

const Select = styled.select`

  min-height: 96%;
  margin-top: 2%;
  color: #000000;
`

const addColon = (label) => label.slice(-1) === ':' ? label : `${label}:`

const DropDown = ({ className, label, options, disabled }) => (
  <Container className={className}>
    <Label htmlFor={label}>{addColon(label)}</Label>
    <Select name={label} id={label} disabled={disabled}>
      {options.map((option) => (<option key={option} value={option}>{option}</option>))}
    </Select>
  </Container>
)

DropDown.defaultProps = {
  disabled: false,
}

DropDown.defaultProps = {
  className: '',
}

DropDown.propTypes = {
  className: PropTypes.string,
	label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
}

export default DropDown
