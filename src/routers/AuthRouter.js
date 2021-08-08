import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../containers/login/Login'
import Register from '../containers/register/Register'

const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/auth/login"
                    component={Login} />
                <Route exact path='/auth/register' component={Register} />
                <Redirect to='/auth/login' />
            </Switch>
        </Router>
    )
}

export default AuthRouter
