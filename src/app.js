import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {DataSheet, Signup, Signin, ClientList, NewClientList, Home, Profile, Session} from './pages'
import * as ROUTES from './constants/routes'
import { useAuthListener } from 'hooks'

import { IsUserRedirect, ProtectedRoute } from 'helpers/routes'




function App() {
    const { user } = useAuthListener()
  
    return (
    <Router>
        <Switch>

            

            <IsUserRedirect user={user} loggedInPath={ROUTES.CLIENT_LIST} path={ROUTES.SIGN_UP}>
                <Signup />
                </IsUserRedirect>

            <ProtectedRoute user={user}  path={ROUTES.DATASHEET} >
                <DataSheet />
                </ProtectedRoute>

            <ProtectedRoute user={user} path={ROUTES.CLIENT_LIST} >
                <NewClientList />
                </ProtectedRoute>

            <ProtectedRoute user={user}  path={ROUTES.PROFILE}>
                <Profile />
                </ProtectedRoute>
            
            <IsUserRedirect user={user} loggedInPath={ROUTES.CLIENT_LIST} exact path={ROUTES.HOME}>
                <Home />
                </IsUserRedirect> 

            <ProtectedRoute user={user} path={ROUTES.SESSION} >
                <Session />
            </ProtectedRoute>


        </Switch>
    </Router>


    )
}

export default App