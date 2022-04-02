import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const AddSan = () => {
  const [san, setSan] = useState({ TenSan: "", LoaiSan: "" });
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
    const { TenSan, LoaiSan } = san;
    axios
      .post("http://localhost:8800/api/sans/add", {
        TenSan: TenSan,
        LoaiSan: LoaiSan,
      })
      .then(() => {
        setError("");
        navigate('/admin/san');
      })
      .catch((error) => {
        console.log(error);
        setError("Vui lòng nhập đầy đủ thông tin");
      });
  }

  useEffect(() => {
    axios.get("http://localhost:8800/api/loaisan").then((res) => {
      setLoaiSans((values) => values.concat(res.data));
    });
  }, []);

  return (
    <>
      <Link to={'/admin/san'} className="btn btn-success mt-2">Quay lại</Link>
      <h3>Thêm mới sân</h3>
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
              value={san.TenSan || ""}
              onChange={handleChange}
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
              <i className="fas fa-plus-circle"></i>Thêm
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddSan;
