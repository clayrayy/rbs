import React from 'react'
import { Container, ItemList, Item, Text } from './styles/profile'

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Profile.ItemList = function ProfileItemList({ children, ...restProps }) {
  return <ItemList {...restProps}>{children}</ItemList>
}

Profile.Item = function ProfileItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}
Profile.Text = function ProfileText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
