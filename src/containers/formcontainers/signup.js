import { useAuthListener } from 'hooks'
import React, { useState, useContext } from 'react'
import { Form } from '../../components'
// import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../context/firebase'
// import * as ROUTES from '../constants/routes'

export function SignupFormContainer() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [verifiedPassword, setVerifiedPassword] = useState('')
    const [error, setError] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    // const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const { user } = useAuthListener()
    var db = firebase.firestore()

    const fields = [firstName, lastName, emailAddress, password, verifiedPassword]

    let isInvalid = (fields.some(field => field === ''))

    // if(password !== verifiedPassword) {
    //     setError('password does not match')
    // }

    const handleSignup = (e) => {
        e.preventDefault()
        if (password !== verifiedPassword) {
            setError('Password does not match')
            setPasswordError(true)
        } else (
            firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password)
                .then((result) =>
                    result.user
                        .updateProfile({
                            displayName: `${firstName} ${lastName}`
                        })

                )
                .then(db.collection('users').doc().set({
                    first: firstName,
                    last: lastName,
                    uid: emailAddress
                }))
                .catch((error) => {
                    setPasswordError('')
                    setFirstName('')
                    setLastName('')
                    setEmailAddress('')
                    setPassword('')
                    setVerifiedPassword('')
                    setError(error.message)
                })
        )

    }

    return (


        <Form>
            <Form.Base onSubmit={handleSignup}>
                <Form.Title>
                    Let's get this party started
                </Form.Title>

                <Form.Input
                    placeholder='First Name'
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                />
                <Form.Input
                    placeholder='Last Name'
                    value={lastName}
                    onChange={({ target }) => setLastName(target.value)}
                />
                <Form.Input
                    placeholder='Email'
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Input
                    pwError={passwordError}
                    placeholder='Password'
                    value={password}
                    type='password'
                    autoComplete='off'
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Input
                    pwError={passwordError}
                    placeholder='Re-enter Password'
                    value={verifiedPassword}
                    type='password'
                    autoComplete='off'
                    onChange={({ target }) => { setVerifiedPassword(target.value) }}
                />
                <Form.Button disabled={isInvalid}>Sign Up</Form.Button>
                {error && <Form.Error>{error}</Form.Error>}
            </Form.Base>
        </Form>
    )
}


// const handleSignup = (e) => {
//     e.preventDefault()
//     if (!isValid) {
//        setError('All fields are required')
//     }
//     if (password !== verifiedPassword) {
//         setError('Please check your password and try again')
//     }
//     if (isValid && verifiedPassword === password) {
//         alert('success')
//     }
// }