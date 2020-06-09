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

const getStock = (stocks, callback) => (acronym) => {
  callback(stocks.find((stock) => stock.acronym === acronym))
}

const Header = ({ trades, stocks, systems, className, selectStock, selectType, selectSystem, selectStrategy, disabled }) => {
  const systemName = !!trades.system ? trades.system.name : ''
  const stockName = !!trades.stock ? trades.stock.acronym : ''

  if (!trades.stock) {
    selectStock(stocks[0])
    selectSystem(systems.filter((system) => system.stock === stocks[0].acronym)[0])
  }

  return (
    <Container className={className}>
      <DropDown label="Ativo" options={stocks.map(({ acronym }) => ({ id: acronym, text: acronym }))} value={stockName} onChange={getStock(stocks, selectStock)} disabled={disabled} />
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
  stocks: PropTypes.array.isRequired,
  systems: PropTypes.array.isRequired,
  className: PropTypes.string,
  selectStock: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired,
  selectSystem: PropTypes.func.isRequired,
  selectStrategy: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Header
