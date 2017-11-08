import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { addCardToDeck } from '../utils/api'
import AppButton from './AppButton'
import { blue, white } from '../helpers/colors'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 8px;
  padding-left: 4px;
`
const Wrapper = styled.KeyboardAvoidingView`
  paddingHorizontal: 20;
  paddingVertical: 50;
`


class NewCardView extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestion = e => {
    this.setState(() => ({ question: e }))
  }

  handleAnswer = e => {
    this.setState(() => ({ answer: e }))
  }

  handleSubmit = () => {
    const { title } = this.props.navigation.state.params
    const card = this.state
    addCardToDeck(title, card)
  }

  render() {
    const { question, answer } = this.state

    return (
      <Wrapper behavior="padding">
        <View style={{ marginBottom: 40 }}>
          <Input
            placeholder="What is the question?"
            change={this.handleQuestion}
            value={question}
          />
        </View>

        <View style={{ marginBottom: 40 }}>
          <Input
            placeholder="What is the answer?"
            change={this.handleAnswer}
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

export default NewCardView