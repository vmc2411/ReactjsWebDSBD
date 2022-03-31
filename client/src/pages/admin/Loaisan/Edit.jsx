import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditLoaiSan = () => {
  const [id, setId] = useState(useParams().id);
  const [loaisan, setloaisan] = useState({ tenloaisan: "", soluongnguoi: "", gia: "" });
 
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
    const { tenloaisan, soluongnguoi, gia } = loaisan;
    axios
      .put(`/api/loaiSan/update/${id}`, {
        tenloaisan: tenloaisan,
        soluongnguoi: soluongnguoi,
        gia: gia,
      })
      .then(() => {
        setError("");
        navigate("/admin/loaisan");
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }

  useEffect(() => {
    axios.get(`/api/loaiSan/${id}`).then((res) => {
      setloaisan(res.data);
    });
  }, []);

  return (
    <>
      <Link to={"/admin/loaisan"} className="btn btn-success mt-2">
        Quay lại
      </Link>
      <h3>Cập nhật thông tin sân</h3>
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
              onChange={handleChange}
              value={loaisan.tenloaisan}
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="soluongnguoi">Số lượng người</label>
            <input
              type="text"
              name="soluongnguoi"
              onChange={handleChange}
              value={loaisan.soluongnguoi}
              className="form-control"
              id="soluongnguoi"
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="gia">Giá</label>
            <input
              type="text"
              name="gia"
              onChange={handleChange}
              value={loaisan.gia}
              className="form-control"
              id="gia"
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

export default EditLoaiSan;
