import React from 'react'
import styled from 'styled-components'

import Header from '../Header'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  justify-content: space-evenly;
  width: 49%;
  border: solid 1px #000000;
  border-radius: 12px;
  background-color: #AACAA2; //#E3E0E0;
  padding: 0.5%;
`

const FirstLine = styled(Header)`
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: start;
`

const TradingCard = () => (
  <Container>
    <FirstLine />
  </Container>
)

export default TradingCard
