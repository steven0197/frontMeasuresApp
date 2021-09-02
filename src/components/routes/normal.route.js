import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { getAccessToken} from 'axios-jwt';

export const NormalRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = true
        console.log(currentUser);
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
)