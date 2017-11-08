import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AppButton from './AppButton'
import { blue, white, red, green } from '../helpers/colors'
import styled from 'styled-components/native'
import { NavigationActions } from 'react-navigation'
import { percentageCalculation, clearLocalNotification, setLocalNotification} from '../helpers/helpers'

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20;
  padding-top: 5;
`
const QuizWrapper = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`
const AnswerWrapper = styled.View`
  align-items: center;
`
const LinkText = styled.Text`
  font-size: 16;
  font-weight: bold;
  text-align: center;
  width: 200;
  padding-vertical: 10;
`
const QuestionAndAnswer = styled.Text`
  font-size: 40;
  margin-bottom: 10;
  text-align: center;
`
const Percentage = styled.Text`
  font-size: 40;
  margin-Bottom: 10;
  text-align: center;
`

function  ResultView({ percent, correct, questionLength, onQuizRestart, goBackToDeck }) {
  return (
    <View style={{ flex: 1 }}>
      <QuizWrapper>
        <Text style={{ fontSize: 36 }}>You have answered</Text>
        <Percentage>{percent} %</Percentage>
        <Text style={{ fontSize: 36, marginBottom: 20 }}>correct!</Text>
        <Text style={{ fontSize: 16 }}>
          {correct} / {questionLength}
        </Text>
      </QuizWrapper>

      <View style={{ alignItems: 'center' }}>
        <AppButton
          press={onQuizRestart}
          backgroundColor={green}
          borderColor={green}
          color={white}
          title="Restart Quiz"
        />

        <AppButton
          press={goBackToDeck}
          backgroundColor={blue}
          borderColor={blue}
          color={white}
          title="Back to Deck"
        />
      </View>
    </View>
  )
}

function PlayingView({current, correct, questions, showAnswer, onCorrectAnswered, onIncorrectAnswered, onShowAnswer }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18 }}>
        {current + 1} / {questions.length}
      </Text>

      <QuizWrapper>
        <QuestionAndAnswer>
          {showAnswer ? questions[current].answer : questions[current].question}
        </QuestionAndAnswer>
        <TouchableOpacity onPress={onShowAnswer}>
          <LinkText style={{ color: red }}>{showAnswer ? 'Question' : 'Answer'}</LinkText>
        </TouchableOpacity>
      </QuizWrapper>

      <AnswerWrapper>
        <AppButton
          press={onCorrectAnswered}
          backgroundColor={green}
          borderColor={green}
          color={white}
          title="Correct"
        />

        <AppButton
          press={onIncorrectAnswered}
          backgroundColor={red}
          borderColor={red}
          color={white}
          title="Incorrect"
        />
      </AnswerWrapper>
    </View>
  )
}

class QuizView extends Component {
  state = {
    current: 0,
    correct: 0,
    questionLength: 0,
    percent: 0,
    showAnswer: false
  }

  componentDidMount() {
    const { questions } = this.props.navigation.state.params.deck
    this.setState(() => ({ questionLength: questions.length }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { questionLength, correct, current } = this.state
    if (current !== prevState.current) {
      if (current === questionLength) {
        let percent = percentageCalculation(correct, questionLength)
        this.setState(() => ({ percent }))
        clearLocalNotification().then(setLocalNotification)
      }
    }
  }

  correctAnswered = () => {
    this.setState(state => ({
      current: state.current + 1,
      correct: state.correct + 1,
      showAnswer: false
    }))
  }

  incorrectAnswered = () => {
    this.setState(state => ({
      current: state.current + 1,
      showAnswer: false
    }))
  }

  onShowAnswer = () => {
    this.setState(state => ({ showAnswer: !state.showAnswer }))
  }

  onQuizRestart = () => {
    this.setState(() => ({
      current: 0,
      correct: 0,
      percent: 0,
      showAnswer: false
    }))
  }

  goBackToDeck = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { current, correct, percent, questionLength } = this.state

    return (
      <Container>
        {current + 1 <= questionLength ? (
          <PlayingView
            questions={deck.questions}
            onCorrectAnswered={this.correctAnswered}
            onIncorrectAnswered={this.incorrectAnswered}
            {...this.state}
          />
        ) : (
            <ResultView
              {...this.state}
              onQuizRestart={this.onQuizRestart}
              goBackToDeck={this.goBackToDeck}
            />
        )}
      </Container>
    )
  }
}

export default QuizView