import { Card, CardModal } from 'components'
import React from 'react'

export function TestCardContainer() {
    return <Card>
        <CardModal></CardModal>
        <Card.LeftContainer>
            <Card.Title>Left</Card.Title>
        </Card.LeftContainer>

        <Card.CenterContainer>
            <Card.Title>Center</Card.Title>
        </Card.CenterContainer>

        <Card.RightContainer>
            <Card.Title>Right</Card.Title>
        </Card.RightContainer>

    </Card>
}