import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native'
import { addCardToDeck } from '../utils/api'
import AppButton from './AppButton'
import { blue, white } from '../helpers/colors'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { addNewCard } from '../actions'
import { NavigationActions } from 'react-navigation'

const Input = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 8px;
  padding-left: 4px;
`
const Wrapper = styled.KeyboardAvoidingView`
  padding-horizontal: 20;
  padding-vertical: 50;
`
const ErrorText = styled.Text`
  color: red;
  padding-left: 4;
`

class NewCardView extends Component {
  state = {
    question: '',
    answer: '',
    questionError: false,
    answerError: false
  }

  handleQuestion = e => {
    this.setState(() => ({ question: e, questionError: false }))
  }

  handleAnswer = e => {
    this.setState(() => ({ answer: e, answerError: false }))
  }

  handleSubmit = () => {
    const { title } = this.props.navigation.state.params
    const { question, answer } = this.state

    if (question !== '' && answer !== '') {
      let card = {
        question,
        answer
      }

      this.props.addNewCard(title, card)
      this.setState(() => ({
        question: '',
        answer: '',
        questionError: false,
        answerError: false
      }))
      this.props.navigation.goBack()
      Keyboard.dismiss()
    } else if (question === '') {
      this.setState(() => ({ questionError: true }))
    } else if (answer === '') {
      this.setState(() => ({ answerError: true }))
    }
  }

  render() {
    const { question, answer, questionError, answerError } = this.state

    return (
      <Wrapper behavior="padding">
        <View style={{ marginBottom: 40 }}>
          <Input
            placeholder="What is the question?"
            onChangeText={this.handleQuestion}
            value={question}
            error={questionError}
          />
          <ErrorText>{questionError && 'Please fill in the question'}</ErrorText>
        </View>

        <View style={{ marginBottom: 40 }}>
          <Input
            placeholder="What is the answer?"
            onChangeText={this.handleAnswer}
            value={answer}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <AppButton
            press={this.handleSubmit}
            backgroundColor={blue}
            borderColor={blue}
            color={white}
            title="Submit"
          />
        </View>
      </Wrapper>
    )
  }
}

export default connect(null, { addNewCard })(NewCardView)