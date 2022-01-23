import React from 'react'
import { Card } from '../../components/Card'
import { 
  TransactionCard,
  TransactionCardProps
 } from '../../components/TransactionCard'

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Avatar,
  User,
  Greeting,
  UserName,
  Icon,
  CardsArea,
  Transactions,
  Title,
  TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:'Desenvolvimento de site',
      amount:'R$ 12.000,00',
      category:{
        name: 'Vendas',
        icon: "dollar-sign"
      },
      date:'13/04/2020' 
    },

    {
      id: '2',
      type: 'negative',
      title:'Hamburgueria Pizzy',
      amount:'R$ 59,00',
      category:{
        name: 'Alimentação',
        icon: "coffee"
      },
      date:'10/04/2020' 
    },

    {
      id: '3',
      type: 'negative',
      title:'Aluguel do apartamento',
      amount:'R$ 600,00',
      category:{
        name: 'Casa',
        icon: "shopping-bag"
      },
      date:'10/04/2020' 
    },
  ]
  return (
    <Container>
     <Header>
       <UserWrapper>
        <UserInfo>
          <Avatar source={{
            uri: 'https://avatars.githubusercontent.com/u/46247193?v=4'
          }} />
          <User>
            <Greeting>Olá</Greeting>
            <UserName>Vinícios</UserName>
          </User>
        </UserInfo>
        <Icon name="power" />
       </UserWrapper>
     </Header>
     
     <CardsArea>
      <Card
        type="up"
        title="Entradas"
        amount="R$ 17.400,00"
        lastTransaction='Última entrada dia 13 de abril'
      />
      <Card
        type="down"
        title="Saídas"
        amount="R$ 1.290,85"
        lastTransaction='Última saída dia 03 de abril'
      />
      <Card
        type="total"
        title="Total"
        amount="R$ 16.109,15"
        lastTransaction='01 à 16 de abril'
      />
     </CardsArea>
     
     <Transactions>
       <Title>Transações</Title>

       <TransactionList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard data={item} />}
       />
       
     </Transactions>
    </Container>
  )
}
