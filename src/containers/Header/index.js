import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DropDown from '../../components/shared/DropDown'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 18% 18% 30% 30%;
  justify-content: space-evenly;
  min-width: 100%;
`

const getSystem = (systems, callback) => (id) => {
  callback(systems.find((system) => system.id === id))
}

const Header = ({ trades, systems, className, selectStock, selectType, selectSystem, selectStrategy, disabled }) => {
  const systemName = !!trades.system ? trades.system.name : ''

  if (!trades.system) {
    selectSystem(systems.filter((system) => system.stock === trades.stock.substr(0, 3))[0])
  }

  return (
    <Container className={className}>
      <DropDown label="Ativo" options={['WINM20', 'WDON20']} value={trades.stock} onChange={selectStock} disabled={disabled} />
      <DropDown label="Tipo" options={['Pregão', 'Abertura']} value={trades.type} onChange={selectType} disabled={disabled} />
      <DropDown label="Sistema" options={systems.map(({ id, name }) => ({ id, text: name }))} value={systemName} onChange={getSystem(systems, selectSystem)} disabled={disabled} />
      <DropDown label="Estratégia" options={['Topo / Fundo', 'Fecha Fora / Fecha Dentro', '3x1', 'Fabolous 4']} value={trades.strategy} onChange={selectStrategy} disabled={disabled} />
    </Container>
  )
}

Header.defaultProps = {
  className: '',
  disabled: true,
}

Header.propTypes = {
  trades: PropTypes.object.isRequired,
  systems: PropTypes.array.isRequired,
  className: PropTypes.string,
  selectStock: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired,
  selectSystem: PropTypes.func.isRequired,
  selectStrategy: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Header
