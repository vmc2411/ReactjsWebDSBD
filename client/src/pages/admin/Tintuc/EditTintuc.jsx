import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Editor from "../../../ckeditor/ckeditor";

const EditTinTuc = () => {
    const [id, setId] = useState(useParams().id);
    const [tintuc, setTinTuc] = useState({ TieuDe: "", NoiDung: "", NgayLap: "", LoaiTinTuc: "", User: "" });
    const [loaitintucs, setLoaiTinTucs] = useState([
        { _id: 0, tenloaitintuc: "Chọn loại tin tức" },
    ]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const datecreate = Date.now;
    function handleChange(event) {
        setTinTuc((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    }
    const [data, setData] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        const { TieuDe, NoiDung, datecreate, LoaiTinTuc, User } = tintuc;
        axios
            .put(`http://localhost:8800/api/tintucs/update/${id}`, {
                TieuDe: TieuDe,
                NoiDung: NoiDung,
                NgayLap: datecreate,
                LoaiTinTuc: LoaiTinTuc,
                User: User
            })
            .then(() => {
                setError("");
                navigate("/admin/tintuc");
            })
            .catch((error) => {
                console.log(error);
                setError("Vui lòng nhập đầy đủ thông tin");
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:8800/api/tintucs/${id}`).then((res) => {
            setTinTuc(res.data);
        });
        axios.get("http://localhost:8800/api/loaitintuc").then((res) => {
            setLoaiTinTucs((values) => values.concat(res.data));
        });
    }, []);

    return (
        <>
            <Link to={"/admin/tintuc"} className="btn btn-success mt-2">
                Quay lại
            </Link>
            <h3>Cập nhật thông tin sân</h3>
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
                            value={tintuc.TieuDe}
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
                    <div className="col-10 align-self-end">
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-plus-circle"></i>Cập nhật
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EditTinTuc;
