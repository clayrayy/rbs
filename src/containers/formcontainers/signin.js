import React, { useState, useContext } from 'react'
import {  Form } from '../../components'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../context/firebase'
import * as ROUTES from '../../constants/routes'

export function SigninFormContainer() {
    const history = useHistory()
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const fields = [emailAddress, password]
    const { firebase } = useContext(FirebaseContext)
    
    const isInvalid = fields.some(field => field === '')

    function handleSignin(e) {
        e.preventDefault()
        
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.CLIENT_LIST)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }
    return (
            <Form>
                <Form.Base formType='sign-in' onSubmit={handleSignin} method="POST">
                    <Form.Input
                        placeholder='Email'
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder='Password'
                        value={password}
                        type='password'
                        autoComplete='off'
                        onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Button  type='submit'>Sign In</Form.Button>
                    {error && <Form.Error>{error}</Form.Error>}
                </Form.Base>
            </Form>
        
    )
}