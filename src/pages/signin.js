import React from 'react'
import { HeaderContainer } from '../containers/header'
import { SigninFormContainer } from '../containers/formcontainers/signin.js'

export default function Signin() {
    return (
        <>
            <HeaderContainer backIcon='true' title='Sign In' />
            <SigninFormContainer />
        </>
    )
}