import React from 'react'
import Homepage from 'components/homepage'
import { HeaderContainer } from 'containers/header'
import * as ROUTES from 'constants/routes'
import { SigninFormContainer } from '../containers/formcontainers/signin.js'

export default function Home() {

    return (
        <>
        <HeaderContainer 
            title='Home' 
            backIcon='false'
            showMenu='false'
        />
        <Homepage>
            <Homepage.Title>Log in </Homepage.Title>
            <SigninFormContainer />
            <Homepage.Text>Need an account?</Homepage.Text>
            <Homepage.ButtonLink to={ROUTES.SIGN_UP}>Click here to sign up.</Homepage.ButtonLink>
        </Homepage>
        </>
    )
}

