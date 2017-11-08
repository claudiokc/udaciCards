import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import MainNavigator from './components/Tabs'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { lightGray } from './helpers/colors'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}