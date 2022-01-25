import React from 'react'

import { Container, Text, Icon } from './styles'

interface Props {
  title: string;
}

export function CategorySelect({title} : Props) {
  return (
    <Container>
      <Text>{title}</Text>
      <Icon name="chevron-down" />
    </Container>
  )
}