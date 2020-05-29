import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 40% 60%;
  min-width: 140px;
`
const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  grid-column-start: 1;
  grid-column-end: 1;
  margin-right: 8px;
`

const Select = styled.select`
  grid-column-start: 2;
  grid-column-end: 2;
  min-height: 96%;
  margin-top: 2%;
  color: #000000;
`

const addColon = (label) => label.slice(-1) === ':' ? label : `${label}:`

const DropDown = ({ label, options, disabled }) => (
  <Container>
    <Label htmlFor={label}>{addColon(label)}</Label>
    <Select name={label} id={label} disabled={disabled}>
      {options.map((option) => (<option key={option} value={option}>{option}</option>))}
    </Select>
  </Container>
)

DropDown.defaultProps = {
  disabled: false,
}

DropDown.propTypes = {
	label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
}

export default DropDown
