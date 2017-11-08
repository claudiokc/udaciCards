import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { fetchAllDeck } from '../actions/index'
import { white, blue, gray } from '../helpers/colors'
import { setLocalNotification } from '../helpers/helpers'

const DeckWrapper = styled.TouchableHighlight`
  background-color: ${white};
  height: 200px;
  padding: 30px 20px;
  margin-horizontal: 15;
  margin-top: 10;
  margin-bottom: 15;
  border-radius: 2px;
  elevation: 5;
  shadow-color: blue;
  justify-content: center;
  align-items: center;
`
const Container = styled.View`
  background-color: ${white};
  height: 200;
  padding-horizontal: 20;
  padding-vertical: 30;
  margin-horizontal: 15;
  margin-top: 10;
  margin-bottom: 15;
  border-radius: 2px;
  elevation: 4;
  shadow-color: blue;
  justify-content: center;
  align-items: center;`

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
  justifyContent = 'center';
  paddingTop = '5';
  background-color: ${gray};
`

function Deck({ title, questions, press }) {
  return (
    <DeckWrapper onPress={press}>
      <Container>
        <DeckTitle>{title}</DeckTitle>
        <DeckCardsCount>{questions.length} cards</DeckCardsCount>
      </Container>
    </DeckWrapper>
  )
}

class DeckListView extends Component {
  componentDidMount(){
    setLocalNotification()
    this.props.fetchAllDeck()
  }

  selectDeck = (title) => {
    this.props.navigation.navigate('SoloDeckView', {id: title})
  }

  renderItem = ({ item }) => <Deck {...item} press={() => this.selectDeck(item.title)} />

  render() {
    const { decks } = this.props

    return (
      <Wrapper>
        {decks.length > 0 ? (
          <FlatList data={decks} renderItem={this.renderItem} keyExtractor={item => item.title} />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 26 }}>Your deck is empty.</Text>
          </View>
        )}
      </Wrapper>
    )
  }
}

const mapStateToProps = decks => {
  return {
    decks: Object.values(decks).map(deck => deck)
  }
}

export default connect(mapStateToProps, { fetchAllDeck })(DeckListView)