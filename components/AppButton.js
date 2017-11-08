import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'
import styled from 'styled-components/native'

const Button = styled.View`
  width: 180;
  border-radius: 2;
  borderWidth: 1;
  marginBottom: 20;
`
const ButtonText = styled.Text`
  font-size: 18;
  text-align: center;
  padding-vertical: 12;
`

function AppButton(props) {
  const { press, title } = props
  return (
    <View>
      <TouchableOpacity onPress={press}>
        <Button>
          <ButtonText>{title}</ButtonText>
        </Button>
      </TouchableOpacity>
    </View>
  )
}

export default AppButton