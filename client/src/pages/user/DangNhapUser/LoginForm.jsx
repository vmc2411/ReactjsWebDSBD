import Header from "../../../layout/UserLayout/Header";
import Footer from "../../../layout/UserLayout/Footer";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let request = {
      username: document.getElementById("inputUsername").value,
      password: document.getElementById("inputPassword").value,
    };
    axios
      .post("http://localhost:8800/api/auth/login", request)
      .then((res) => {
        const result = res.data.message;
        window.localStorage.setItem('iduser', res.data._id)
        window.localStorage.setItem('fullname', res.data.fullname)
        window.localStorage.setItem('accesstoken', res.data.accessToken)
        alert(result);
        navigate("/");
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <>
      <Header />
      <div className="container">
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
          </div>
          <div class="col-md-7 col-lg-6 ml-auto">
            <div class="row">
              <div class="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputUsername">Tên đăng nhập</label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      placeholder="Tên đăng nhập"
                      type="text"
                      name="username"
                      autoFocus
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="******"
                      name="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Đăng nhập
                    </button>
                  </div>
                </form>
                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-3">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span class="px-2 small text-muted font-weight-bold text-muted">
                    hoặc
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>
                <div class="text-center w-100">
                  <p class="text-muted font-weight-bold">
                    Bạn chưa có tài khoản?{" "}
                    <Link to={"/register"} class="signup-btn">
                      Đăng ký
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginForm;
