import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const AddLoaiSan = () => {
  const [loaisan, setloaisan] = useState([]);
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setloaisan((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { tenloaisan, soluongnguoi,gia } = loaisan;
    axios
      .post("/api/loaiSan/add", {
        tenloaisan: tenloaisan,
        soluongnguoi: soluongnguoi,
        gia: gia
      })
      .then(() => {
        setError("");
        navigate('/admin/loaisan');
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }


  return (
    <>
      <Link to={'/admin/loaisan'} className="btn btn-success mt-2">Quay lại</Link>
      <h3>Thêm mới loại sân</h3>
      <p className="text-danger">{error}</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row align-items-center g-3">
          <div className="col-auto">
            <label htmlFor="tenloaisan">Tên loại sân</label>
            <input
              type="text"
              name="tenloaisan"
              className="form-control"
              id="tenloaisan"
              value={loaisan.tenloaisan || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="soluongnguoi">Số lượng người</label>
            <input
              type="text"
              name="soluongnguoi"
              className="form-control"
              id="soluongnguoi"
              value={loaisan.soluongnguoi || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="gia">Giá</label>
            <input
              type="text"
              name="gia"
              className="form-control"
              id="gia"
              value={loaisan.gia || ""}
              onChange={handleChange}
              required
            />
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

export default AddLoaiSan;
