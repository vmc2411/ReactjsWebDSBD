import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from "../../../assets/images/user/registerpic.svg";
const RegisterForm = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let request = {
      fullname: document.getElementById("inputFullname").value,
      username: document.getElementById("inputUsername").value,
      password: document.getElementById("inputPassword").value,
      isAdmin: 0,
    };
    axios
      .post("/api/auth/register", request)
      .then((res) => {
        const result = res.data.message;
        alert(result);
        navigate("/");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <div className="container">
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <Logo />
          </div>
          <div class="col-md-7 col-lg-6 ml-auto">
            <div class="row">
              <div class="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputFullname">Họ và tên</label>
                    <input className="form-control" id="inputFullname" placeholder="Họ và tên" type="text" name="fullname" autoFocus required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputUsername">Tên đăng nhập</label>
                    <input className="form-control" id="inputUsername" placeholder="Tên đăng nhập" type="text" name="username" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Mật khẩu</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="******" name="password" required />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Đăng ký</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterForm;
