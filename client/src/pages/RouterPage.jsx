import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Index from './Loaisan/Index'
import Add from './Loaisan/Add'
import Edit from './Loaisan/Edit'



function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path='/loaisan' exact component={Index} />
          <Route path='/add' component={Add} />
          <Route path='/:id' component={Edit} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterPage