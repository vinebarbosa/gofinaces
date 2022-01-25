import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Feather } from '@expo/vector-icons'


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`