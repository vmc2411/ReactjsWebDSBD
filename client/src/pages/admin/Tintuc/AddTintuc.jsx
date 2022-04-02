import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Editor from "../../../ckeditor/ckeditor";
const ThemTintuc = () => {
  const [tintuc, setTintuc] = useState({ TieuDe: "", NoiDung: "", NgayLap: "", LoaiTinTuc: "", User:"" });
  const [loaitintucs, setLoaiTintucs] = useState([
    { _id: 0, tenloaitintuc: "Chọn loại tin tức" },
  ]);
  const [users, setUsers] = useState([
    { _id: 0, User: "Chọn người tạo" },
  ]);
  const [error, setError] = useState("");
  // const iduser = window.localStorage("idadmin");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    setTintuc((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { TieuDe, NoiDung, datecreate, LoaiTinTuc, User } = tintuc;
    axios
      .post("http://localhost:8800/api/tintuc/add", {
        TieuDe: TieuDe,
        NoiDung: NoiDung,
        NgayLap: datecreate, 
        LoaiTinTuc: LoaiTinTuc,
        User: User
      })
      .then(() => {
        setError("");
        navigate('/admin/tintuc');
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }

  useEffect(() => {
    axios.get("http://localhost:8800/api/loaitintuc").then((res) => {
        setLoaiTintucs((values) => values.concat(res.data));
    });
  }, []);

  return (
    <>
      <Link to={'/admin/tintuc'} className="btn btn-success mt-2">Quay lại</Link>
      <h3>Thêm mới tin tức</h3>
      <p className="text-danger">{error}</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row align-items-center g-3">
          <div className="col-10">
            <label htmlFor="tieude">Tiêu đề</label>
            <input
              type="text"
              name="TieuDe"
              className="form-control"
              id="TieuDe"
              value={tintuc.TieuDe || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
                        <label htmlFor="noidung">Nội dung</label>
                        <Editor
                            type="text"
                            name="NoiDung"
                            className="form-control"
                            id="NoiDung"
                            value={tintuc.NoiDung}
                            onChange={(data) => {
                                setData(data);
                              }}
                            required
                        />
                              {JSON.stringify(data)}
                    </div>
          <div className="col-10">
            <label htmlFor="loaitintuc">Loại tin tức</label>
            <select
              className="form-control"
              id="LoaiTinTuc"
              name="LoaiTinTuc"
              onChange={handleChange}
              required
            >
              {loaitintucs.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.tenloaitintuc}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-10">
            <label htmlFor="user">Người tạo</label>
            <select
              className="form-control"
              id="User"
              name="User"
              onChange={handleChange}
              required
            >
              {users.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.User}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-10 align-self-end">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-plus-circle"></i>Thêm
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ThemTintuc;
