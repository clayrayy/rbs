// *****address problems refactoring addbehavor and addclient into remote components
//REFACTOR FOR THE RADIO BUTTONS TO NOT BE GLOBALLY STYLED

import React, { useState, useContext } from 'react'
import { Header, AddItemForm } from '../components'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { useAuthListener } from 'hooks'
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ data, title, addIcon, name, backIcon, showMenu, backFromDatasheet, openClient }) {
    const [menuOpen, setMenuOpen] = useState(false) // activates slideout menu
    const [addClientFormOpen, setAddClientFormOpen] = useState(false) // activates slideout menu to add client
    const [firstName, setFirstName] = useState('') //sets add client first name
    const [lastName, setLastName] = useState('') //sets add client first name
    const [showEditBehaviors, setShowEditBehaviors] = useState(false)
    const [inputType, setInputType] = useState('') //sets whether to add rate or duration tracker
    const [backActive, setBackActive] = useState(false) //activates change to animate back icon
    const [behaviorName, setBehaviorName] = useState('')
    let history = useHistory()
    const { user } = useAuthListener()
    const { firebase } = useContext(FirebaseContext)
    const db = firebase.firestore()

    function goBack() {
        // setBackActive(true)
        setTimeout(() => {
            history.goBack()
        }, 400)
        
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

    const handleAddNewTracker = (e) => {
        e.preventDefault()

        if (inputType === 'duration') {
            setAddClientFormOpen(false)
            db.collection('behaviors').add({
                behaviorName: behaviorName,
                clientId: openClient.id,
            })
            .then(() => {
                setInputType('')
                setBehaviorName('')
            }
            )
        }
    }

    return (
        <Header>
            <Header.IconSpacer>
                {backIcon &&
                    (<Header.BackIcon active={backActive} onClick={backFromDatasheet ? backFromDatasheet : ()=> {
                        goBack()
                        setBackActive(true)
                    }} />)
                }
            </Header.IconSpacer>
            <Header.Title>{title}</Header.Title>
            <Header.IconSpacer>
                {addIcon && (
                    <Header.IconContainer  name='add' hideWhen={menuOpen} open={addClientFormOpen} onClick={() => setAddClientFormOpen(!addClientFormOpen)}><Header.AddItemIcon
                        open={addClientFormOpen}
                    /></Header.IconContainer>)
                }
                {showMenu !== 'false' &&
                    <Header.IconContainer name='menu' hideWhen={addClientFormOpen} open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                        <Header.Hamburger open={menuOpen} />
                    </Header.IconContainer>}
            </Header.IconSpacer>
            <Header.AddItemForm open={addClientFormOpen}>
                {name === 'behaviors' &&
                    (
                        <AddItemForm>
                            <AddItemForm.Base onSubmit={handleAddNewTracker}>
                                <AddItemForm.Title>Type</AddItemForm.Title>
                                <AddItemForm.TypeButtonContainer>
                                    <AddItemForm.TypeSelectorFrame>
                                        <label className='radio'><AddItemForm.TypeSelector
                                            id='frequency'
                                            name='frequency'
                                            onChange={({ target }) => { setInputType(target.name) }}
                                            value={inputType}
                                            checked={inputType === 'frequency'}
                                            
                                        /><span>Rate</span></label>
                                    </AddItemForm.TypeSelectorFrame>
                                    <AddItemForm.TypeSelectorFrame>
                                        <label className='radio'>
                                            <AddItemForm.TypeSelector
                                                id='duration'
                                                name='duration'
                                                onChange={({ target }) => setInputType(target.name)}
                                                value={inputType}
                                                checked={inputType === 'duration'}
                                            /><span>Duration</span></label>
                                    </AddItemForm.TypeSelectorFrame>
                                </AddItemForm.TypeButtonContainer>
                                <AddItemForm.Title>Behavior name</AddItemForm.Title>
                                <AddItemForm.Input
                                    onChange={({ target }) => setBehaviorName(target.value)}
                                    value={behaviorName}
                                    placeholder='Behavior Name'
                                    
                                />
                                <AddItemForm.Submit type='submit'>Add Tracker</AddItemForm.Submit>
                            </AddItemForm.Base>
                        </AddItemForm>
                    )}
                {name === 'clients' &&
                    (
                        <AddItemForm>
                            <AddItemForm.Base onSubmit={addNewClient}>
                                <AddItemForm.Title>Enter Client Name</AddItemForm.Title>
                                <AddItemForm.Input
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={({ target }) => setFirstName(formatClientName(target.value))}
                                />
                                <AddItemForm.Input
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={({ target }) => setLastName(formatClientName(target.value))}
                                />
                                <AddItemForm.Submit>Add Client</AddItemForm.Submit>
                            </AddItemForm.Base>
                        </AddItemForm>
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
                        {/* <p onClick={setShowEditBehaviors(true)}>Edit Behaviors</p> */}
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