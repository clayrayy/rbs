import React from 'react'
import { Header, Container, List, ListItem, HeaderContainer, OpenButton } from './styles/popout'

export default function Popout({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Popout.Header = function PopoutHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}
Popout.HeaderContainer = function PopoutHeaderContainer({children, ...restProps}) {
    return <HeaderContainer {...restProps}>{children}</HeaderContainer>
}

Popout.ListItem = function PopoutListItem({children, ...restProps}) {
    return <ListItem {...restProps}>{children}</ListItem>
}

Popout.List = function PopoutList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}
Popout.OpenButton = function PopoutOpenButton({children, ...restProps}) {
    return <OpenButton {...restProps}>{children}</OpenButton>
}