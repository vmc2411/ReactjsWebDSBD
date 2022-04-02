import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="" className="nav-link">Home</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" data-widget="fullscreen" to="" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header