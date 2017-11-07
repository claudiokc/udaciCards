import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import { blue, gray } from '../helpers/colors'

const Input = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 8px;
  padding-left: 4px;
`

const Wrapper = styled.View`
  flex: 1;
`

function ViewWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export default ViewWrapper