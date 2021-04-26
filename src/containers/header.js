// *****address problems refactoring addbehavor and addclient into remote components
//REFACTOR FOR THE RADIO BUTTONS TO NOT BE GLOBALLY STYLED

import React, { useState, useContext } from 'react'
import { Header, AddItemForm, Form, CardModal } from '../components'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { useAuthListener } from 'hooks'
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ data, title, addIcon, name, backIcon, showMenu, backFromDatasheet, sessionActive, subtitle }) {
    const [menuOpen, setMenuOpen] = useState(false) // activates slideout menu
    const [addClientFormOpen, setAddClientFormOpen] = useState(false) // activates slideout menu to add client
    const [firstName, setFirstName] = useState('') //sets add client first name
    const [lastName, setLastName] = useState('') //sets add client first name
    const [confirmEndSessionActive, setConfirmEndSessionActive] = useState(false)
    const [backActive, setBackActive] = useState(false) //activates change to animate back icon
    let history = useHistory()
    const { user } = useAuthListener()
    const { firebase } = useContext(FirebaseContext)
    const db = firebase.firestore()

    function goBack() {
        if (sessionActive) {
            setConfirmEndSessionActive(true)
        }
        else {
            setTimeout(() => {
                history.goBack()
            }, 400)
        }
    }

    function formatClientName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            console.log('Sign-out successful.')
        }).catch((error) => {
            console.log(error)
        });
    }

    const addNewClient = e => {
        e.preventDefault()
        setAddClientFormOpen(false)
        db.collection(`clients`).doc().set({
            first: firstName,
            last: lastName,
            ownerUid: user.email,

        })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    return (
        <Header>
            <CardModal blackout={confirmEndSessionActive} bringForward={confirmEndSessionActive}>
                <CardModal.CenterContainer>
                    <Form>
                        <Form.Title>
                            Navigating to previous page will end current session
                            <br />
                            Any trials running will be lost
                        </Form.Title>
                        <Form.Button buttonType='confirm' onClick={(e) =>{
                            e.preventDefault()
                            history.goBack()
                            }}>Confirm</Form.Button>
                        <Form.Button buttonType='cancel' onClick={(e)=> {
                            e.preventDefault()
                            setConfirmEndSessionActive(false)
                        }}>Cancel</Form.Button>
                    </Form>
                </CardModal.CenterContainer>
            </CardModal>
            <Header.IconSpacer>
                {backIcon &&
                    (<Header.BackIcon active={backActive} onClick={() => {
                        goBack()
                        !sessionActive && setBackActive(true)
                    }} />)
                }
            </Header.IconSpacer>
            <Header.TitleContainer>
                <Header.Title>{title}</Header.Title>
                {subtitle && <Header.Subtitle>{subtitle}</Header.Subtitle>}
            </Header.TitleContainer>
            <Header.IconSpacer>
                {addIcon && (
                    <Header.IconContainer name='add' hideWhen={menuOpen} open={addClientFormOpen} onClick={() => setAddClientFormOpen(!addClientFormOpen)}><Header.AddItemIcon
                        open={addClientFormOpen}
                    /></Header.IconContainer>)
                }
                {showMenu !== 'false' &&
                    <Header.IconContainer name='menu' hideWhen={addClientFormOpen} open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                        <Header.Hamburger open={menuOpen} />
                    </Header.IconContainer>}
            </Header.IconSpacer>
            <Header.AddItemForm open={addClientFormOpen}>
                {name === 'clients' &&
                    (
                        <Form>
                            <Form.Base formType='add-client' >
                                <Form.Title>Enter Client Name</Form.Title>
                                <Form.Input
                                    formType='add-client'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={({ target }) => setFirstName(formatClientName(target.value))}
                                />
                                <Form.Input
                                    formType='add-client'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={({ target }) => setLastName(formatClientName(target.value))}
                                />
                                <Form.Button formType='add-client' onClick={addNewClient}>Add Client</Form.Button>
                            </Form.Base>
                        </Form>
                    )
                }
            </Header.AddItemForm >
            <Header.MenuDiv open={menuOpen}>
                <Header.Menu>
                    <Header.MenuItem>
                        <Header.MenuLink to={ROUTES.PROFILE}>Profile</Header.MenuLink>
                    </Header.MenuItem>
                    <Header.MenuItem>
                        <p>About RBS Data</p>
                    </Header.MenuItem>
                    <Header.MenuItem>
                        <p onClick={signOut}>Sign Out</p>
                    </Header.MenuItem>
                </Header.Menu>
            </Header.MenuDiv>

        </Header>
    )
}
// GET ABBREVIATED NAME SNIPPET
// `${firstName.charAt(0).toUpperCase()}${firstName.charAt(1).toLowerCase()}${lastName.charAt(0).toUpperCase()}${lastName.charAt(1).toLowerCase()}`