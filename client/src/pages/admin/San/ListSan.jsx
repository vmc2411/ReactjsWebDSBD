import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const San = () => {
  const [sans, setSans] = useState([]);

  function Delete(row) {
    axios
      .delete(`http://localhost:8800/api/sans/delete/${row._id}`)
      .then((res) => {
        setSans(
          sans.filter((item) => {
            return item._id !== res.data.san._id;
          })
        );
      });
  }

  useEffect(() => {
    axios.get("http://localhost:8800/api/sans").then((res) => {
      setSans(res.data);
    });
  }, []);

  const columns = [
    {
      name: "Tên sân",
      selector: (row) => row["TenSan"],
      sortable: true,
    },
    {
      name: "Tình Trạng",
      selector: (row) => row["TinhTrang"],
      sortable: true,
    },
    {
      name: "Tên loại sân",
      selector: (row) => row["LoaiSan"].tenloaisan,
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
      <h3>Danh sách sân banh</h3>
      <Link to={"/admin/san/add"} className="btn btn-primary mb-2">
        <i className="fas fa-plus-circle"></i>
        Thêm mới
      </Link>
      <DataTable columns={columns} data={sans} pagination></DataTable>
    </>
  );
};

export default San;
