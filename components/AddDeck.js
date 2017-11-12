import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  Keyboard } from 'react-native'
import styled from 'styled-components/native'
import { white, blue, gray, lightGray, black, red } from '../helpers/colors'
import { saveDeckTitle } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { createNewTitle, createDeck } from '../actions'
import AppButton from './AppButton'

const DeckView = styled.View`padding: 30px 20px;`

const DeckTitle = styled.Text`
  font-size: 26px;
  text-align: center;
`
const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  padding-horizontal: 20;
`
const Input = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 8px;
  padding-left: 4px;
`
const Header = styled.Text`
  color: ${black};
  text-align: center;
  font-size: 30;
  padding-vertical: 12;
  margin-bottom: 10;
`
const ButtonView = styled.View`
  align-items: center;
  margin-top: 20;
`
const Button = styled.View`
  width: 100%;
  background-color: ${blue};
  border-radius: 2;
`
const ErrorText = styled.Text`
  color: red;
  padding-left: 4;
`


class AddDeckView extends Component {
  state = {
    title:'',
    error: false,
    duplicate: false
  }

  handleSubmit = () => {
    const { title } = this.state
    const { decks } = this.props

    if (title !== '') {
      if (decks[title] === undefined) {
        this.props.createDeck(title)
        this.setState(() => ({ title: '', error: false, duplicate: false }))
        this.toDeck(title)
        Keyboard.dismiss()
      } else {
        this.setState(() => ({ duplicate: true }))
      }
    } else {
      this.setState(() => ({ error: true }))
    }
  }

  handleTitle = e => {
    this.setState(() => ({
      title: e,
      error: false,
      duplicate: false
    }))
  }

  toDeck = title => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'SoloDeckView',
        params: { id: title }
      })
    )
  }

  render() {
    const {title, error, duplicate} = this.state
    return (
      <Wrapper behavior="padding">
         <DeckView>
           <Header>What is the title of your new deck?</Header>
           <Input
            underlineColorAndroid={blue}
            placeholder="Deck Title"
            selectionColor={blue}
            borderColor={blue}
            placeholderTextColor={error ? red : gray}
            onChangeText={this.handleTitle}
            value={this.state.title}
            error={error || duplicate}/>
            <ErrorText>
              {error && 'Please fill in the deck title'}
              {duplicate && 'Title already exists'}
            </ErrorText>
            <ButtonView>
              <AppButton
                press={this.handleSubmit}
                backgroundColor={blue}
                borderColor={blue}
                color={white}
                title="Create Deck"
              />
            </ButtonView>
         </DeckView>
       </Wrapper>
    )
  }
}

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, { createNewTitle, createDeck })(AddDeckView)