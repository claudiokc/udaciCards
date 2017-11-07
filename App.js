import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import Tabs from './components/Tabs'

const blue = '#50bdff'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    )
  }
}