import React, { Component } from 'react'
import { View, Text, FlatList, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'
import AppButton from './AppButton'
import { white, blue, gray, lightGray, black } from '../helpers/colors'
import { saveDeckTitle } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { createNewDeck } from '../actions/index'

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
const ButtonText = styled.Text`
  font-size: 36;
  text-align: center;
  margin-bottom: 40;
`
const Button = styled.View`
  width: 100%;
  background-color: ${blue};
  border-radius: 2;
`

class AddDeckView extends Component {
  state = {
    title:''
  }

  handleSubmit = () => {
    const { title } = this.state
    this.props.createNewDeck(title)
    saveDeckTitle(title)
    this.setState({title:''})
    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: 'AddDeckView'
      })
    )
  }

  render() {
    return (
      <Wrapper>
         <DeckView>
           <Header>What is the title of your new deck?</Header>
           <Input
            underlineColorAndroid={blue}
            placeholder="Deck Title"
            selectionColor={blue}
            borderColor={blue}
            onChangeText={title => this.setState({ title})}
            value={this.state.title}/>
            <View>
              <TouchableHighlight
                onPress={this.handleSubmit}>
                <Button>
                  <ButtonText>SUBMIT</ButtonText>
                </Button>
              </TouchableHighlight>
            </View>
         </DeckView>
       </Wrapper>
    )
  }
}

export default connect(null, { createNewDeck })(AddDeckView)