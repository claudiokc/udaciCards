import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { gray } from '../helpers/colors'

const DeckWrapper = styled.View`
  background-color: white;
  height: 200px;
  padding: 30px 20px;
  margin: 15px 15px 10px 15px;
  border-radius: 2px;
  elevation: 5;
  shadow-color: blue;
  justify-content: center;
  align-items: center;
`

const DeckTitle = styled.Text`
  font-size: 26px;
  text-align: center;
`

const DeckCardsCount = styled.Text`
  font-size: 18px;
  color: ${gray};
`

function Deck({ title, cards }) {
  return (
    <DeckWrapper>
      <DeckTitle>{title}</DeckTitle>
      <DeckCardsCount>{cards} cards</DeckCardsCount>
    </DeckWrapper>
  )
}

export default Deck