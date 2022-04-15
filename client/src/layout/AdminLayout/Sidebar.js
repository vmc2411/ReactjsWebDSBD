import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/footbal_logo.png'
import avatar from '../../assets/images/user/user_icon.png'
const Sidebar = () => {
    const fullnameadmin = window.localStorage.getItem("fullnameadmin");
    function logout() {
        localStorage.removeItem('idadmin');
        localStorage.removeItem('fullnameadmin');
        localStorage.removeItem('accesstokenadmin');
    }
    return (
        <div className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={'/admin/san'} className="brand-link">
                <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light text-white">DTHCV FootBall</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={avatar} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <Link to={'/admin/san'} className="d-block">{fullnameadmin}</Link>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column text-white" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="nav-icon far fa-calendar-alt" />
                                <p>
                                    Sân banh
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={'/admin/san'} className="nav-link">
                                        <i className="fas fa-angle-right nav-icon" />
                                        <p>Danh sách sân banh</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/admin/loaisan'} className="nav-link">
                                        <i className="fas fa-angle-right nav-icon" />
                                        <p>Danh sách loại sân</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/admin/khunggio'} className="nav-link">
                                        <i className="fas fa-angle-right nav-icon" />
                                        <p>Danh sách khung giờ</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/admin/taikhoan'} className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Tài khoản
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/admin/loaitintuc'} className="nav-link">
                        
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Loại tin tức
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/admin/tintuc'} className="nav-link">
                        
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Tin tức
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/admin/hoadon'} className="nav-link">
                                <i className="nav-icon fas fa-columns" />
                                <p>
                                    Hóa đơn
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item mt-md-auto">
                            <Link to={'/admin'} className="nav-link" onClick={() => logout()}>
                                <i className="nav-icon fas fa-book" />
                                <p>
                                    Đăng xuất
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Sidebar