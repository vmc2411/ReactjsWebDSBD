import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Test from './Test'


function RouterPage() {
  return (
    <div>
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" exact component={Product} />
            <Route path="/test" exact component={Test} />
 
        </Switch>
    </Router>
</div>
  )
}

export default RouterPage