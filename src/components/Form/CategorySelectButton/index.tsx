import React from 'react'

import { Container, Text, Icon } from './styles'

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title='Categoria', onPress } : Props) {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
      <Icon name="chevron-down" />
    </Container>
  )
}