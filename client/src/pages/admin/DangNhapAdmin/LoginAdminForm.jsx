import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let request = {
      username: document.getElementById("inputUsername").value,
      password: document.getElementById("inputPassword").value,
    };
    axios
      .post("/api/auth/admin/login", request)
      .then((res) => {
        const result = res.data.message;
        alert(result);
        window.localStorage.setItem('idadmin', res.data._id)
        window.localStorage.setItem('fullnameadmin', res.data.fullname)
        window.localStorage.setItem('accesstokenadmin', res.data.accessToken)
        navigate("/admin/san");
        window.location.reload(false);
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginleft">
            <img src="/picture/img/San-bong-1.jpg" alt="" className="imgback" />
          </div>
          <div className="loginRight">
            <h3 className="logologin">Đăng Nhập Admin</h3>
            <form className="loginBox" onSubmit={handleSubmit}>
              <label htmlFor="floatingInput">Tên đăng nhập</label>
              <input type="text" name="username" className="form-control" id="inputUsername" />
              <label htmlFor="floatingPassword">Mật khẩu</label>
              <input type="password" name="password" className="form-control" id="inputPassword" />
              <button className="w-100 btn btn-lg btn-primary" type="submit">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
