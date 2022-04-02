import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const accestoken = window.localStorage.getItem("accesstoken");
  const fullname = window.localStorage.getItem("fullname");
  function logout() {
    localStorage.removeItem('iduser');
    localStorage.removeItem('fullname');
    localStorage.removeItem('accesstoken');
  }
  return (
    <header className="header">
      <div id="top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offer mb-3 mb-lg-0">

            </div>
            <div class="col-lg-6 text-center text-lg-right">
              {(() => {
                if (accestoken !== null) {
                  return (
                    <ul class="menu list-inline mb-0">
                      <li class="list-inline-item"><Link to="">{fullname}</Link></li>
                      <li class="list-inline-item">
                        <Link to="/" onClick={() => logout()}>Đăng xuất</Link>
                      </li>
                    </ul>
                  );
                } else {
                  return (
                    <ul class="menu list-inline mb-0">
                      <li class="list-inline-item">
                        <Link to="/login">Đăng nhập</Link>
                      </li>
                      <li class="list-inline-item">
                        <Link to="/register">Đăng ký</Link>
                      </li>

                    </ul>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to={'/'} className="navbar-brand home">
            <img src="picture/img/LogoDTHCV.svg" className="d-none d-md-inline-block" />
            <img src="picture/img/LogoDTHCV.svg" alt="Obaju logo" className="d-inline-block d-md-none" />
            <span className="sr-only">Obaju - go to homepage</span>
          </Link>
          <div className="navbar-buttons">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-align-justify" />
            </button>

          </div>
          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to={'/'} className="nav-link ">Trang chủ</Link></li>
              <li className="nav-item"><Link to={'/gioithieu'} className="nav-link">Giới thiệu</Link></li>
              <li className="nav-item"><Link to={'/san'} className=" nav-link">Đặt sân</Link></li>
              <li className="nav-item"><Link to={'/tintuc'} className="nav-link ">Tin tức</Link></li>
              <li className="nav-item"><Link to={'/lienhe'} className="nav-link">Liên hệ</Link></li>
            </ul>
            <div className="navbar-buttons d-flex justify-content-end">
              <div id="search-not-mobile" className="navbar-collapse collapse" />

            </div>
          </div>
        </div>
      </nav>
      <div id="search" className="collapse">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-search" />
                  <div id="clockDisplay"></div>

                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
