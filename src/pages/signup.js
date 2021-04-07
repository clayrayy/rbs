import React from 'react'
import { HeaderContainer } from '../containers/header'
import { SignupFormContainer } from '../containers/formcontainers/signup'

export default function Signup() {
    return (
        <>
            <HeaderContainer backIcon='true' title='Sign Up' />
            <SignupFormContainer />
        </>
    )
}
