import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const AddLoaiTintuc = () => {
  const [loaitintuc, setloaitintuc] = useState([]);
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setloaitintuc((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { tenloaitintuc} = loaitintuc;
    axios
      .post("/api/Loaitintuc/add", {
        tenloaitintuc: tenloaitintuc,
      })
      .then(() => {
        setError("");
        navigate('/admin/loaitintuc');
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }


  return (
    <>
      <Link to={'/admin/loaitintuc'} className="btn btn-success mt-2">Quay lại</Link>
      <h3>Thêm mới loại tin tức</h3>
      <p className="text-danger">{error}</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row align-items-center g-3">
          <div className="col-auto">
            <label htmlFor="tenloaisan">Tên loại tin tức</label>
            <input
              type="text"
              name="tenloaitintuc"
              className="form-control"
              id="tenloaitintuc"
              value={loaitintuc.tenloaitintuc || ""}
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

export default AddLoaiTintuc;
