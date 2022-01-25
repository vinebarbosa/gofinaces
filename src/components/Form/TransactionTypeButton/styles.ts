import styled from 'styled-components/native'
import { css } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native'

interface Props {
  type: 'up' | 'down';
}

interface TransactionType {
  type: 'up' | 'down';
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<TransactionType>`
  width: 48%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  opacity: 1;

  ${({isActive, type}) => 
    isActive && type === 'up' && css`
      border: 0;
      background-color: ${({ theme }) => theme.colors.success_ligth};
    `
  }

  ${({isActive, type}) => 
    isActive && type === 'down' && css`
      border: 0;
      background-color: ${({ theme }) => theme.colors.attention_ligth};
    `
  }
`
export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) => type === 'up'
    ? theme.colors.success
    : theme.colors.attention
  };
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark}
`