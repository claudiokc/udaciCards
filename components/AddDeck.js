import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { white, blue, gray } from '../helpers/colors'
import { AppTextInput, ViewWrapper } from './Base'

const DeckView = styled.View`padding: 30px 20px;`

const DeckTitle = styled.Text`
  font-size: 26px;
  text-align: center;
`

class AddDeckView extends Component {
  render() {
    return (
         <DeckView>
           <DeckTitle>What is the title of your new deck?</DeckTitle>
         </DeckView>
    )
  }
}

export default AddDeckView