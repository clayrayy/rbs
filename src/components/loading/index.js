import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { 
    Container,
    Text
 } from './styles/loading'

export default function Loading({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Loading.Text = function LoadingText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}