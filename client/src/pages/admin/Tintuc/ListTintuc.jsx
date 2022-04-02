import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const Tintuc = () => {
  const [tintucs, setTintucs] = useState([]);

  function Delete(row) {
    axios
      .delete(`http://localhost:8800/api/tintuc/delete/${row._id}`)
      .then((res) => {
        setTintucs(
          tintucs.filter((item) => {
            return item._id !== res.data.tintuc._id;
          })
        );
      });
  }

  useEffect(() => {
    axios.get("http://localhost:8800/api/tintuc").then((res) => {
      setTintucs(res.data);
    });
  }, []);

  const columns = [
    {
      name: "Tiêu đề",
      selector: (row) => row["TieuDe"],
      sortable: true,
    },
    {
      name: "Nội dung",
      selector: (row) => row["NoiDung"],
      sortable: true,
    },
    {
      name: "Tên loại tin tức",
      selector: (row) => row["LoaiTinTuc"].tenloaitintuc,
      sortable: true,
    },
    {
      name: "Người đăng bài",
      selector: (row) => row["User"].fullname,
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
      <h3>Danh sách tin tức</h3>
      <Link to={"/admin/tintuc/add"} className="btn btn-primary mb-2">
        <i className="fas fa-plus-circle"></i>
        Thêm mới
      </Link>
      <DataTable columns={columns} data={tintucs} pagination></DataTable>
    </>
  );
};

export default Tintuc;
