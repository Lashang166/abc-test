import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default Routes
