import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const LoaiTinTuc = () => {
  const [LoaiTinTuc, setLoaitintuc] = useState([]);

  function Delete(row) {
    axios
      .delete(`/api/Loaitintuc/delete/${row._id}`)
      .then((res) => {
        setLoaitintuc(
            LoaiTinTuc.filter((item) => {
            return item._id !== res.data.loaitintuc._id;
          })
        );
      });
  }

  useEffect(() => {
    axios.get("/api/Loaitintuc").then((res) => {
        console.log(res.data)
        setLoaitintuc(res.data);
    });
  }, []);

  const columns = [
    {
      name: "Tên loại tin tức",
      selector: (row) => row["tenloaitintuc"],
      sortable: true,
    },
    {
      name: "Thao tác",
      cell: (row) => (
        <>
          <Link to={`edit/${row._id}`} className="btn btn-primary">
            <i className="fas fa-edit"></i>
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => Delete(row)}
          >
            <i className="fas fa-times-circle"></i>
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <h3>Danh sách loại tin tức</h3>
      <Link to={"/admin/loaitintuc/add"} className="btn btn-primary mb-2">
        <i className="fas fa-plus-circle"></i>
        Thêm mới
      </Link>
      <DataTable columns={columns} data={LoaiTinTuc} pagination></DataTable>
    </>
  );
};

export default LoaiTinTuc;
