import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <div className="text-center">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            {/* <img className="mb-4" src="/client/src/assets/images/wallpaper/wallpaper_football.jpg" alt width={72} height={57} /> */}
            <h1 className="h3 mb-3 fw-normal">Đăng nhập ADMIN</h1>
            <div className="form-floating">
              <input type="text" name="username" className="form-control" id="inputUsername" />
              <label htmlFor="floatingInput">Tên đăng nhập</label>
            </div>
            <div className="form-floating">
              <input type="password" name="password" className="form-control" id="inputPassword" />
              <label htmlFor="floatingPassword">Mật khẩu</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
      </div>
    </>
  );
};
export default LoginForm;
