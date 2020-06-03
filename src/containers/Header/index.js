import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DropDown from '../../components/shared/DropDown'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-evenly;
  min-width: 100%;
`

const Header = ({ trades, className, selectStock, selectType, selectStrategy, disabled }) => (
  <Container className={className}>
    <DropDown label="Ativo" options={['WINM20', 'WDON20']} value={trades.stock} onChange={selectStock} disabled={disabled} />
    <DropDown label="Tipo" options={['Pregão', 'Abertura']} value={trades.type} onChange={selectType} disabled={disabled} />
    <DropDown label="Estratégia" options={['Topo / Fundo', 'Fecha Fora / Fecha Dentro', '3x1', 'Fabolous 4']} value={trades.strategy} onChange={selectStrategy} disabled={disabled} />
  </Container>
)

Header.defaultProps = {
  className: '',
  disabled: true,
}

Header.propTypes = {
  trades: PropTypes.object.isRequired,
  className: PropTypes.string,
  selectStock: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired,
  selectStrategy: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Header
