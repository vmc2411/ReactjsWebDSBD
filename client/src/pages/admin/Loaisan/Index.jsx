import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const LoaiSan = () => {
  const [Loaisan, setLoaisan] = useState([]);

  function Delete(row) {
    axios
      .delete(`/api/loaiSan/delete/${row._id}`)
      .then((res) => {
        setLoaisan(
            Loaisan.filter((item) => {
            return item._id !== res.data.loaisan._id;
          })
        );
      });
  }

  useEffect(() => {
    axios.get("/api/loaiSan").then((res) => {
        console.log(res.data)
        setLoaisan(res.data);
    });
  }, []);

  const columns = [
    {
      name: "Tên loại sân",
      selector: (row) => row["tenloaisan"],
      sortable: true,
    },
    {
      name: "Số lượng người",
      selector: (row) => row["soluongnguoi"],
      sortable: true,
    },
    {
      name: "Giá",
      selector: (row) => row["gia"],
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
      <h3>Danh sách loại sân</h3>
      <Link to={"/admin/loaisan/add"} className="btn btn-primary mb-2">
        <i className="fas fa-plus-circle"></i>
        Thêm mới
      </Link>
      <DataTable columns={columns} data={Loaisan} pagination></DataTable>
    </>
  );
};

export default LoaiSan;
