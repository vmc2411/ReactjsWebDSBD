import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Editor from "../../../ckeditor/ckeditor";
const ThemTintuc = () => {
  const [tintuc, setTintuc] = useState({ TieuDe: "", LoaiTinTuc: "", User: "" });
  const [loaitintucs, setLoaiTintucs] = useState([
    { _id: 0, tenloaitintuc: "Chọn loại tin tức" },
  ]);
  const [user, setUser] = useState(window.localStorage.getItem('idadmin'));
  const [error, setError] = useState("");

  const [data, setData] = useState();

  const navigate = useNavigate();
  const IdAdmin = window.localStorage.getItem('idadmin');
  function handleChange(event) {
    setTintuc((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { TieuDe, LoaiTinTuc} = tintuc;
    axios
      .post("/api/tintuc/add", {
        TieuDe: TieuDe,
        NoiDung: data,
        LoaiTinTuc: LoaiTinTuc,
        User: user
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
    axios.get("/api/loaitintuc").then((res) => {
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
