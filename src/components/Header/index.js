import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DropDown from '../shared/DropDown'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-evenly;
  min-width: 100%;
`

const Header = ({ className }) => (
  <Container className={className}>
    <DropDown label="Ativo" options={['WINM20', 'WDON20']} />
    <DropDown label="Tipo" options={['Pregão', 'Abertura']} />
    <DropDown label="Estratégia" options={['Topo / Fundo', 'Fecha Fora / Fecha Dentro', '3x1', 'Fabolous 4']} />
  </Container>
)

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
