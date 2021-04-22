import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={() => {
                if (user == null) {
                    return children;
                }
                
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    );
                }
            
            return null;
        }}
        />
    )
}

export function ProtectedRoute({ user, children, ...restProps }) {
    
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if (user) {
                    return children;
                }
                
                if (user == null) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location },
                            }}
                        />
                    );
                }
                
                return null;
            }}
        />
    )
}