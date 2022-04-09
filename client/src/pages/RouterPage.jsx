import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'

function RouterPage() {
  return (
    <div>
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" exact component={Product} />
        </Switch>
    </Router>
</div>
  )
}

export default RouterPage