import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Start from '../Start'


const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-row-gap: 8%;
  justify-content: space-evenly;
  width: 49%;
  border: solid 1px #000000;
  border-radius: 12px;
  background-color: #AACAA2;
  padding: 0.5%;
`

const FirstLine = styled(Header)`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: start;
`

const SecondLine = styled(Start)`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: start;
`

const TradingCard = () => (
  <Container>
    <FirstLine />
    <SecondLine />
  </Container>
)

export default TradingCard
