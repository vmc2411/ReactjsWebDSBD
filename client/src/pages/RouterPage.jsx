import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'


function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
      </Routes>
    </Router>
</div >
  )
}

export default RouterPage