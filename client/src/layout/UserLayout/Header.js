import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offer mb-3 mb-lg-0">
              <Link to={'/'} className="btn btn-success btn-sm">Offer of the day</Link>
              <Link to={'/'} className="ml-1">Get flat 35% off on orders over $50!</Link>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to={'/'} className="navbar-brand home">
            <img src="" className="d-none d-md-inline-block" />
            <img src="/img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" />
            <span className="sr-only">Obaju - go to homepage</span>
          </Link>
          <div className="navbar-buttons">
            <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify" /></button>
            <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler">
              <span className="sr-only">Toggle search</span>
              <i className="fa fa-search" />
            </button>
          </div>
          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to={'/'} className="nav-link ">Trang chủ</Link></li>
              <li className="nav-item"><Link to={'/'} className="nav-link">Giới thiệu</Link></li>
              <li className="nav-item"><Link to={'/san'} className=" nav-link">Đặt sân</Link></li>
              <li className="nav-item"><Link to={'/'} className="nav-link ">Tin tức</Link></li>
              <li className="nav-item"><Link to={'/'} className="nav-link">Liên hệ</Link></li>
            </ul>
            <div className="navbar-buttons d-flex justify-content-end">
              <div id="search-not-mobile" className="navbar-collapse collapse" />
              <Link data-toggle="collapse" to={'/'} className="btn navbar-btn btn-primary d-none d-lg-inline-block">
                <span className="sr-only">Toggle search</span>
                <i className="fa fa-search" />
              </Link>

            </div>
          </div>
        </div>
      </nav>
      <div id="search" className="collapse">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
              <input type="text" placeholder="Search" className="form-control" />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary"><i className="fa fa-search" /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>

  )
}

export default Header