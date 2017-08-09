import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from '../comps/Landing'
import Browse from '../comps/Browse'
import Cart from '../comps/Cart'
import Checkout from '../comps/Checkout'

export default(
    <Switch>
        <Route component={Landing} exact path='/'/>
        <Route component={Browse} path='/browse/:type' />
        <Route component={Cart} path='/cart' />
        <Route component={Checkout} path='/checkout' />
    </Switch>
)