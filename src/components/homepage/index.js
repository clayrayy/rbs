import React from 'react'
import { Container, Text, Title, ButtonLink } from './styles/homepage'

export default function Homepage({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Homepage.ButtonLink = function HomepageButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Homepage.Title = function HomepageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Homepage.Text = function HomepageText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
