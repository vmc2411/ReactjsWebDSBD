import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const AddTaiKhoan = () => {
    const [taikhoan, setTaikhoan] = useState({ fullname: "", username: "", password: "", isAdmin: true });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleChange(event) {
        setTaikhoan((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { fullname, username, password, isAdmin } = taikhoan;
        axios
            .post("/api/auth/register", {
                fullname: fullname,
                username: username,
                password: password,
                isAdmin: isAdmin
            })
            .then(() => {
                setError("");
                navigate('/admin/taikhoan');
            })
            .catch((err) => alert(err.response.data.message));
    }


    return (
        <>
            <Link to={'/admin/taikhoan'} className="btn btn-success mt-2">Quay lại</Link>
            <h3>Thêm mới tài khoản</h3>
            <p className="text-danger">{error}</p>
            <form method="post" onSubmit={handleSubmit}>
                <div className="row align-items-center g-3">
                    <div className="col-auto">
                        <label>Họ và tên</label>
                        <input
                            type="text"
                            name="fullname"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label>Tên tài khoản</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label>Vai trò</label>
                        <select
                            className="form-control"
                            name="isAdmin"
                            onChange={handleChange}
                            required
                        >
                            <option value={1} key={1}>
                                Admin
                            </option>
                            <option value={0} key={2}>
                                User
                            </option>
                        </select>
                    </div>
                    <div className="col-auto align-self-end">
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-plus-circle"></i>Thêm
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddTaiKhoan;
