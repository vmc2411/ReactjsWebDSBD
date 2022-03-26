import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const KhungGio = () => {
  const [Khunggio, setKhunggio] = useState([]);

  function Delete(row) {
    axios
      .delete(`/api/khungGio/delete/${row._id}`)
      .then((res) => {
        setKhunggio(
          Khunggio.filter((item) => {
            return item._id !== res.data.khunggio._id;
          })
        );
      });
  }

  useEffect(() => {
    axios.get("/api/khungGio").then((res) => {
        console.log(res.data)
        setKhunggio(res.data);
    });
  }, []);

  const columns = [
    {
      name: "Thời gian bắt đầu",
      selector: (row) => row["thoigianbatdau"],
      sortable: true,
    },
    {
      name: "Thời gian kết thúc",
      selector: (row) => row["thoigianketthuc"],
      sortable: true,
    },
    {
      name: "Hệ số giá",
      selector: (row) => row["hesogia"],
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
      <Link to={"/admin/khunggio/add"} className="btn btn-primary mb-2">
        <i className="fas fa-plus-circle"></i>
        Thêm mới
      </Link>
      <DataTable columns={columns} data={Khunggio} pagination></DataTable>
    </>
  );
};

export default KhungGio;
