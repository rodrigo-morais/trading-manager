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

const Select = styled.select`
  max-width: 60%;
  min-height: 96%;
  margin-top: 2%;
  color: #000000;
  font-size: 14px;
`

const addColon = (label) => label.slice(-1) === ':' ? label : `${label}:`

const onSelect = (callback) => (event) => {
  event.preventDefault()

  callback(event.target.value)
}

const DropDown = ({ value, className, label, options, disabled, onChange }) => (
  <Container className={className}>
    <Label htmlFor={label}>{addColon(label)}</Label>
    {disabled
      ? <LabelValue name={`${label}Value`} id={`${label}Value`}>{value}</LabelValue>
      : (
        <Select name={label} id={label} onChange={onSelect(onChange)}>
          {options.map((option) => (<option key={option} value={option}>{option}</option>))}
        </Select>
      )
    }
  </Container>
)

DropDown.defaultProps = {
  disabled: false,
}

DropDown.defaultProps = {
  className: '',
}

DropDown.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
	label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default DropDown
