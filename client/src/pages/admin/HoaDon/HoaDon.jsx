import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const HoaDon = () => {
  const [hoadons, setHoaDons] = useState([]);

  function Delete(row) {
    axios.delete(`/api/hoadon/delete/${row._id}`).then((res) => {
      setHoaDons(
        hoadons.filter((item) => {
          return item._id !== res.data.hoadon._id;
        })
      );
    });
  }

  function Update(row) {
    axios.put(`/api/hoadon/update/${row._id}`).then((res) => {
      let newHoaDon = [...hoadons];
      newHoaDon.forEach((item) => {
        if (item._id == res.data.hoadon._id) {
          item.TrangThai = res.data.hoadon.TrangThai;
        }
      });
      setHoaDons(newHoaDon);
    });
  }

  useEffect(() => {
    axios.get("/api/hoadon").then((res) => {
      setHoaDons(res.data);
    });
  }, []);

  const columns = [
    {
      name: "_id",
      selector: (row) => row["_id"],
      sortable: true,
    },
    {
      name: "Tổng tiền",
      selector: (row) => row["TongTien"],
      sortable: true,
    },
    {
      name: "Trạng thái",
      selector: (row) => {
        if (row["TrangThai"]) {
          return (
            <>
              <span style={{ color: "green", fontWeight: "bold" }}>
                Đã thanh toán
              </span>
            </>
          );
        } else {
          return (
            <>
              <span style={{ color: "red", fontWeight: "bold" }}>
                Chưa thanh toán
              </span>
            </>
          );
        }
      },
      sortable: true,
    },
    {
      name: "Ngày lập hóa đơn",
      selector: (row) => row["NgayLapHoaDon"],
      sortable: true,
    },
    {
      name: "Thao tác",
      cell: (row) => {
        if (row["TrangThai"]) {
          return (
            <>
              <button className="btn btn-danger" onClick={() => Update(row)}>
                <i class="fas fa-toggle-off"></i>
              </button>
              <button className="btn btn-danger" onClick={() => Delete(row)}>
                <i className="fas fa-times-circle"></i>
              </button>
            </>
          );
        } else {
          return (
            <>
              <button className="btn btn-success" onClick={() => Update(row)}>
                <i class="fas fa-toggle-on"></i>
              </button>
              <button className="btn btn-danger" onClick={() => Delete(row)}>
                <i className="fas fa-times-circle"></i>
              </button>
            </>
          );
        }
      },
    },
  ];

  return (
    <>
      <h3>Danh sách hóa đơn</h3>
      <DataTable columns={columns} data={hoadons} pagination></DataTable>
    </>
  );
};

export default HoaDon;
