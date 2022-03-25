import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Auth from '../views/Auth'

function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/login" render={props => <Auth {...props} authRoute='login' />} />
          <Route path="/register" render={props => <Auth {...props} authRoute='register' />} />
      </Routes>
    </Router>
</div >
  )
}

export default RouterPage