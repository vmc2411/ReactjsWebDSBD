import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const AddKhungGio = () => {
  const [khunggio, setkhunggio] = useState([]);
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setkhunggio((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { thoigianbatdau, thoigianketthuc,hesogia } = khunggio;
    axios
      .post("/api/khungGio/add", {
        thoigianbatdau: thoigianbatdau,
        thoigianketthuc: thoigianketthuc,
        hesogia: hesogia
      })
      .then(() => {
        setError("");
        navigate('/admin/khunggio');
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }


  return (
    <>
      <Link to={'/admin/khunggio'} className="btn btn-success mt-2">Quay lại</Link>
      <h3>Thêm mới loại sân</h3>
      <p className="text-danger">{error}</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row align-items-center g-3">
          <div className="col-auto">
            <label htmlFor="thoigianbatdau">Thời gian bắt đầu</label>
            <input
              type="text"
              name="thoigianbatdau"
              className="form-control"
              id="thoigianbatdau"
              value={khunggio.thoigianbatdau || ""}
              onChange={handleChange}
              required
            />
            
            
          </div>
          <div className="col-auto">
            <label htmlFor="thoigianketthuc">Thời gian kết thúc</label>
            <input
              type="text"
              name="thoigianketthuc"
              className="form-control"
              id="thoigianketthuc"
              value={khunggio.thoigianketthuc || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="hesogia">Hệ số giá</label>
            <input
              type="text"
              name="hesogia"
              className="form-control"
              id="hesogia"
              value={khunggio.hesogia || ""}
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

export default AddKhungGio;
