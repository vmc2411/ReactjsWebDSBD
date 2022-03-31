import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditKhungGio = () => {
  const [id, setId] = useState(useParams().id);
  const [khunggio, setkhunggio] = useState({ thoigianbatdau: "", thoigianketthuc: "", hesogia: "" });
 
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
    const { thoigianbatdau, thoigianketthuc, hesogia } = khunggio;
    axios
      .put(`/api/khungGio/update/${id}`, {
        thoigianbatdau: thoigianbatdau,
        thoigianketthuc: thoigianketthuc,
        hesogia: hesogia,
      })
      .then(() => {
        setError("");
        navigate("/admin/khunggio");
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }

  useEffect(() => {
    axios.get(`/api/khungGio/${id}`).then((res) => {
      setkhunggio(res.data);
    });
  }, []);

  return (
    <>
      <Link to={"/admin/khunggio"} className="btn btn-success mt-2">
        Quay lại
      </Link>
      <h3>Cập nhật thông tin sân</h3>
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
              onChange={handleChange}
              value={khunggio.thoigianbatdau}
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="thoigianketthuc">Thời gian kết thúc</label>
            <input
              type="text"
              name="thoigianketthuc"
              onChange={handleChange}
              value={khunggio.thoigianketthuc}
              className="form-control"
              id="thoigianketthuc"
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="hesogia">Hệ số giá</label>
            <input
              type="text"
              name="hesogia"
              onChange={handleChange}
              value={khunggio.hesogia}
              className="form-control"
              id="hesogia"
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

export default EditKhungGio;
