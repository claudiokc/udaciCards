import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppButton from './AppButton'
import { getDeck } from '../utils/api'
import { white, gray, blue } from '../helpers/colors'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
`
const DeckDetail = styled.View`
    flex: 0.5;
    justifyContent: center;
    alignItems: center;
`
const Title = styled.Text`
    fontSize: 30;
    textAlign: center;
    marginBottom: 10;
`
const Cards = styled.Text`
    fontSize: 20;
    color: gray;
`
const ButtonAction = styled.View`
    flex: 0.5;
    alignItems: center;
`

class SoloDeckView extends Component {
  state = {
    deck: {},
    ready: false
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params

    getDeck(id).then(deck => this.setState(() => ({ deck, ready: true })))
  }

  handleSubmit = () => {
    console.log('handle submit')
  }

  addNewCard = title => {
    this.props.navigation.navigate('NewCardView', { title })
  }

  render() {
    const { deck, ready } = this.state

    return (
      <Container>
        {ready === true ? (
          <DeckDetail>
            <Title>{deck.title}</Title>
            <Cards>{deck.questions.length} cards</Cards>
          </DeckDetail>
        ) : (
          <Text>Loading</Text>
        )}

        <ButtonAction>
          <AppButton
            press={this.addNewCard(deck.title)}
            backgroundColor={white}
            borderColor={blue}
            title="Add Card"
          />
          <AppButton
            press={this.handleSubmit}
            backgroundColor={blue}
            borderColor={blue}
            color={white}
            title="Start Quiz"
          />
        </ButtonAction>
      </Container>
    )
  }
}

export default SoloDeckView