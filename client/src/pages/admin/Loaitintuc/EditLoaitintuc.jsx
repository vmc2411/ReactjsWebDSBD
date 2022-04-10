import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditLoaiTintuc = () => {
  const [id, setId] = useState(useParams().id);
  const [loaitintuc, setloaitintuc] = useState({ tenloaitintuc: "" });
 
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
    const { tenloaitintuc } = loaitintuc;
    axios
      .put(`/api/Loaitintuc/update/${id}`, {
        tenloaitintuc: tenloaitintuc,
      })
      .then(() => {
        setError("");
        navigate("/admin/loaitintuc");
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }

  useEffect(() => {
    axios.get(`/api/Loaitintuc/${id}`).then((res) => {
      setloaitintuc(res.data);
    });
  }, []);

  return (
    <>
      <Link to={"/admin/Loaitintuc"} className="btn btn-success mt-2">
        Quay lại
      </Link>
      <h3>Cập nhật thông tin loại tin tức</h3>
      <p className="text-danger">{error}</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row align-items-center g-3">
          <div className="col-auto">
            <label htmlFor="tenloaitintuc">Tên loại tin tức</label>
            <input
              type="text"
              name="tenloaitintuc"
              className="form-control"
              id="tenloaitintuc"
              onChange={handleChange}
              value={loaitintuc.tenloaitintuc}
              required
            />
          </div>
          <div className="col-auto align-self-end">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-plus-circle"></i>Cập nhật
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditLoaiTintuc;
