import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offer mb-3 mb-lg-0"><a href="#" className="btn btn-success btn-sm">Offer of the day</a><a href="#" className="ml-1">Get flat 35% off on orders over $50!</a></div>
            <div className="col-lg-6 text-center text-lg-right">

            </div>
          </div>
        </div>
        <div id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="Login" aria-hidden="true" className="modal fade">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Customer login</h5>
                <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <form action="customer-orders.html" method="post">
                  <div className="form-group">
                    <input id="email-modal" type="text" placeholder="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input id="password-modal" type="password" placeholder="password" className="form-control" />
                  </div>
                  <p className="text-center">
                    <button className="btn btn-primary"><i className="fa fa-sign-in" /> Log in</button>
                  </p>
                </form>
                <p className="text-center text-muted">Not registered yet?</p>
                <p className="text-center text-muted"><a href="register.html"><strong>Register now</strong></a>! It is easy
                  and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>
              </div>
            </div>
          </div>
        </div>
        {/* *** TOP BAR END ****/}
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container"><a href className="navbar-brand home">
          <img src="" className="d-none d-md-inline-block" /><img src="/img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" /><span className="sr-only">Obaju - go to homepage</span></a>
          <div className="navbar-buttons">
            <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify" /></button>
            <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler">
              <span className="sr-only">Toggle search</span>
              <i className="fa fa-search" />
            </button>

          </div>
          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a href className="nav-link ">Trang chủ</a></li>
              <li className="nav-item"><a href className="nav-link">Giới thiệu</a></li>
              <li className="nav-item"><a href className=" nav-link">Đặt sân</a></li>
              <li className="nav-item"><a href className="nav-link ">Tin tức</a></li>
              <li className="nav-item"><a href className="nav-link">Liên hệ</a></li>
            </ul>
            <div className="navbar-buttons d-flex justify-content-end">
              <div id="search-not-mobile" className="navbar-collapse collapse" />
              <a data-toggle="collapse" href="#search" className="btn navbar-btn btn-primary d-none d-lg-inline-block">
                <span className="sr-only">Toggle search</span>
                <i className="fa fa-search" />
              </a>

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