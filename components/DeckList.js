import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { white, blue, gray } from '../helpers/colors'

const DeckWrapper = styled.View`
  background-color: ${white};
  height: 200px;
  padding: 30px 20px;
  margin: 15px;
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
const Wrapper = styled.View`
  flex: 1;
  background-color: ${gray};
`

function ViewWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}

function Deck({ title, cards }) {
  return (
    <DeckWrapper>
      <DeckTitle>{title}</DeckTitle>
      <DeckCardsCount>{cards} cards</DeckCardsCount>
    </DeckWrapper>
  )
}

class DeckListView extends Component {
  state = {
    decks: [
      { title: 'React', cards: 5, key: '1' },
      { title: 'AngularJS', cards: 5, key: '2' },
      { title: 'Python', cards: 5, key: '4' }
    ]
  }

  render() {
    return (
      <ViewWrapper>
        <FlatList data={this.state.decks} renderItem={({ item }) => <Deck key={item.key} {...item} />}/>
      </ViewWrapper>
    )
  }
}

export default DeckListView