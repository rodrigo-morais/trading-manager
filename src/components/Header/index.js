import React from 'react'
import styled from 'styled-components'

import DropDown from '../shared/DropDown'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 26.66% 26.66% 26.66%;
  justify-content: space-evenly;
  min-width: 100%;
`

const DropDownLeft = styled(DropDown)`
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: start;
`
const DropDownMiddle = styled(DropDown)`
  grid-column-start: 3;
  grid-column-end: 3;
  justify-self: center;
`

const DropDownRight = styled(DropDown)`
  grid-column-start: 6;
  grid-column-end: 6;
  justify-self: end;
`

const Header = () => (
  <Container>
    <DropDownLeft label="Ativo" options={['WINM20', 'WDON20']} />
    <DropDownMiddle label="Tipo" options={['Pregão', 'Abertura']} />
    <DropDownRight label="Estratégia" options={['Topo / Fundo', 'Fecha Fora / Fecha Dentro', '3x1', 'Fabolous 4']} />
  </Container>
)

export default Header
