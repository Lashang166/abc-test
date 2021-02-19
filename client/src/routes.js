import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import { Register } from './pages/Login'
import Admin from './pages/admin/Admin'
import Shop from './pages/Shop'
import Product from './pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Admin} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/product/:id" component={Product} />
        </Switch>
    )
}

export default Routes
