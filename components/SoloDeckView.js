import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import AppButton from './AppButton'
import { white, gray, blue, red } from '../helpers/colors'
import styled from 'styled-components/native'
import { connect } from 'react-redux'

const Container = styled.View`
  flex: 1;
`
const DeckDetail = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 30;
  text-align: center;
  margin-bottom: 10;
`
const Cards = styled.Text`
  font-size: 20;
  color: gray;
`
const ButtonAction = styled.View`
  flex: 0.5;
  align-items: center;
`

class SoloDeckView extends PureComponent {
  state = {
    error: false
  }

  addNewCard = title => {
    this.setState(() => ({ error: false }))
    this.props.navigation.navigate('NewCardView', { title })
  }

  startQuiz = deck => {
    if (deck.questions.length === 0) {
      this.setState(() => ({ error: true }))
    } else {
      this.setState(() => ({ error: false }))
      this.props.navigation.navigate('QuizView', { deck })
    }
  }

  render() {
    const { id } = this.props.navigation.state.params
    const { decks } = this.props
    const { error } = this.state

    return (
      <Container>
          <DeckDetail>
            <Title>{decks[id].title}</Title>
            <Cards>{decks[id].questions.length} cards</Cards>
          </DeckDetail>
          <ButtonAction>
            <AppButton
              press={() => this.addNewCard(decks[id].title)}
              backgroundColor={white}
              borderColor={blue}
              title="Add Card"
            />
            <AppButton
              press={() => this.startQuiz(decks[id])}
              backgroundColor={blue}
              borderColor={blue}
              color={white}
              title="Start Quiz"
            />
          </ButtonAction>
          <Text style={{ color: red }}>{error && 'Please add at least 1 card.'}</Text>
      </Container>
    )
  }
}

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, null)(SoloDeckView)