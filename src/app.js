import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useLocation } from 'react-router'
import {
  DataSheet,
  Signup,
  Signin,
  ClientList,
  NewClientList,
  Home,
  Profile,
  Session,
} from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "hooks";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { IsUserRedirect, ProtectedRoute } from "helpers/routes";
import { pageTransitions } from "constants/motionVariants";

function App() {
  // const location = useLocation()
  const { user } = useAuthListener();

  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.CLIENT_LIST}
                path={ROUTES.SIGN_UP}
              >
                <Signup />
              </IsUserRedirect>

              <ProtectedRoute user={user} path={ROUTES.DATASHEET}>
                <DataSheet />
              </ProtectedRoute>

              <ProtectedRoute user={user} path={ROUTES.CLIENT_LIST}>
                <NewClientList />
              </ProtectedRoute>

              <ProtectedRoute user={user} path={ROUTES.PROFILE}>
                <Profile />
              </ProtectedRoute>

              <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.CLIENT_LIST}
                exact
                path={ROUTES.HOME}
              >
                <Home layout />
              </IsUserRedirect>

              <ProtectedRoute user={user} path={ROUTES.SESSION}>
                <Session />
              </ProtectedRoute>
            </Switch>
          </AnimatePresence>
        )}
      ></Route>
    </Router>
  );
}

export default App;
