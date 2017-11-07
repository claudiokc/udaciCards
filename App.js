import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import Tabs from './components/Tabs'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const lightGray = '#f9f9f9'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1, backgroundColor: lightGray}}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}