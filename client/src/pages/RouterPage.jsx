import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Test from './Test'
import List from '../Components/List'
import Add from '../Components/Add'
import Edit from '../Components/Edit'


function RouterPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path='/list' component={List} />
          <Route path='/add' component={Add} />
          <Route path='/:id' component={Edit} />
        </Switch>
      </Router>
    </div>
  )
}

export default RouterPage