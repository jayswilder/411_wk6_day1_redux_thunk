import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Login from './components/Login'
import Home from './containers/Home'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    console.log(cookies['loggedIn']);
    return cookies['loggedIn'] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => checkAuth() ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router