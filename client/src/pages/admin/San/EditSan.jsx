import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditSan = () => {
  const [id, setId] = useState(useParams().id);
  const [san, setSan] = useState({ TenSan: "", TinhTrang: "", LoaiSan: "" });
  const [loaisans, setLoaiSans] = useState([
    { _id: 0, tenloaisan: "Chọn loại sân" },
  ]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setSan((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { TenSan, TinhTrang, LoaiSan } = san;
    axios
      .put(`http://localhost:8800/api/sans/update/${id}`, {
        TenSan: TenSan,
        TinhTrang: TinhTrang,
        LoaiSan: LoaiSan,
      })
      .then(() => {
        setError("");
        navigate("/admin/san");
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8800/api/sans/${id}`).then((res) => {
      setSan(res.data);
    });
    axios.get("http://localhost:8800/api/loaisan").then((res) => {
      setLoaiSans((values) => values.concat(res.data));
    });
  }, []);

  return (
    <>
      <Link to={"/admin/san"} className="btn btn-success mt-2">
        Quay lại
      </Link>
      <h3>Cập nhật thông tin sân</h3>
      <p className="text-danger">{error}</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row align-items-center g-3">
          <div className="col-auto">
            <label htmlFor="tensan">Tên sân</label>
            <input
              type="text"
              name="TenSan"
              className="form-control"
              id="TenSan"
              onChange={handleChange}
              value={san.TenSan}
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="TinhTrang">Tình trạng</label>
            <input
              type="text"
              name="TinhTrang"
              onChange={handleChange}
              value={san.TinhTrang}
              className="form-control"
              id="TinhTrang"
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="loaisan">Loại sân</label>
            <select
              className="form-control"
              id="loaisan"
              name="LoaiSan"
              onChange={handleChange}
              required
            >
              {loaisans.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.tenloaisan}
                  </option>
                );
              })}
            </select>
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

export default EditSan;
