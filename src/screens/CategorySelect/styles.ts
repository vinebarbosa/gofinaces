import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary };
  height: ${RFValue(90)}px;
  width: 100%;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(15)}px;
  background-color: ${({ theme, isActive }) => 
    isActive ? theme.colors.secondary_ligth : theme.colors.background
  };
  margin-bottom: 8px;
  border-radius: 5px;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px; 
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`

export const Footer = styled.View`
  margin: 24px;
`