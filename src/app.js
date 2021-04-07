import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {DataSheet, Signup, Signin, ClientList, Home, Profile} from './pages'
import * as ROUTES from './constants/routes'
import { useAuthListener } from 'hooks'

import { IsUserRedirect, ProtectedRoute } from 'helpers/routes'




function App() {
    const { user } = useAuthListener()
  
    return (
    <Router>
        <Switch>

            <IsUserRedirect user={user} loggedInPath={ROUTES.CLIENT_LIST} path={ROUTES.SIGN_IN}>
                <Signin />
            </IsUserRedirect>

            <IsUserRedirect user={user} loggedInPath={ROUTES.CLIENT_LIST} path={ROUTES.SIGN_UP}><Signup /></IsUserRedirect>

            <ProtectedRoute user={user}  path={ROUTES.DATASHEET} loggedInPath={ROUTES.DATASHEET}><DataSheet /></ProtectedRoute>

            <ProtectedRoute user={user}  path={ROUTES.CLIENT_LIST} loggedInPath={ROUTES.CLIENT_LIST}><ClientList /></ProtectedRoute>

            <ProtectedRoute user={user}  path={ROUTES.PROFILE} loggedInPath={ROUTES.HOME}><Profile /></ProtectedRoute>
            
            <IsUserRedirect user={user} loggedInPath={ROUTES.CLIENT_LIST} path={ROUTES.HOME}><Home /></IsUserRedirect> 


        </Switch>
    </Router>


    )
}

export default App