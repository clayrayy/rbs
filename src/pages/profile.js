import { HeaderContainer } from 'containers/header'
import { ProfileContainer } from 'containers/profile'
import React from 'react'

export default function Profile() {
    return (
        <>
        <HeaderContainer
            backIcon='true'
            title='Profile'
            />
        <ProfileContainer />
        </>
    )
}